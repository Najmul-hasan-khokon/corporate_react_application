import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider';
import '../styles/App.css';
import Layout from './Layout';
import AboutUs from './pages/AboutUs';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PagePage from './pages/PagePage';
import ProjectPage from './pages/ProjectPage';
import Services from './pages/Services';

const App = () => (
    <Router>
        <AuthProvider>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <AboutUs />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/blog">
                        <BlogPage />
                    </Route>
                    <Route exact path="/contact">
                        <ContactPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/project">
                        <ProjectPage />
                    </Route>
                    <Route exact path="/page">
                        <PagePage />
                    </Route>
                    <Route path="/:id">
                        <ErrorPage />
                    </Route>
                </Switch>
            </Layout>
        </AuthProvider>
    </Router>
);

export default App;
