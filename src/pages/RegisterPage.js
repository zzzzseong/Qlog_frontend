import React, { useState } from 'react';
import './css/Register.css'

const Register = () => {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");

    const onIDHandler = (event) => {
        setID(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    return (
        <div className='registerDiv'>
            <div style={{textAlign: 'center', color: 'white', fontSize: '140px', marginRight: '200px', marginTop: '40px'}}>
                Register to
                <br/>
                Qlog
            </div>

            <form className='registerForm'>
                    <label>ID</label>
                    <input type="text" value={ID} onChange={onIDHandler}></input>

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler}></input>

                    <label>Name</label>
                    <input type="text" value={ID} onChange={onNameHandler}></input>
            
                    <button className="button" type="submit" style={{ marginTop: "50px"}}>회원가입</button>
            </form>
        </div>
    );
};

export default Register;