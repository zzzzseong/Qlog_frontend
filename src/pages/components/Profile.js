const Profile = (props) => {
    return (
        <div className="box">
            <img src={props.imgPath}></img>
            <div className="home-left-profile-info">
                <div>
                    <div className="profile-header">
                        <div className="profile-header-title">
                            <div className="profile-name">{props.name}</div>
                            <div className="profile-point">{props.point}point</div>
                        </div>
                        {/* <div>follower: 300 following: 300</div> */}
                    </div>
                    <div className="profile-info-countBox">
                        <div className="profile-countBox-left">
                            <div>Qcard</div>
                            <div>150</div>
                        </div>
                        <div className="profile-countBox-right">
                            <div>solved</div>
                            <div>200</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;