import React from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';


export default class Map extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            center: this.getCenter(props)
        };
    }

    getCenter(props){
        if(props.bounds && props.bounds.length === 2){
            return L.latLngBounds(props.bounds).getCenter();
        }
        if(props.latitude && props.longitude){
            return [props.latitude, props.longitude];
        }

        return [51.7526234,-1.2699446];
    }

	//the weird stlye properties are there to reset the css props after it's done animating
    drawPath(path){
        const points = path.points.filter(x => x !== undefined);
        const line = L.polyline(points, path.options).addTo(this.userLayer);
        const _path = line._path;
        const pathLen = _path.getTotalLength();
        const pxSecSpeed = 1000/1; //1000px/s;
        const time = pathLen / pxSecSpeed;
        _path.style.setProperty('--pathLength', pathLen);
        _path.style.setProperty('--time', `${time}s`);
        setTimeout(() => {
            _path.style.setProperty('stroke-dasharray', 0);
        },time+100);
    }

    attachEvents(element, handlers = {}){
        Object.entries(handlers).forEach(([event, handle]) => {
            element.on(event, handle);
        });
    }

    drawCircle({ point, options, eventHandlers  }){
        return this.attachEvents(
            L.circle(point, options).addTo(this.userLayer)
            , eventHandlers);
    }

    drawMarker({ point, options }){
        return L.marker(point, options).addTo(this.userLayer);
    }

    componentDidUpdate(prevProps){
        this.userLayer.clearLayers();

        //draw paths
        if(this.props.paths){
            this.props.paths
                .filter(x => x !== undefined && x !== null)
                .forEach(path => this.drawPath(path));
        }

        //draw markers
        if(this.props.markers){
            this.props.markers
                .filter(x => x !== undefined && x !== null)
                .forEach(x => this.drawMarker(x));
        }

        //draw circles
        if(this.props.circles){
            this.props.circles
                .filter(x => x !== undefined && x !== null)
                .forEach(x => this.drawCircle(x));
        }
		
		if(this.props !== prevProps){
			this.center = this.getCenter(this.props);
			this.zoom = (this.props.bounds && this.props.bounds.length===2 && this.mapElem.getBoundsZoom(this.props.bounds)) || 16;
			this.mapElem.flyTo(this.center, this.zoom);
		}

		if(this.state.longPressMenu){
			// const latlng = this.state.longPressMenu.latlng;
			// const content = PopupContent(latlng);
            // const rootDiv = document.createElement('div');
            // ReactDOM.render(content, rootDiv);
			// const popup = L.popup({ closeOnClick: false })
			// 	  .setLatLng(latlng)
			// 	  .setContent(rootDiv)
			// 	  .openOn(this.mapElem);
		}
    }

    componentDidMount(){
		
        const longPress = {
            timeout: null,
            threshold: 300
        };

        this.mapElem = L.map('map', {
            zoomControl: false,
            attributionControl: false,
            center: this.state.center,
            zoom: 16,
            layers:[
                L.tileLayer(`https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png`,{
                    attribution: "Tile layer by stamen.com"
                })
            ]
        });
        
        this.mapElem.on('mouseup', (evt) => {
            clearTimeout(longPress.timeout);
            if(this.props.onMouseUp && typeof this.props.onMouseUp === 'function'){
                this.props.onMouseUp(evt);
            }
            if(!this.moved){
                if(this.props.onMouseClick && typeof this.props.onMouseClick === 'function'){
                    this.props.onMouseClick(evt);
                }
            }
        });

		const onLongPress = (latlng) => () => {
			console.log('long press', latlng);
			
			this.setState({
				longPressMenu: { latlng	}
			});
			
			navigator.vibrate(30);
		};
        
        this.mapElem.on('mousedown', (evt) => {
            this.moved = false;
            longPress.timeout = setTimeout(onLongPress(evt.latlng), longPress.threshold);
            if(this.props.onMouseDown && typeof this.props.onMouseDown === 'function'){
                this.props.onMouseDown(evt);
            }
        });

        this.mapElem.on('move', (evt) => {
            this.moved = true;
            clearTimeout(longPress.timeout);
        });

        this.userLayer = L.layerGroup().addTo(this.mapElem);
    }

    render(){
        return <div className="map" id="map" ></div>;
    }
}
