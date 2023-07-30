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

    const handleSubmit = (e) => {
        axios.post('/comment/create/' + props.id, {
            //얘는 props가 안넘어오는디.. 어떻게 해결해야 할까요..?!
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
                            <textarea className='createDiv-textarea'></textarea>
                            <input type='button' value='등록' onClick={handleSubmit}></input>
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