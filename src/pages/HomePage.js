import React from 'react';
import { useNavigate } from 'react-router';
import './css/Home.css';

const Home = () => {
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate("/login");
    }
    const goToSignUp = () => {
        navigate("/register");
    }

    return (
        <html>
            <body>
                <div className='title'>
                    Qlog
                </div>
                <div className="loginBox">
                    <button className="button" onClick={goToSignIn}>로그인</button>
                    <button className="button" onClick={goToSignUp}>회원가입</button>
                </div>
            </body>
        </html>
    );
};

export default Home;