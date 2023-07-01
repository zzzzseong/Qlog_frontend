const Explore = () => {
    return (
        <div className="explore">
            <div className="explore-header">
                <h1>Let's solve</h1>
                <h1>random question</h1>
            </div>
            <div className="explore-body">
                <div className="explore-body-top">
                    <input className="top-search"></input>
                </div>
                <div className="explore-body-bottom">
                    <input className="bottom-submit" type="submit" value="Explore"></input>
                </div>
            </div>
        </div>
    );
};

export default Explore;