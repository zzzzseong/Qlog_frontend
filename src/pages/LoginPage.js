import React, { useState } from 'react';

const Login = () => {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");

    const onIDHandler = (event) => {
        setID(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    return (
        <div className='registerDiv'>
            <div style={{textAlign: 'center', color: 'white', fontSize: '140px', marginRight: '200px', marginTop: '10px'}}>
                Sign in to
                <br/>
                Qlog
            </div>

            <form className='registerForm'>
                    <label>ID</label>
                    <input type="text" value={ID} onChange={onIDHandler}></input>

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler}></input>
            
                    <button className="button" type="submit" style={{ marginTop: "50px"}}>로그인</button>
            </form>
        </div>
    );
};

export default Login;