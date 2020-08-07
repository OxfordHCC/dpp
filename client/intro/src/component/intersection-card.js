import React from 'react';
import '../style/intersection-card.css';
import Panel from '@atlaskit/panel';

const classNames = (obj) => {
    return Object.keys(obj).filter(attr => obj[attr]).reduce((acc, curr)=>{
        acc = `${acc} ${curr}`;
        return acc;
    },``);
}

const IntersectionCard = ({intersection, expanded = false}) => {
    const getDetectionType = (intersection) => {
        if(intersection.detectionType === 'geolocation'){
            return "🌍 Geolocation";
        }
        return;
    }
    const getGenericName = (pManifest) => {
        if(pManifest['man_made']){
            const manMade = pManifest['man_made'];
            console.log('manMade', manMade);
            if(manMade === 'surveillance'){
                return "👁️ Surrveilance device"
            }
        }
        return 'Unnamed device';
    }
    const Header = (pManifest) => <span className="title">{pManifest.name || getGenericName(pManifest)}</span>;
  
    const Description = (pManifest) => {
       return  Object.keys(pManifest).map(k => {
            let value = pManifest[k];
            if(Array.isArray(value)){
                value = value.join();
            }
            return <div key={k}>{k}: {value}</div>
        })
    }
    return (
        <div className="intersection-card">
            <div className="inner">
                <div className="manifest-details">
                    <Panel header={Header(intersection.device.privacy_manifest)}>
                        <div className="description">
                            {Description(intersection.device.privacy_manifest)}
                        </div>
                    </Panel>
                </div>
                <div className="bottom">
                    <div className="provenance">{getDetectionType(intersection)}</div>
                </div>
            </div>
        </div>
    );
}

export default IntersectionCard;