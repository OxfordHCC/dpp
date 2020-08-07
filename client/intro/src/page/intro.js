import React from 'react';
import Map from '../component/map';
import { superMapClick } from '../actions';
import { connect } from 'react-redux'; 
import '../style/intro.css';
import L from 'leaflet';
import IntersectionList from '../component/intersectionList';

import fromIconUrl from '../img/trip_origin-black-48dp/2x/baseline_trip_origin_black_48dp.png';
import toIconUrl from '../img/cancel-black-48dp/2x/baseline_cancel_black_48dp.png';


const template = (params) => 
<div id="intro" className="smartphone-portrait">
    <div className="content-inner">
        <div id="sidebar" className={(params.intersections.length === 0)? "" : "expanded"}>
            <IntersectionList intersections = {params.intersections}/>
        </div>
        <div id="map-container">
            <Map
                ref={params.mapRef} 
                onMouseClick={params.onMapClick} 
                latitude={params.latitude} 
                longitude={params.longitude}
                paths={params.mapPaths}
                markers={params.mapMarkers}
                circles={params.mapCircles}
            />
        </div>
    </div>
</div>;

const Intro = ({ dispatch, path, from, to, devices=[], intersections=[] }) => {
    const getFromMarker = (point) => point && {
        point: [point.latitude, point.longitude],
        options: {
            icon: L.icon({
                iconUrl: fromIconUrl,
                iconSize: [33, 33],
                iconAnchor: [16, 16],
                popupAnchor: [0, 0]
            })
        }
    };
    
    const getToMarker = (point) => point && {
        point: [point.latitude, point.longitude],
        options: {
            icon: L.icon({
                iconUrl: toIconUrl,
                iconSize: [33, 33],
                iconAnchor: [16, 16],
                popupAnchor: [0, -0]
            })
        }
    };

    const getDeviceCircle = (point) => point && {
        point: [point.latitude, point.longitude],
        options: {
            radius: point.radius || 30,
            color: "red",
            stroke: false
        }
    }
 
    const getIntersectionCircle = (point) => ({
        point: [point.latitude, point.longitude],
        options: {
            radius: point.accuracy || 30,
            color:'red',
        }
    })

    const getCircles = (_devices, _intersections) => {
        let res = [];
        let devices = _devices.map(getDeviceCircle);
        let intersections = _intersections.map(getIntersectionCircle);
        
        res = res.concat(devices, intersections);
        return res;
    }

    const params = {
        from,
        to,
        mapRef: React.createRef(),
        latitude: 51.753331, 
        longitude: -1.259456,
        onMapClick: ((evt) => {
            dispatch(
                superMapClick({
                    latitude: evt.latlng.lat,
                    longitude: evt.latlng.lng
                })
            );
        }),
        mapMarkers: [getFromMarker(from), getToMarker(to)],
        mapCircles: getCircles(devices, intersections),
        mapPaths: path && [
            {
                data: path, 
                options: {
                    color: "#7d7dff",
                    className: "animated-path",
                    weight:5
                }
            }
        ],
        intersections
    };

    return template(params);
}

const mapStateToProps = (state) => { 
    return {
        path: state.route,
        from: state.from,
        to: state.to,
        devices: state.devices,
        intersections: state.intersections
    }
}

export default connect(mapStateToProps)(Intro);