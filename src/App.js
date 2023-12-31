import './App.css';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Products from './components/products/products';
import Login from './components/log/login/login';
import Register from './components/log/register/register';
import TermYCond from './components/log/term/termycond';
import Gladiolo from './components/products/pages/gladiolo/gladiolo';
import Petuñas from './components/products/pages/petuñas/petuñas';
import Margarita from './components/products/pages/margarita/margarita';
import Hogar from './components/products/pages/hogar/hogar';
import Contact from './components/contact/contact';
import AboutUs from './components/about us/aboutus';
import Profile from './components/log/user/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/contacto" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terminosycondiciones" element={<TermYCond />} />
        <Route path="/producto/semillas-de-gladiolo" element={<Gladiolo />} />
        <Route path="/producto/semillas-de-petuñas" element={<Petuñas />} />
        <Route path="/producto/semillas-de-margarita" element={<Margarita />} />
        <Route path="/producto/semillas-de-alegria-del-hogar" element={<Hogar />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
