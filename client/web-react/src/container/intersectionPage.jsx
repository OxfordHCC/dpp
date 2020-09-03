import React from 'react';
import { Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";


const IntersectionPage = ({ intersection }) => {
    let history = useHistory();
    
    return (
        <div className="intersection page">
          <Button onClick = { () => history.goBack()} />
          {intersection}
        </div>
    );
};


export default IntersectionPage;
