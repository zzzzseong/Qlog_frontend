import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';

const ExploreQCard = () => {
    const [comment, setComment] = useState({
        comment: ''
    });
    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    };

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

            //qCard에 comment 등록은 정상적으로 된다.. 하지만 textarea에서 onChange시 계속해서 qCard/read/random요청을 보내는 문제가 있음
            document.getElementsByClassName('createDiv-submit')[0].addEventListener('click', () => {
                axios.post("/comment/create/" + response.data.id, comment)
                .then(response => {
                    
                })
                .catch(error => {
                    console.log(error);
                });
            });    
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
                    <div className='explore-qcard-body-bottom-createDiv'>
                        <div className='explore-qcard-body-bottom-createDiv-padding'>
                            <textarea className='createDiv-textarea' name='comment' onChange={handleChange}></textarea>
                            <input className='createDiv-submit' type='button' value='등록'></input>
                        </div>
                    </div>
                    <div className='profile-border'></div>
                    {/* 댓글 목록 */}
                </div>
            </div>

            <div className="explore-qcard-footer">

            </div>
        </div>
    );
};

export default ExploreQCard;