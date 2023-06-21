import React, { useState } from 'react';
import axios from 'axios';

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

        axios.post('/user/login', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            // Handle response data
            if(response.data) { //true
                console.log("login success: ", response.data);
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
                <h1>Sign in to Qlog</h1>
            </div>
            <div className='login-form-body'>
                <form onSubmit={handleSubmit}>
                        <label htmlFor="login_field">Username or email address</label>
                        <input type="text" name="login" id="login_field" onChange={handleChange}></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' onChange={handleChange}></input>
                
                        <input type='submit' name='commit' value='Sign in' className='login-form-submit'></input>
                </form>
            </div>
        </div>
    );
};

export default Login;