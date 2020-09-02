import React from 'react';
import IntersectionList from '../container/intersection-list';

const NoIntersections = () => {
    return <div className="no-intersections">No intersections</div>
}

const CurrentIntersections = ({intersections, withControls}) => {
    return(
        <div className="current-intersections">
            {   
            intersections.length > 0 ? 
					<IntersectionList intersections={intersections} withControls={withControls}/> : 
                <NoIntersections/>
            }
        </div>
    );
}

export default CurrentIntersections;
