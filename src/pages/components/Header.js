import React from 'react';
import axios from 'axios';

const Header = () => {
    const handleSignOut = (e) => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            axios.put("/user/logout");
            window.location.href = '/';
        }
    };
    const handleClickLogo = (e) => {
        window.location.href = '/home';
    };

    return (
        <div className="header">
            <img className="header-title" src='/logo.png' onClick={handleClickLogo}></img>
            <span className="header-signout" onClick={handleSignOut}>sign out</span>
        </div>
    );
};

export default Header;