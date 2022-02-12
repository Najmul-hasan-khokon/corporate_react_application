/* eslint-disable jsx-a11y/anchor-is-valid */
import headerLogo from '../assets/images/header-white-logo.png';

const Fotter = () => (
    <section className="footer-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-sm-left">
                    <div className="footer-items">
                        <a href="#">
                            <img src={headerLogo} alt="logo" />
                        </a>
                        <p className="my-4">
                            Interactively unleash interactive best practices before technically
                            sound portals.
                        </p>
                        <div className="footer-icon mb-4">
                            <a className="item1" href="https://twitter.com">
                                <i className="fab fa-twitter" />
                            </a>
                            <a
                                className="item2"
                                href="https://www.facebook.com/profile.php?id=100028249220053"
                            >
                                <i className="fab fa-facebook" />
                            </a>
                            <a className="item3" href="https://youtube.com">
                                <i className="fab fa-youtube" />
                            </a>
                            <a className="item4" href="https://dribbble.com">
                                <i className="fab fa-dribbble" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h5 className="mb-4 text-white">Company</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Customers</a>
                            </li>
                            <li>
                                <a href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h5 className="mb-4 text-white">Resources</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Live sessions</a>
                            </li>
                            <li>
                                <a href="#">Open sources</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="footer-items">
                        <h5 className="mb-4 text-white">Support</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Help</a>
                            </li>
                            <li>
                                <a href="#">Tech Support</a>
                            </li>
                            <li>
                                <a href="#">Network status</a>
                            </li>
                            <li>
                                <a href="#">Contact Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Fotter;
