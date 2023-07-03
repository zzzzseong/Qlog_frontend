import React from 'react';
import ReactDOM from 'react-dom/client';

import CreateQCard from "./CreateQCard";


const Explore = (props) => {
    const handleButton = (e) => {
        const createQCard = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        createQCard.render(React.createElement(CreateQCard, props, null));
    };

    return (
        <div className="explore">
            <div className="explore-header">
                <div className="explore-header-nav">
                    <button onClick={handleButton}>New</button>
                </div>
                <h1>Let's solve</h1>
                <h1>random question</h1>
            </div>
            <div className="explore-body">
                <div className="explore-body-top">
                    <input className="top-search"></input>
                </div>
                <div className="explore-body-bottom">
                    <input className="bottom-submit" type="submit" value="Explore"></input>
                </div>
            </div>
        </div>
    );
};

export default Explore;