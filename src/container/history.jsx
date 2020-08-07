import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Map from '../component/map';
import HistoryNavigation from '../container/history-navigation';
import { showHistory } from '../actions/history';
import location from '../lib/location.js';
import '../style/history.less';


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
        color:'red',
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

const History = ({ intersections=[], openroutes=[], locations=[], devices = [], showHistory }) => {
	const params = useParams();
    const date = new Date(params.date).toISOString();
    const bounds = location.getBoundsArray(openroutes, { pad:0.1 });
    React.useEffect(() => {
        showHistory(date);
    }, [date, showHistory]);
    
    const deviceCircles = devices.map(getDeviceCircle);
    const locationCircles = locations.map(getLocationCircle);
    const intersectionCircles = intersections
          .filter(inx => inx.detectionType === "geolocation")
          .map(getIntersectionCircle);
    const paths = [getOpenRouteLine(openroutes)];

    return (
        <div className="history page"> 
          <div className="sidebar vertical-scroll-container">
            <HistoryNavigation intersections={intersections} date={date}/>
          </div>
          <Map 
            paths = {paths}
            circles = {[...deviceCircles, ...locationCircles, ...intersectionCircles]}
            bounds = {bounds}
          />
        </div>
    );
};

const connectState = (state) => state.history.entries;
const connectDispatch = (dispatch) => ({
    showHistory: (date) => dispatch(showHistory(date))
});

export default connect(connectState, connectDispatch)(History);
