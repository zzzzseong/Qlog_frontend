import React from 'react';
import ReactDOM from 'react-dom/client';

import ProfileSetting from './ProfileSetting';

const Profile = (props) => {
    const handleImgClick = (e) => {
        const right = ReactDOM.createRoot(document.getElementsByClassName('home-right')[0]);
        right.render(React.createElement(ProfileSetting, props, null));
    };

    return (
        <div className="box">
            <img src={props.imgPath} onClick={handleImgClick}></img>
            <div className="home-left-profile-info">
                <div>
                    <div className="profile-header">
                        <div className="profile-header-title">
                            <div className="profile-name">{props.name}</div>
                            <div className="profile-point">{props.point}point</div>
                            <div>{props.introduction}</div>
                        </div>
                        {/* <div>follower: 300 following: 300</div> */}
                    </div>
                    <div className="profile-info-countBox">
                        <div className="profile-countBox-left">
                            <div>Crafted Qcard</div>
                            <div>{props.qcards.length}</div>
                        </div>
                        <div className="profile-countBox-right">
                            <div>Written Comment</div>
                            <div>{props.comments.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;