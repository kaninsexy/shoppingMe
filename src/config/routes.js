import Shopping from '../components/Shopping/Shopping';
import CartPage from '../components/Shopping/Cart';
import HistoryPage from '../components/History/History';
import LoginPage from '../components/Login/Login';
import RegisterPage from '../components/Register/Register';
import BuySuccessPage from '../components/Shopping/BuySuccess';
import Contact from '../components/Contact/ContactUs';
import AboutUs from '../components/AboutUs/AboutUs';
import Homepage from '../components/Homepage/LandingPage';

const components = {
  shopping: {
    url: '/Shopping',
    component: Shopping,
  },
  cart: {
    url: '/cart',
    component: CartPage,
  },
  history: {
    url: '/history',
    component: HistoryPage,
  },
  login: {
    url: '/login',
    component: LoginPage,
  },
  register: {
    url: '/register',
    component: RegisterPage,
  },
  buySuccess: {
    url: '/success',
    component: BuySuccessPage,
  },
  Homepage: {
    url: '/',
    component: Homepage,
  },
  Contact: {
    url: '/contact',
    component: Contact,
  },
  AboutUs: {
    url: '/about',
    component: AboutUs,
  },
};

export default {
  guest: {
    allowedRoutes: [
      components.login,
      components.register,
      components.Homepage,
      components.Contact,
      components.AboutUs,
    ],
    redirectRoutes: '/login',
  },
  user: {
    allowedRoutes: [
      components.cart,
      components.history,
      components.shopping,
      components.buySuccess,
    ],
    redirectRoutes: '/shopping',
  },
};
