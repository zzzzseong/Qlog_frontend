const Profile = (props) => {
    return (
        <div>
            <img src={props.imgPath}></img>
            <div>{props.name} : {props.point}pt</div>
            <div>follower: 300 following: 300</div>
            <div>Qcard: 150 solved: 142</div>
            <button>Qcard 생성</button>
        </div>
    )
}

export default Profile;