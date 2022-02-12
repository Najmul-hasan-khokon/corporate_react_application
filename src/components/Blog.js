/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import blogImage1 from '../assets/images/blog-img1.jpg';
import blogImage2 from '../assets/images/blog-img2.jpg';
import blogImage3 from '../assets/images/blog-img3.jpg';
import clientImage1 from '../assets/images/client-1.jpg';
import clientImage2 from '../assets/images/client-2.jpg';
import clientImage3 from '../assets/images/client-3.jpg';

const Blog = () => (
    <section className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="blog-heading text-center w-75 mx-auto mb-5">
                        <h2 className="mb-2" style={{ fontWeight: '700' }}>
                            Our Latest News
                        </h2>
                        <p className="lead">
                            Dynamically pursue reliable convergence rather than 24/7 process
                            improvements develop end-to-end customer service.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 mb-sm-4 mb-4">
                    <div className="card rounded pb-5">
                        <div className="card-main-img">
                            <img className="img-fluid " src={blogImage1} alt="blog-img" />
                            <a
                                className="text-decoration-none text-white rounded"
                                href="https://www.wearegenessee.com/get-better-seo/?gclid=CjwKCAjwz5iMBhAEEiwAMEAwGED5AeqCTXjSg4tS2jXHU5XQlqiUiFq_lU6OnMnwcCZXb3sV2KJ17xoCFCYQAvD_BwE"
                            >
                                SEO, Analytics
                            </a>
                        </div>
                        <div className="card-body d-flex justify-content-between">
                            <div className="card-admin-group">
                                <a href="dfd">
                                    <img
                                        className="img-fluid rounded-circle"
                                        src={clientImage1}
                                        alt=""
                                    />
                                    <span className="admin text-dark">Admin</span>
                                </a>
                            </div>
                            <div
                                className="card-time text-muted"
                                style={{ fontSize: '14px', marginTop: '11px' }}
                            >
                                <span className="small ">
                                    <i className="far fa-calendar-alt" />{' '}
                                    <span style={{ display: 'inline-block', marginLeft: '5px' }}>
                                        15 March 2021
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="card-footer-area">
                            <h3 className="card-title">
                                <a href="df">Holisticly promote enabled</a>
                            </h3>
                            <p className="lead">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                        <a className="card-footer-button small text-decoration-none" href="fd">
                            Read More{' '}
                            <span className="blog-footer-icon">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-sm-4 mb-4">
                    <div className="card rounded pb-5">
                        <div className="card-main-img ">
                            <img className="img-fluid " src={blogImage2} alt="blog-img" />
                            <a className="text-decoration-none text-white rounded " href="df">
                                Marketing
                            </a>
                        </div>
                        <div className="card-body d-flex justify-content-between">
                            <div className="card-admin-group">
                                <a href="df">
                                    <img
                                        className="img-fluid rounded-circle"
                                        src={clientImage2}
                                        alt=""
                                    />
                                    <span className="admin text-dark">Writer</span>
                                </a>
                            </div>
                            <div
                                className="card-time text-muted"
                                style={{ fontSize: '14px', marginTop: '11px' }}
                            >
                                <span className="small ">
                                    <i className="far fa-calendar-alt" />{' '}
                                    <span style={{ display: 'inline-block', marginLeft: '5px' }}>
                                        15 March 2021
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="card-footer-area">
                            <h3 className="card-title">
                                <a href="df">Authoritatively unleash fully</a>
                            </h3>
                            <p className="lead">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                        <a className="card-footer-button small text-decoration-none" href="#">
                            Read More{' '}
                            <span className="blog-footer-icon">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 ">
                    <div className="card rounded pb-5">
                        <div className="card-main-img ">
                            <img className="img-fluid " src={blogImage3} alt="blog-img" />
                            <a className="text-decoration-none text-white rounded " href="#">
                                Business
                            </a>
                        </div>
                        <div className="card-body d-flex justify-content-between">
                            <div className="card-admin-group">
                                <a href="#">
                                    <img
                                        className="img-fluid rounded-circle"
                                        src={clientImage3}
                                        alt=""
                                    />
                                    <span className="admin text-dark">najmul hasan</span>
                                </a>
                            </div>
                            <div
                                className="card-time text-muted"
                                style={{ fontSize: '14px', marginTop: '11px' }}
                            >
                                <span className="small ">
                                    <i className="far fa-calendar-alt" />{' '}
                                    <span style={{ display: 'inline-block', marginLeft: '5px' }}>
                                        15 March 2021
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="card-footer-area">
                            <h3 className="card-title">
                                <a href="#">We partnered up with Google</a>
                            </h3>
                            <p className="lead">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                        <a className="card-footer-button small text-decoration-none" href="#">
                            Read More{' '}
                            <span className="blog-footer-icon">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Blog;
