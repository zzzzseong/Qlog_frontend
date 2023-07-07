import React from 'react';
import axios from 'axios';

const Comment = (props) => {
    
    const handleAdopt = (e) => {
        if(window.confirm('채택하시겠습니까?')) {            
            axios.put('/qCard/update/adopt/' + props.commentId)
            .then(response => {
                //empty response
            })
            .catch(error => {
                //handle error
                console.log(error);
            });

            alert("채택되었습니다.");
        }
    };

    return (
        <li className="updateQcard-comments-li">
            <div className="comment">
                <div className='comment-left'>
                    <img className='comment-img' src={props.profileImgPath}></img>
                    <div>{props.username}</div>
                </div>
                <div className='comment-right' onClick={handleAdopt}>
                    <div>{props.comment}</div>
                </div>
            </div>
        </li>
    );
};

export default Comment;