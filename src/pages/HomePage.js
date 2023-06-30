import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Qcard from './components/Qcard';
import Profile from './components/Profile';
import CreateQCard from './components/CreateQCard';

const Home = () => {    
    const handleSignOut = (e) => {
        axios.put("/user/logout");
        window.location.href = '/';
    };

    //const handleLoadImage = () => { //프로필 이미지는 따로 요청
    // }

    const handleLoad= () => {
        axios.get("/user/read")
        .then(response => {
            //config 설정해서 image url 받고 전달
            console.log(response.data);    
            // profile
            // const profile = document.getElementsByClassName('home-left-profile')[0];
            // ReactDOM.render(React.createElement(Profile, response.data, null), profile);

            const profile = ReactDOM.createRoot(document.getElementsByClassName('home-left-profile')[0]);
            profile.render(React.createElement(Profile, response.data, null), profile);
            // profile

            // QCard
            const unsolveQ = document.getElementsByClassName('home-left-cards')[0];
            const solvedQ = document.getElementsByClassName('home-left-cards')[1];
            for(let qcard in response.data.qCards) {
                console.log(qcard);
                if(qcard.solved) {
                    ReactDOM.render(React.createElement(Qcard, response.data, null), solvedQ);
                } else {
                    ReactDOM.render(React.createElement(Qcard, response.data, null), unsolveQ);
                }
            }
            // QCard

            // CreateQCard
            const createQCard = document.getElementsByClassName('home-right')[0];
            ReactDOM.render(React.createElement(CreateQCard, response.data, null), createQCard);
            // CreateQCard
        });
    };
    handleLoad();

    return (
        <div>
            <div className="home-header">
                <img className="home-title" src='/logo.png'></img>
                <span className="home-signout" onClick={handleSignOut}>sign out</span>
            </div>
            <div className="home-body">
                <div className="home-left">
                    <div className="home-left-container">
                        <div className="home-left-profile">{/*profile component*/}</div>
                        <div className="home-left-card">
                            <h1>UnsolvedQ</h1>
                            <div className='home-left-cards'>{/*qcard component*/}</div>
                        </div>
                        <div className="home-left-card">
                            <h1>SolvedQ</h1>
                            <div className='home-left-cards'>{/*qcard component*/}</div>
                        </div>
                    </div>
                </div>
                <div className="home-right">{/*createqcard component*/}</div>
            </div>
        </div>
    );
};

export default Home;