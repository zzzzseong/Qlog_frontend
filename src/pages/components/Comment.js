import React from 'react';
import ReactDOM from 'react-dom/client';


const Comment = (props) => {
    
    return (
        <li className="updateQcard-comments-li">
            <div className="comment">
                <div className='comment-left'>
                    <img className='comment-img' src={props.profileImgPath}></img>
                    <div>{props.username}</div>
                </div>
                <div className='comment-right'>
                    <div>{props.comment}</div>
                </div>
            </div>
        </li>
    );
};

export default Comment;