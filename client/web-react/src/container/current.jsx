import React from 'react';
import { connect } from 'react-redux';
import CurrentIntersections from '../component/current-intersections';
import searchIll from '../images/clip/clip-2.png';
import { Header } from 'semantic-ui-react';

/**
 * Main container shows currently intersecting controllers and the most recent
 * intersections.
 *  
 */

const Current = ({ currentIntersections }) => {    

    const Content = () =>{
        if(currentIntersections.length === 0){
            return (
                <div style={({
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                })}>
                  
                  <img
                    alt="no-intersections"
                    style={({
                        maxWidth:"960px",
                        width:"100%"
                    })}
                    src={searchIll}></img>
                  <Header color="blue" as="h2">No intersections</Header>
                </div>
            );
        }
        return  <CurrentIntersections intersections={currentIntersections} withControls={true}/>;
    };
    
    return (
		<div className="main page"
             style={({
                 overflow:"hidden"
             })}
        >
          {Content()}
        </div>
    );
}

const connectState = (state) => {
    return {
        currentIntersections: state.current
    };
};

export default connect(connectState)(Current);
