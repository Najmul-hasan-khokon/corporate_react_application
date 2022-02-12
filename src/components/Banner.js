import PromoArea from './PromoArea';

const Banner = () => (
    <>
        <main className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 text-white py-5">
                        <div className="banner-item">
                            <h1 className="mb-3">Build Fast, Launch Quickly</h1>
                            <p className="lead">
                                Completely harness extensive testing procedures via ubiquitous
                                processes. Globally envisioneer cross
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <span>
                                        <i className="fas fa-check-square" />
                                    </span>
                                    <strong>Accounting</strong> Procedures Guidebook
                                </li>
                                <li>
                                    <span>
                                        <i className="fas fa-check-square" />
                                    </span>
                                    <strong>Cost</strong> Accounting Fundamentals
                                </li>
                                <li>
                                    <span>
                                        <i className="fas fa-check-square" />
                                    </span>
                                    <strong>Corporate</strong> Cash Management
                                </li>
                            </ul>
                            <div className="banner-button mt-5">
                                <a href="https://www.youtube.com/" className="rounded">
                                    Check Princes
                                </a>
                                <a href="https://www.w3schools.com/" className="rounded">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" />
                </div>
            </div>
        </main>
        <PromoArea />
    </>
);

export default Banner;
