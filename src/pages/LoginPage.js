import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

import Home from './HomePage';

const Login = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('loginId', formData.login);
        form.append('password', formData.password);

        axios.post('/user/auth/authenticate', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            // Handle response data
            console.log(response.data.status);

            if(response.data) { //true
                console.log("login success: ", response.data);
                localStorage.setItem('Jwt', JSON.stringify(response.data.token));

                window.location.href = '/home';
            } else { //false
                alert("ID, Password를 확인해주세요.");
            }
        })
        .catch(error => {
            // Handle error
            console.log(error);
        });
    };

    return (
        <div className='login-form'>
            <div className='login-form-header'>
                <img className='login-form-back' onClick={() => {
                    window.location.href = '/';
                }} src='/logo.png'></img>
                <div className="login-form-title">Sign in to Qlog</div>
            </div>
            <div className='login-form-body'>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="login_field">Username or email address</label><br/>
                        <input className='login-form-input' type="text" name="login" id="login_field" onChange={handleChange}></input><br/><br/>

                        <label htmlFor="password">Password</label><br/>
                        <input className='login-form-input' type="password" name='password' id='password' onChange={handleChange}></input><br/><br/>
                
                        <input className='login-form-submit' type='submit' name='commit' value='Sign in'></input>
                </form>
            </div>
        </div>
    );
};

export default Login;