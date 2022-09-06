import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Login from '../pages/Login';

export const publicRoute = [
    { path: '/', Components: Home },
    { path: '/home', Components: Home },
    { path: '/about', Components: AboutUs },
    { path: '/projects', Components: Projects },
    { path: '/contact', Components: Contact },
    { path: '/admin', Components: Admin },
    { path: '/login', Components: Login },
]