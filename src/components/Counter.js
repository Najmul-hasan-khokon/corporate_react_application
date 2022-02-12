const Counter = () => (
    <section className="count-area">
        <div className="container">
            <div className="row text-center text-white">
                <div className="col-lg-3 col-md-6 ">
                    <div className="count-items mb-5">
                        <span>
                            <i className="fas fa-user" />
                        </span>
                        <h1 className="mt-2">6423</h1>
                        <h5>Active users</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="count-items mb-5">
                        <span>
                            <i className="fas fa-eye" />
                        </span>
                        <h1 className="mt-2">2400</h1>
                        <h5>Global client</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="count-items mb-5">
                        <span>
                            <i className="fas fa-trophy" />
                        </span>
                        <h1 className="mt-2">6432</h1>
                        <h5>Win award</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="count-items mb-5">
                        <span>
                            <i className="fas fa-medal" />
                        </span>
                        <h1 className="mt-3">1450</h1>
                        <h5>Clients satisfaction</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Counter;
