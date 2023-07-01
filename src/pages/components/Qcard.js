const Qcard = (props) => {
    return (
        <li>
            <div className="card">
                <div className="card-username">{props.name}</div>
                <p className="card-question">{props.question}</p>
            </div>
        </li>
    )
};

export default Qcard;