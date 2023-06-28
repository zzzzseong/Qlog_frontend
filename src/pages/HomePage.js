import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Qcard from './components/Qcard';
import Profile from './components/Profile';

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
            const profile = document.getElementsByClassName('home-left-profile')[0];
            ReactDOM.render(React.createElement(Profile, response.data, null), profile);
            // profile

            // QCard
            const unsolveQ = document.getElementsByClassName('home-left-cards')[0];
            const solvedQ = document.getElementsByClassName('home-left-cards')[1];
            for(let qcard in response.data.qCards) {
                if(qcard.solved) {
                    ReactDOM.render(React.createElement(Qcard, response.data, null), solvedQ);
                } else {
                    ReactDOM.render(React.createElement(Qcard, response.data, null), unsolveQ);
                }
            }
            // QCard
        });
    };
    handleLoad();

    return (
        <div>
            <div className="home-header">
                <span className="home-title">Qlog</span>
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
                <div className="home-right">
                    <div className="home-right-container">
                        <div className="home-right-question-header">
                            <h1 className="home-right-question-back">←</h1>
                            <h1 className="home-right-question-title">Question</h1>
                        </div>
                        <div className="home-right-question">
                            <textarea className="home-right-textarea" placeholder="Write your Question here"></textarea>
                        </div>

                        <div className="home-right-body">
                            <div className="home-right-attribute">Attribute</div>
                            <input className="home-right-submit" type='submit' value="submit"></input>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;