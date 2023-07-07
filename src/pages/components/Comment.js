import React from 'react';
import axios from 'axios';

const Comment = (props) => {
    
    const handleAdopt = (e) => {
        if(props.solved) {
            alert("이미 채택된 질문입니다.");
        } else {
            if(window.confirm('채택하시겠습니까?')) {            
                axios.put('/qCard/update/adopt/' + props.commentId)
                .then(response => {
                    console.log(response.data);
    
                    if(response.data == "ok") {
                        alert("채택되었습니다.");
                    } else {
                        alert(response.data);
                    }
    
                    //empty response
                })
                .catch(error => {
                    //handle error
                    console.log(error);
                });
            }
        }
    };

    return (
        <li className="updateQcard-comments-li">
            <div className="comment" onLoad={() => {
                if(props.adopted) {
                    const element = document.getElementsByClassName('comment-right')[0];
                    element.style.backgroundColor = '#157AF8';
                    element.style.border = '3px solid white';
                }
            }}>
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