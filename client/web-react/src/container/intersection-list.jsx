import React from 'react';
import { connect } from 'react-redux';
import { Unique } from '../lib/util'; //TODO: why is this not lowercase?
import IntersectionCard from '../component/intersection-card';
import { Label } from 'semantic-ui-react';
import { classObj } from '../lib/util';
import { selectIntersection } from '../actions/history';
import '../style/intersection-list.css';


const IntersectionList = ({ selectIntersection, selectedIntersection, intersections, withControls, collapsed }) => {
    const categories = intersections
          .filter(Unique('detectionType'))
          .map(x => x.detectionType);
    
	const toCard = inx => <div onClick={() => selectIntersection(inx) }>
                            <IntersectionCard
                              intersection={inx}
                              withControls={withControls}
                            />
                          </div>;
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
        <div
          className="intersection-list vertical-scroll-container"
          style={
              {
                  ...(collapsed? {"height": 0} : null)
              }
          }>
          {
              (categories.length > 1)?
                  <div className="filters">
                    <Label.Group>
                      { Filters() }
                    </Label.Group>
                  </div>
              : <span></span>
          }
          
          <div className="cards" style={({
              padding:"5px"
          })}>
            {intersectionCards}
          </div>
        </div>
    );
};

const stateToProps = (state) => ({
    selectedIntersection: state.history.selectedIntersection
});

const dispatchToProps = (dispatch) => ({
    selectIntersection: (inx) => dispatch(selectIntersection(inx))
});

export default connect(stateToProps, dispatchToProps)(IntersectionList);