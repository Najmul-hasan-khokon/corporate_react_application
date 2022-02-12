/* eslint-disable jsx-a11y/no-distracting-elements */
import customerLogo1 from '../assets/images/customer-logo1.png';
import customerLogo2 from '../assets/images/customer-logo2.png';
import customerLogo3 from '../assets/images/customer-logo3.png';
import customerLogo4 from '../assets/images/customer-logo4.png';
import customerLogo5 from '../assets/images/customer-logo5.png';
import customerLogo6 from '../assets/images/customer-logo6.png';

const Customer = () => (
    <section className="customer-area">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="customer-items ">
                        <marquee behavior="" direction="">
                            <img src={customerLogo1} alt="customer-img" />
                            <img src={customerLogo2} alt="customer-img" />
                            <img src={customerLogo3} alt="customer-img" />
                            <img src={customerLogo4} alt="customer-img" />
                            <img src={customerLogo5} alt="customer-img" />
                            <img src={customerLogo6} alt="customer-img" />
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Customer;
