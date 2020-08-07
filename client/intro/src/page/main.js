import React from 'react';
import Demo from '../containers/demo';
import '../style/main.css';

const Main = (params) => {
    return (
    <div id="demo-section" className = "section">
        <div id="title">
            <h1><span className="acrolet">D</span>igital <span className="acrolet">P</span>rivacy <span className="acrolet">P</span>assport</h1>
        </div>
        <div className="demo-container">
            <Demo/>
            <div className="demo-instructions">
                <h2>Who did you meet today?</h2>
                <p><span className="acrolet">D</span>igital <span className="acrolet">P</span>rivacy <span className="acrolet">P</span>assport tracks your interactions with data controllers.</p>
                <h2>What did you give away?</h2>
                <p>Analyse your activity to get a better understanding of what companies may know about you.</p>
                <div id="button-row">
                    <button id="try" className="action-button">Try it out</button>
                    <button className="action-button">Go to app</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Main;