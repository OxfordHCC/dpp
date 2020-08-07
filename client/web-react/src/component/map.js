import React from 'react';
import L from 'leaflet';

window.L = L;

export default class Map extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            center: this.getCenter(props)
        }
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

    drawCircle({point, options}){
        return L.circle(point, options).addTo(this.userLayer);
    }

    drawMarker({point, options}){
        return L.marker(point, options).addTo(this.userLayer);
    }

    componentDidUpdate(prevProps){
        this.userLayer.clearLayers();
        //for each path, draw path
        if(this.props.paths){
            this.props.paths.filter(x => x !== undefined)
                .forEach(path => this.drawPath(path));
        }
        if(this.props.markers){
            this.props.markers.filter(x => x !== undefined)
                .forEach(x => this.drawMarker(x));
        }
        if(this.props.circles){
            this.props.circles.filter(x => x !== undefined)
                .forEach(x => this.drawCircle(x));
        }
		if(this.props !== prevProps){
			this.center = this.getCenter(this.props);
			this.zoom = (this.props.bounds && this.props.bounds.length===2 && this.mapElem.getBoundsZoom(this.props.bounds)) || 16;
			this.mapElem.flyTo(this.center, this.zoom);
		}
       
		if(this.state.longPressMenu){
			
			console.log('should show long press menu');
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

		const onLongPress = (coord) => () => {
			console.log('long press', coord);
			this.setState({
				longPressMenu: {
					
				}
			})
			navigator.vibrate(30);
		}
        
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
        return <div className="map" id="map" ></div>
    }
}
