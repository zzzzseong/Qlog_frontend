import React from 'react';
import ReactDOM from 'react-dom/client';

import UpdateQCard from './UpdateQCard';

const Qcard = (props) => {

    const handleCardClick = (e) => {
        const explore = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        explore.render(React.createElement(UpdateQCard, props, null));
    }

    return (
        <li onClick={handleCardClick}>
            <div className="card">
                <div className="card-username">{props.name}</div>
                <p className="card-question">{props.question}</p>
            </div>
        </li>
    )
};

export default Qcard;