import React from 'react';
import { Unique } from '../lib/util';
import IntersectionCard from './intersection-card';
import '../style/intersection-list.css';

const IntersectionList = ({intersections}) => {

    const categories = intersections.filter(Unique('provenance')).map(x => x.provenance)
    const intersectionCards = intersections.map(intersection => 
        <IntersectionCard intersection={intersection} /> 
    );

    return (
        <div className="intersection-list">
            <div className="filters">
                {categories.map(cat => <span>{cat}</span>)}
            </div>
            <div className="cards">
                {intersectionCards}
            </div>
        </div>
    );
}

export default IntersectionList;