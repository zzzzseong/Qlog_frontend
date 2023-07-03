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

    return (
        <div className="updateQcard">
            <div className="updateQcard-header">
                <h1 className="updateQcard-header-back" onClick={handleBack}>←</h1>
                <h1 className="updateQcard-header-title">{props.question}</h1>
                <button className="updateQcard-header-delete" onClick={handleDelete}>Delete</button>
            </div>
            <div className='updateQcard-body'>

            </div>
            <div className='updateQcard-footer'></div>
        </div>
    );
};

{/* <div className="home-right-question-header">
                <h1 className="home-right-question-back" onClick={handleBack}>←</h1>
                <h1 className="home-right-question-title">Question</h1>
            </div> */}

export default UpdateQCard;