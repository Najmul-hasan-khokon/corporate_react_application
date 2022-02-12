import EndFooter from '../EndFooter';
import Fotter from '../Footer';

/* eslint-disable react/no-unescaped-entities */
const ProjectPage = () => (
    <>
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6 col-lg-4  mt-3 mx-auto">
                    <div className="card" style={{ maxWidth: '100%', height: 'auto' }}>
                        <a
                            href="https://dazzling-engelbart-de9d2e.netlify.app/"
                            className="btn btn-primary"
                        >
                            <img
                                src="https://codecanyon.img.customer.envatousercontent.com/files/281763368/quiz-banner.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=45c0d1d9e8ae1437d3f41cf5a99bc5ee"
                                className="card-img-top"
                                alt="quiz img"
                            />
                            quiz application
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{ maxWidth: '100%', height: 'auto' }}>
                        <a
                            href=" https://elegant-mestorf-5098d1.netlify.app/"
                            className="btn btn-primary"
                        >
                            <img
                                src="https://media.istockphoto.com/photos/professional-blogger-working-on-his-new-post-for-social-media-at-home-picture-id1252684502?b=1&k=20&m=1252684502&s=170667a&w=0&h=3kK22loPkc8S4_iJdVZ4_IpoOeIKI5zVe4LbqzhD9bM="
                                className="card-img-top"
                                alt="blog img"
                            />
                            simple blog site
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mt-3">
                    <div className="card" style={{ maxWidth: '100%', height: 'auto' }}>
                        <a
                            href="https://frosty-wescoff-d511d6.netlify.app/"
                            className="btn btn-primary"
                        >
                            <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60"
                                alt="crud img"
                            />
                            curd application
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Fotter />
        <EndFooter />
    </>
);

export default ProjectPage;
