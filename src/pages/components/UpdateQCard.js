import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Explore from './Explore';
import Comment from './Comment';

const UpdateQCard = (props) => {
    const handleDelete = (e) => {
        if(window.confirm('정말로 삭제하시겠습니까?')) {
            axios.delete('/qCard/delete/' + props.id)
            .then(response => {
                //void response
                alert("질문이 삭제되었습니다.");
                window.location.href = '/home';
            })
            .catch(error => {
                //Handle error
                console.log(error);
            });
        }
    };
    const handleBack = (e) => {
        const right = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        right.render(React.createElement(Explore, props, null));
    };
    const handleLoad = () => {
        axios.get("qCard/readComments/" + props.id)
        .then(response => {
            // console.log(response.data);
            const comments = ReactDOM.createRoot(document.getElementsByClassName('updateQcard-comments-ul')[0]);

            const commentsArray = [];
            response.data.forEach((comment) => {
                let com = React.createElement(Comment, comment, null);
                commentsArray.push(com);
            });

            comments.render(commentsArray);
        })
        .catch(error => {
            console.log(error);
        });
    };
    handleLoad();

    return (
        <div className="updateQcard">
            <div className="updateQcard-header">
                <h1 className="updateQcard-header-back" onClick={handleBack}>←</h1>
                <button className="updateQcard-header-delete" onClick={handleDelete}>Delete</button>
            </div>
            <div className='updateQcard-edit'>
                <h1>Question</h1>
                <img className='updateQcard-edit-img' src='/solved.png' onLoad={() => {
                    if(!props.solved) {
                        document.getElementsByClassName('updateQcard-edit-img')[0].style.display = 'none';
                    }
                }}></img>
                {/* <button onClick={handleEdit}>edit</button> */}
            </div>
            <div className='updateQcard-body'>
                <textarea className="updateQcard-body-question" value={props.question} readOnly></textarea>
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