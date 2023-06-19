import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle response data
        })
        .catch(error => {
            // Handle error
            console.log(error);
        });
    };

    return (
        <div className='login-form'>
            <div className='login-form-header'>
                <h1>Sign in to Qlog</h1>
            </div>
            <div className='login-form-body'>
                <form onSubmit={handleSubmit}>
                        <label for="login_field">Username or email address</label>
                        <input type="text" name="login" id="login_field"></input>

                        <label for="password">Password</label>
                        <input type="password" name='password' id='password'></input>
                
                        <input type='submit' name='commit' value='Sign in' className='login-form-submit'></input>
                </form>
            </div>
        </div>
    );
};

export default Login;