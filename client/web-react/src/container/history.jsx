import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from '../component/map';
import HistoryNavigation from '../container/history-navigation';
import {
    showHistory,
    selectIntersection
} from '../actions/history';
import location from '../lib/location.js';
import '../style/history.less';


const History = ({
    selectIntersection,
    selectedIntersection,
    intersections=[],
    openroutes=[],
    locations=[],
    devices = [],
    showHistory
}) => {

    //these lambdas all return objects conforming to leaflet docs
    const getDeviceCircle = (point) => ({
        point: [point.latitude, point.longitude],
        options: {
            radius: point.radius || 30,
            color: "red",
            stroke: false
        }
    });

    const getIntersectionCircle = (point) => ({
        point: [point.latitude, point.longitude],
        options: {
            radius: point.accuracy || 30,
            color:'magenta',
            stroke: false
        },
        eventHandlers:{
            'click': () => selectIntersection(point)
        }
    });

    const getSelectedCircle = (point) => ({
        point: [point.latitude, point.longitude],
        options: {
            radius: point.accuracy || 30,
            color: "red",
            fill: false
        }
    });

    const getLocationCircle = (entry) => ({
        point: [ entry.latitude, entry.longitude ],
        options: {
            radius: entry.accuracy,
            color: 'blue',
            stroke: false
        }
    });


    const getOpenRouteLine = (points) => ({
        points: points.map(({latitude, longitude}) => [latitude, longitude]), 
        options: {
            color: "#7d7dff",
            className: "animated-path",
            weight: 5
        }
    });
    
	const params = useParams();
    const date = new Date(params.date).toISOString();
    React.useEffect(() => {
        showHistory(date);
    }, [date, showHistory]);

    let bounds = null;
    if(selectedIntersection){
        bounds = location.getBoundsArray([selectedIntersection], { min: 300 });
    }else{
        bounds = location.getBoundsArray(openroutes, { pad: 0.1 });
    }

    const deviceCircles = devices.map(getDeviceCircle);
    const locationCircles = locations.map(getLocationCircle);
    const intersectionCircles = intersections
          .filter(inx => inx.detectionType === "geolocation")
          .map(getIntersectionCircle);
    const paths = [getOpenRouteLine(openroutes)];

    let selectedCircle = null;

    try{
        selectedCircle = getSelectedCircle(selectedIntersection);
    }catch(err){
        console.warn(err);
    }

    return (
        <div className="history page"> 
          <div className="sidebar vertical-scroll-container">
            <HistoryNavigation intersections={intersections} date={date}/>
          </div>
          <Map 
            paths = {paths}
            circles = {[
                ...deviceCircles,
                ...locationCircles,
                ...intersectionCircles,
                selectedCircle
            ]}
            bounds = {bounds}
          />
        </div>
    );
};

const connectState = (state) => ({
    selectedIntersection: state.history.selectedIntersection,
    ...state.history.entries
});

const connectDispatch = (dispatch) => ({
    selectIntersection : (inx) => dispatch(selectIntersection(inx)),
    showHistory: (date) => dispatch(showHistory(date))
});

export default connect(connectState, connectDispatch)(History);
