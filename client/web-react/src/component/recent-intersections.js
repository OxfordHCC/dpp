import React from 'react';
import IntersectionList from './intersection-list';

const RecentIntersections = ({ intersections }) => {
    return (
        <div className="recent-intersections">
            Recent intersections:
            <IntersectionList intersections={intersections}/>
        </div>
    );
}

export default RecentIntersections;