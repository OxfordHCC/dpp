import React from 'react';
import { Unique } from '../lib/util';
import IntersectionCard from './intersection-card';
import { Label } from 'semantic-ui-react';
import '../style/intersection-list.css';

const IntersectionList = ({ intersections, withControls }) => {
    const categories = intersections
          .filter(Unique('detectionType'))
          .map(x => x.detectionType);
    
	const toCard = inx => <IntersectionCard
                            key={inx.id}
                            intersection={inx}
                            withControls={withControls}
                          />;
    const intersectionCards = intersections.map(toCard);
    
    const Filters = () => {
        return categories
            .map(cat =>
                 <Label
                   as="a"
                   onClick={() => {
                       console.log('clicked');
                   }}
                   key={cat}>
                   {cat}
                 </Label>
                );
    };
    
    return (
        <div className="intersection-list vertical-scroll-container">
          <div className="filters">
            <Label.Group>
              { Filters() }
            </Label.Group>
          </div>
          <div className="cards" style={({
              padding:"5px"
          })}>
            {intersectionCards}
          </div>
        </div>
    );
};

export default IntersectionList;
