const Qcard = (props) => {
    return (
        <li>
            <div className="card">
                <div>{props.name}</div>
                <div>{props.question}</div>
            </div>
        </li>
    )
};

export default Qcard;