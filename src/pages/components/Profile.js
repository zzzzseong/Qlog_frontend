const Profile = (props) => {
    return (
        <div>
            <img src={props.imagePath}/>
            <div>{props.name} : {props.point}pt</div>
            <div>follower: 300 following: 300</div>
            <div>Qcard: 150 solved: 142</div>
            <button>Qcard 생성</button>
        </div>
    )
}

export default Profile;

// let profileImg = document.createElement('img');
// profileImg.src = "test.png";
// let nameAndPoint = document.createElement('div');
// nameAndPoint.innerHTML = response.data.name + " : " + response.data.point + "pt";
// let followerAndFollowing = document.createElement('div');
// followerAndFollowing.innerHTML = "follower: 300 following: 300";
// let qcardAndSolved = document.createElement('div');
// qcardAndSolved.innerHTML = "Qcard: 300 solved: 300";
// profile[0].appendChild(profileImg);
// profile[0].appendChild(nameAndPoint);
// profile[0].appendChild(followerAndFollowing);
// profile[0].appendChild(qcardAndSolved);