import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Explore from './Explore';

const UpdateQCard = (props) => {
    const handleDelete = (e) => {
        axios.delete('/qCard/delete/' + props.id,)
        .then(response => {
            //void response
            alert("질문이 삭제되었습니다.");
            window.location.href = '/home';
        })
        .catch(error => {
            //Handle error
            console.log(error);
        });
    };
    const handleBack = (e) => {
        const right = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        right.render(React.createElement(Explore, props, null));
    };
    const handleLoad = () => {
        const comments = ReactDOM.createRoot(document.getElementsByClassName('updateQcard-comments-ul')[0]);        
    };

    return (
        <div className="updateQcard">
            <div className="updateQcard-header">
                <h1 className="updateQcard-header-back" onClick={handleBack}>←</h1>
                <button className="updateQcard-header-delete" onClick={handleDelete}>Delete</button>
            </div>
            <h1>Question</h1>
            <div className='updateQcard-body'>
                <div className='updateQcard-body-question'>{props.question}</div>
            </div>
            <h1>Comment</h1>
            <div className='updateQcard-comments'>
                <ul className='updateQcard-comments-ul'>{/* comments */}</ul>
            </div>
            <div className='updateQcard-footer'></div>
        </div>
    );
};

export default UpdateQCard;