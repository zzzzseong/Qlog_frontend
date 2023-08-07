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

    const duplicationSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('loginId', registerFormData.register);
    
        axios.post('/user/auth/duplicate', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            // Handle response data
            if (response.data) {
                registerSubmit(e);
            } else {
                alert("이미 등록되어 있는 이메일입니다.");
            }
        })
        .catch(error => {
            console.log(error);
        });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('loginId', registerFormData.register);
        form.append('password', registerFormData.password);
        form.append('name', registerFormData.username);

        axios.post('/user/auth/register', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            // Handle response data
            alert("회원가입이 완료되었습니다.");
            localStorage.setItem('Jwt', JSON.stringify(response.data.token));
            window.location.href = '/home';
        })
        .catch(error => {
            // Handle error
            console.log(error);
        });
    };
    
    return (
        <div className='register-form'>
            <div className='register-form-header'>
                <img className='register-form-back' onClick={() => {
                    window.location.href = '/';
                }} src='/logo.png'></img>
                <div className='register-form-title'>Sign up to Qlog</div>
            </div>
            <div className='register-form-body'>
                <form onSubmit={duplicationSubmit}>
                        <label htmlFor="register_field">email address</label><br/>
                        <input className='register-form-input' type="text" name="register" id="register_field" onChange={registerChange}></input><br/><br/>

                        <label htmlFor="password">Password</label><br/>
                        <input className='register-form-input' type="password" name='password' id='password' onChange={registerChange}></input><br/><br/>

                        <label htmlFor="username">Username</label><br/>
                        <input className='register-form-input' type="text" name='username' id='username' onChange={registerChange}></input><br/><br/>
                
                        <input className='register-form-submit' type='submit' name='commit' value='Sign up'></input>
                </form>
            </div>
        </div>
    );
};

export default Register;