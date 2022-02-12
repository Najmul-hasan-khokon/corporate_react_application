import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/header-white-logo.png';
import { useAuth } from '../contexts/AuthProvider';

const Nav = () => {
    const { currentUser, logout } = useAuth();

    return (
        <>
            <header className="header-area  pt-2 sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/">
                                        <img src={headerLogo} alt="header-logo" />
                                    </Link>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-end">
                                            <li className="nav-item">
                                                <Link aria-current="page" to="/">
                                                    Home
                                                </Link>
                                                <hr />
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                                <hr />
                                            </li>

                                            <li>
                                                <Link to="/page">Pages</Link>
                                                <hr />
                                            </li>
                                            <li>
                                                <Link to="/services">services</Link>
                                                <hr />
                                            </li>
                                            <li>
                                                <Link to="/project">Project</Link>
                                                <hr />
                                            </li>
                                            <li>
                                                <Link to="/blog">Blog</Link>
                                                <hr />
                                            </li>
                                            {currentUser ? (
                                                <Link to="/contact" onClick={logout}>
                                                    logout
                                                </Link>
                                            ) : (
                                                <>
                                                    <li>
                                                        <Link to="/contact">Signup</Link>
                                                        <hr />
                                                    </li>
                                                    <li>
                                                        <Link to="/login">Login</Link>
                                                        <hr />
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav;
