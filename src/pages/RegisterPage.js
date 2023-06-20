import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [registerFormData, setFormData] = useState({
        register: '',
        password: '',
        username: ''
    });

    const registerChange = (e) => {
        setFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('loginId', registerFormData.register);
        form.append('password', registerFormData.password);
        form.append('name', registerFormData.username);

        axios.post('/user/register', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log(response.data);
            // Handle response data
        })
        .catch(error => {
            console.log(error);
            // Handle error
        });
    };
    
    return (
        <div className='register-form'>
            <div className='register-form-header'>
                <h1>Sign up to Qlog</h1>
            </div>
            <div className='register-form-body'>
                <form onSubmit={registerSubmit}>
                        <label for="register_field">email address</label>
                        <input type="text" name="register" id="register_field" onChange={registerChange}></input>

                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' onChange={registerChange}></input>

                        <label for="username">Username</label>
                        <input type="text" name='username' id='username' onChange={registerChange}></input>
                
                        <input type='submit' name='commit' value='Sign up' className='register-form-submit'></input>
                </form>
            </div>
        </div>
    );
};

export default Register;