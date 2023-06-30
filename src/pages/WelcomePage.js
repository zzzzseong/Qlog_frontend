import React from 'react';
import { useNavigate } from 'react-router';
import './css/style.css';

const Welcome = () => {
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate("/login");
    }
    const goToSignUp = () => {
        navigate("/register");
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <img className='welcome_header' src='/logo.png'></img>
            <div className="welcome_body">
                <button onClick={goToSignIn}>로그인</button>
                <button onClick={goToSignUp}>회원가입</button>
            </div>
        </div>
    );
};

export default Welcome;