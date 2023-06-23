const Home = () => { 

    const handleSignOut = () => {
        //server 측 session 삭제 필요
        document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        window.location.href = '/';
    };

    return (
        <div>
            <div className="home-header">
                <span className="home-title">Qlog</span>
                
                <span className="home-signout" onClick={handleSignOut}>sign out</span>
            </div>
            <div className="home-body">
                <div className="home-left">
                    <div className="home-left-container">
                        <div className="home-left-profile">
                            <img src="test.png"></img>
                            <div>zzzzseong : 300pt</div>
                            <div>follower: 300 following: 300</div>
                            <div>Qcard: 300 solved: 300</div>
                        </div>
                        <div className="home-left-card">
                            <h1>UnsolvedQ</h1>
                            <div>Q. What is JDK in java?</div>
                        </div>
                        <div className="home-left-card">
                            <h1>SolvedQ</h1>
                            <div>Q. What is Bean in Spring Boot?</div>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <div className="home-right-container">
                        <div className="home-right-card">QCard</div>
                        <div className="home-right-comments">Comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;