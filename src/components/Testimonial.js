/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import teamImage1 from '../assets/images/team-img1.jpg';
import teamImage2 from '../assets/images/team-img2.jpg';

const Testimonial = () => (
    <section className="testimonial-area">
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <div className="blog-heading text-center w-75 mx-auto mb-5">
                        <h2 className="mb-2" style={{ fontWeight: '700' }}>
                            What Clients Say About Us
                        </h2>
                        <p className="lead">
                            Rapidiously morph transparent internal or "organic" sources whereas
                            resource sucking e-business innovate compelling internal.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="testimonial-items rounded">
                        <h2 className="testimonial-icon mb-4 text-muted">
                            <i className="fas fa-quote-left" />
                        </h2>
                        <blockquote className="mb-4 testimonial-pera">
                            Assertively procrastinate distributed relationships whereas equity
                            invested intellectual capital everything energistically underwhelm
                            proactive.
                        </blockquote>
                        <div className="testimonial-footer d-flex justify-content-between align-items-center">
                            <div className="testimonial-footer-left d-flex align-items-center">
                                <img className="img-fluid" src={teamImage2} alt="testimonial img" />
                                <div className="testimonial-footer-middle">
                                    <h6>Najmul hasan</h6>
                                    <small>CEO, ThemeTags</small>
                                </div>
                            </div>
                            <div className="testimonial-footer-right">
                                <span>
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                </span>
                                <br />
                                <small>5.0 Out of 5</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="testimonial-items rounded">
                        <h2 className="testimonial-icon mb-4 text-muted">
                            <i className="fas fa-quote-left" />
                        </h2>
                        <blockquote className="mb-4 testimonial-pera">
                            Assertively procrastinate distributed relationships whereas equity
                            invested intellectual capital everything energistically underwhelm
                            proactive.
                        </blockquote>
                        <div className="testimonial-footer d-flex justify-content-between align-items-center">
                            <div className="testimonial-footer-left d-flex align-items-center">
                                <img className="img-fluid" src={teamImage1} alt="testimonial img" />
                                <div className="testimonial-footer-middle">
                                    <h6>samiya</h6>
                                    <small>admin, ThemeTags</small>
                                </div>
                            </div>
                            <div className="testimonial-footer-right">
                                <span>
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                    <i className="fas fa-star ratting-color" />
                                </span>
                                <br />
                                <small>5.0 Out of 5</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Testimonial;
