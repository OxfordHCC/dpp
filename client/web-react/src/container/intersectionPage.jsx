import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { useHistory, useLocation, Redirect } from "react-router-dom";
import IntersectionCard from '../component/intersection-card';


const IntersectionPage = () => {
    let history = useHistory();
    let location = useLocation();

    let intersection = null;
    try{
        intersection = JSON.parse(location.intersection);
    }catch(err){
        return <Redirect to={'/'}/>;
    }
    
    return (
        <div className="intersection page">
          <Button onClick = { () => history.goBack()}> Back </Button>
          <IntersectionCard
            expanded={true}
            intersection={intersection}/>
        </div>
    );
};


export default IntersectionPage;
