import AboutImage from '../assets/images/about-img.png';

const About = () => (
    <section className="about-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <h3 className="about-heading">
                        Control Everything and all Solution Made for you
                    </h3>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-7 order-2 order-lg-1">
                    <div className="row mt-3">
                        <div className="col-lg-6 col-sm-6">
                            <div className="about-items pb-4">
                                <span className="about-icon1 d-inline-block  mb-4 text-white">
                                    <i className="fas fa-link" />
                                </span>
                                <h4 className="mb-3">Engage Teammates</h4>
                                <p>
                                    Distinctively foster mission-critical focused solutions via
                                    human
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="about-items pb-4">
                                <span className=" about-icon2 d-inline-block mb-4 text-white">
                                    <i className="fas fa-shield-alt" />
                                </span>
                                <h4 className="mb-3">Highly Customizable</h4>
                                <p>
                                    Holisticly generate plug-and-play systems parallel task client
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="about-items pb-4">
                                <span className=" about-icon3 d-inline-block mb-4 text-white">
                                    <i className="fas fa-route" />
                                </span>
                                <h4 className="mb-3">Multiple Layouts</h4>
                                <p>
                                    Rapidiously fabricate extensive plagiarize extensible interfaces
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className="about-items pb-4">
                                <span className=" about-icon4 d-inline-block mb-4 text-white">
                                    <i className="fas fa-hourglass-half" />
                                </span>
                                <h4 className="mb-3">Optimize Time</h4>
                                <p>
                                    Monotonectally transform empowered synergy wireless expertise
                                    through
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 p-0 order-1 order-lg-2 mx-auto">
                    <div className="about-img d-flex justify-content-end  px-3 ">
                        <img className="img-fluid" src={AboutImage} alt="about-img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;
