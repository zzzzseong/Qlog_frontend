import React, { useState } from 'react';
import axios from 'axios';

const CreateQCard = (props) => {
    const [question, setQuestion] = useState({
        question: ''
    });
    const handleChange = (e) => {
        setQuestion({
            ...question,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = (e) => {    
        axios.post('/qCard/create', question)
        .then(response => {
            //void response
            document.getElementsByClassName('home-right-textarea')[0].value = '';
            alert("질문이 등록되었습니다.");
        })
        .catch(error => {
            //Handle error
            console.log(error);
        });
    };

    return (
        <div className="home-right-container">
            <div className="home-right-question-header">
                <h1 className="home-right-question-back">←</h1>
                <h1 className="home-right-question-title">Question</h1>
            </div>
            <div className="home-right-question">
                <textarea className="home-right-textarea" placeholder="Write your Question here" name='question' onChange={handleChange}></textarea>
            </div>
            <div className="home-right-body">
                <div className="home-right-attribute">Attribute</div>
                <input className="home-right-submit" type='submit' value="submit" onClick={handleSubmit}></input>
            </div>
        </div>
    );
};

export default CreateQCard;