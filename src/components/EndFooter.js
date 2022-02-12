/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

const EndFooter = () => (
    <section className="footer-details-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <hr />
                    <h5 className="text-center py-4 small" style={{ color: '#9fc7bc' }}>
                        {' '}
                        CopyRight © 2021.All Rights Reserved By{' '}
                        <Link
                            className="text-decoration-none"
                            to="/https://www.facebook.com/profile.php?id=100028249220053"
                        >
                            Najmul Hasan
                        </Link>{' '}
                    </h5>
                </div>
            </div>
        </div>
    </section>
);

export default EndFooter;
