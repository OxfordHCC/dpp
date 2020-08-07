import React from 'react';
import IntersectionList from '../component/intersection-list';
import { Button, Header } from 'semantic-ui-react'; 

const HistoryNavigation = ({ intersections, date }) => {
    const dateFormat = { month: 'long', day: 'numeric' };
    const selectedDate = new Date(date);
    const selectedDateString = selectedDate.toLocaleString('en-GB', dateFormat);
    const urlDate = date => new Date(date).toISOString().split('T')[0];
    
    const nextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate()+1);
        window.location.hash = `#history/${urlDate(newDate)}`;
    };

    const prevDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate()-1);
        window.location.hash = `#history/${urlDate(newDate)}`;
    };

    return (
        <div className="history-nav vertical-scroll-container">
          <div className="controls">
            <Button
              primary
              icon='left chevron'
              onClick={() => prevDay()}
            />
            <Header>{selectedDateString}</Header>

            <Button
              primary
              icon='right chevron'
              onClick={() => nextDay()}
              />
          </div>
          <IntersectionList intersections={intersections}></IntersectionList>
        </div>
    );
}


export default HistoryNavigation;
