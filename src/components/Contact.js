import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import Button from './Button';
import Form from './Form';
import InputBox from './InputBox';
import Textarea from './Textarea';

function Contact() {
    const { signup } = useAuth();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textarea, setTextarea] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            await signup(email, password, username);
            setLoading(false);
            history.push('/');
        } catch (err) {
            setLoading(false);
            setError('failed to creat an account');
        }
    };

    return (
        <>
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" />
                        <div className="col-lg-6 ">
                            <div className="contact-items">
                                <h2 className="mb-3 text-dark">Ready to get started?</h2>
                                <Form className="Forms" onSubmit={handleForm}>
                                    <InputBox
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control form-control-lg my-3"
                                        type="text"
                                        placeholder="Enter name"
                                    />
                                    <InputBox
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control form-control-lg mb-3"
                                        type="email"
                                        required
                                        placeholder="Enter email"
                                    />
                                    <InputBox
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control form-control-lg mb-3"
                                        type="password"
                                        required
                                        placeholder="Enter password"
                                    />
                                    <Textarea
                                        value={textarea}
                                        onChange={(e) => setTextarea(e.target.value)}
                                        className="form-control form-control-sm"
                                        name="textarea"
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                    />
                                    <Button className="btn btn-danger text-white my-3">
                                        <span> Send Message</span>
                                    </Button>
                                    {loading && <div>Loading....</div>}
                                    {error && <div>{error}</div>}
                                </Form>
                            </div>
                        </div>
                        <div className="col-lg-3" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
