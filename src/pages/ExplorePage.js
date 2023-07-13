import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';

const ExploreQCard = () => {
    const handleLoad= () => {
        axios.get("qCard/read/random")
        .then(response => {
            console.log(response.data);
            const img = ReactDOM.createRoot(document.getElementsByClassName('explore-qcard-body-top-img')[0]);
            img.render(React.createElement('img', {src: response.data.image}));

            const username = ReactDOM.createRoot(document.getElementsByClassName('explore-qcard-body-top-username')[0]);
            username.render(React.createElement('div', null, response.data.username));

            const question = ReactDOM.createRoot(document.getElementsByClassName('explore-qcard-body-top-question')[0]);
            question.render(React.createElement('div', null, response.data.question));
        })
        .catch(error => {
            console.log(error);
        });
    };
    handleLoad();

    return (
        <div className="explore-qcard">
            <Header />
            <div className="explore-qcard-body">
                <div className='explore-qcard-body-top'>
                    <div className='explore-qcard-body-top-padding'>
                        <div className='explore-qcard-body-top-top'>
                            <div className='explore-qcard-body-top-img'></div>
                            <div className='explore-qcard-body-top-username'></div>
                        </div>
                        <div className='explore-qcard-body-top-question'>
                        </div>
                    </div>
                </div>
                <div className='explore-qcard-body-bottom'>

                </div>
            </div>

            <div className="explore-qcard-footer">

            </div>
        </div>
    );
};

export default ExploreQCard;