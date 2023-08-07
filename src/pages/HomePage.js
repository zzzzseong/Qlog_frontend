import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Qcard from './components/Qcard';
import Profile from './components/Profile';
import Explore from './components/Explore';
import Header from './components/Header';


const Home = () => {
    const handleLoad= () => {
        axios.get("/user/read", {
            headers: {
                Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('Jwt'))
            }
        })
        .then(response => {
            console.log(response.data);

            // profile
            const profile = ReactDOM.createRoot(document.getElementsByClassName('home-left-profile')[0]);
            profile.render(React.createElement(Profile, response.data, null));
            // profile

            // QCard
            const unsolveQ = ReactDOM.createRoot(document.getElementsByClassName('home-left-cards-ul')[0]);
            const solvedQ = ReactDOM.createRoot(document.getElementsByClassName('home-left-cards-ul')[1]);

            const unsolveQArray = [];
            const solvedQArray = [];
            response.data.qcards.forEach((qcard) => {
                if(qcard.solved) {
                    let card = React.createElement(Qcard, qcard, null)
                    solvedQArray.push(card);
                } else {
                    let card = React.createElement(Qcard, qcard, null)
                    unsolveQArray.push(card);
                }
            });
            unsolveQ.render(unsolveQArray);
            solvedQ.render(solvedQArray);
            // QCard

            //Explore
            const explore = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
            explore.render(React.createElement(Explore, response.data, null));
            //Explore
        });
    };
    handleLoad();

    return (
        <div className='home'>
            <Header />
            <div className="home-body">
                <div className="home-left">
                    <div className="home-left-container">
                        <div className="home-left-profile">{/*profile component*/}</div>
                        <div className='profile-border'></div>
                        <div className="home-left-card">
                            <h1>UnsolvedQ</h1>
                            <div className='home-left-cards'>
                                <ul className='home-left-cards-ul'>{/*qcard component*/}</ul>
                            </div>
                        </div>
                        <div className="home-left-card">
                            <h1>SolvedQ</h1>
                            <div className='home-left-cards'>
                                <ul className='home-left-cards-ul'>{/*qcard component*/}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-right">{/*createqcard component*/}</div>
            </div>
        </div>
    );
};

export default Home;