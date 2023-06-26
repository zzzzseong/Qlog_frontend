import React from 'react';
import axios from 'axios';
import Qcard from './components/Qcard';
import ReactDOM from 'react-dom';

const Home = () => {

    let user;

    const handleSignOut = (e) => {
        axios.put("/user/logout");
        window.location.href = '/';
    };
    const handleLoad= () => {
        axios.get("/user/read")
        .then(response => {
            console.log(response.data);
            user = response.data;            
            // profile
            let profile = document.getElementsByClassName('home-left-profile');
            let profileImg = document.createElement('img');
            profileImg.src = "test.png";
            let nameAndPoint = document.createElement('div');
            nameAndPoint.innerHTML = response.data.name + " : " + response.data.point + "pt";
            let followerAndFollowing = document.createElement('div');
            followerAndFollowing.innerHTML = "follower: 300 following: 300";
            let qcardAndSolved = document.createElement('div');
            qcardAndSolved.innerHTML = "Qcard: 300 solved: 300";
            profile[0].appendChild(profileImg);
            profile[0].appendChild(nameAndPoint);
            profile[0].appendChild(followerAndFollowing);
            profile[0].appendChild(qcardAndSolved);
            // profile

            // unsolveQ
            const unsolveQ = document.getElementsByClassName('home-left-cards')[0];
            const qcard = React.createElement(Qcard, null, null);
            ReactDOM.render(qcard, unsolveQ);
            // unsolveQ

            // solvedQ
            const solvedQ = document.getElementsByClassName('home-left-cards')[1];
            const qcard2 = React.createElement(Qcard, null, null);
            ReactDOM.render(qcard2, solvedQ);
            // solvedQ
            
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
                        <div className="home-right-card">QCard</div>
                        <div className="home-right-comments">Comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;