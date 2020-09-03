import React from 'react';
//import '../style/intersection-card.css';
import { Card, Checkbox, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


async function politeCamReq(show){
    console.log('show', show);
    await fetch(`http://10.0.2.2:9099/${show? 'show' : 'hide'}`);
}


const timeFormatter = Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric'
});

const IntersectionCard = ({intersection, expanded = false, withControls=false}) => {

    let [qadState, setQadState] = useState(false);
    
    const DetectionType = () => {
        return intersection.detectionType;
    };

    const TimeLabels = () => {
        const start = intersection.startMs;
        const end = intersection.endMs;
        
        if(!start && !end){
            return <div/>;
        }

        let startTimeLabel = start && timeFormatter.format(new Date(start));
        let endTimeLabel = end && timeFormatter.format(new Date(end));
        startTimeLabel = startTimeLabel || endTimeLabel;
        endTimeLabel = endTimeLabel || startTimeLabel;

        if(startTimeLabel === endTimeLabel){
            return <div className = "times">{startTimeLabel}</div>;
        }

        return <div className = "times">{startTimeLabel} - {endTimeLabel}</div>;
    };
    
    const Name = () => {
        const pManifest = intersection.pManifest;
        if(pManifest.name){
            return pManifest.name;
        }
        if(pManifest['man_made']){
            const manMade = pManifest['man_made'];
            if(manMade === 'surveillance'){
                return "Surveillance device";
            }
        }
        return 'Unnamed device';
    };

    const toggle = () => {
        setQadState((prevState) => !prevState);
        politeCamReq(qadState);
    };
  
    const Description = () => {
        const pManifest = intersection.pManifest;
        const fields = Object.keys(pManifest).map(k => {
            let value = pManifest[k];
            if(Array.isArray(value)){
                value = value.join();
            }
            return <div key={k}>{k}: {value}</div>;
        });
        
        return [
            ...fields,
            (withControls && pManifest.uuid === "not-uuid-polite-cam")?
                <Checkbox
                  slider
                  checked={qadState}
                  label= "Mask face"
                  onChange={ toggle }
                /> : null
        ];
    };

	return (
		<Card
          fluid
          header={ Name() }
          meta={ TimeLabels() }
          description={ (expanded)? Description(intersection) : null }
          extra={(
              <div>
                { DetectionType() }
                {
                    !expanded?
                        <Link to={{
                            pathname: "/intersection",
                            intersection: JSON.stringify(intersection)
                        }}><Button floated='right'>View</Button></Link>
                    : <span/>
                }
              </div>)}
        />
	);
}

export default IntersectionCard;
