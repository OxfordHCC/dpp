import React from 'react';
import L from 'leaflet';


export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: props.latitude,
            longitude: props.longitude
        }
    }

    drawPath(points, options){
        points = points.filter(x => x !== undefined);
        const line = L.polyline(points, options).addTo(this.mapElem);
        const path = line._path;
        const pathLen = path.getTotalLength();
        const pxSecSpeed = 1000/1; //1000px/s;
        const time = pathLen / pxSecSpeed;
        path.style.setProperty('--pathLength', pathLen);
        path.style.setProperty('--time', `${time}s`);
        setTimeout(() => {
            path.style.setProperty('stroke-dasharray', 0);
        },time+100);
    }

    drawCircle({point, options}){
        const circle = L.circle(point, options).addTo(this.mapElem);
    }

    drawMarker({point, options}){
        const marker = L.marker(point, options).addTo(this.mapElem);
    }

    componentDidUpdate(prevProps){
        //for each path, draw path
        if(this.props.paths){
            this.props.paths.filter(x => x !== undefined)
                .forEach(path => this.drawPath(path.data, path.options));
        }
        if(this.props.markers){
            this.props.markers.filter(x => x !== undefined)
                .forEach(x => this.drawMarker(x));
        }
        if(this.props.circles){
            this.props.circles.filter(x => x !== undefined)
                .forEach(x => this.drawCircle(x));
        }
    }

    componentDidMount(){
        const longPress = {
            timeout: null,
            threshold: 1500
        };

        this.mapElem = L.map('map',{
            zoomControl: false,
            attributionControl: false,
            center: [this.state.latitude, this.state.longitude],
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
        
        this.mapElem.on('mousedown', (evt) => {
            this.moved = false;
            longPress.timeout = setTimeout(() => {
                console.log('long press');
            }, longPress.threshold);
            if(this.props.onMouseDown && typeof this.props.onMouseDown === 'function'){
                this.props.onMouseDown(evt);
            }
        });

        this.mapElem.on('move', (evt) => {
            this.moved = true;
            clearTimeout(longPress.timeout);
        });
    }

    render(){
        return <div id="map" style={{height:"100%"}}></div>
    }
}