import './App.css';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Products from './components/products/products';
import Carrito from './components/cart/carrito';
import Login from './components/log/login/login';
import Register from './components/log/register/register';
import TermYCond from './components/log/term/termycond';
import Gladiolo from './components/products/pages/gladiolo/gladiolo';
import Petuñas from './components/products/pages/petuñas/petuñas';
import Margarita from './components/products/pages/margarita/margarita';
import Hogar from './components/products/pages/hogar/hogar';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terminosycondiciones" element={<TermYCond />} />
        <Route path="/producto/semillas-de-gladiolo" element={<Gladiolo />} />
        <Route path="/producto/semillas-de-petuñas" element={<Petuñas />} />
        <Route path="/producto/semillas-de-margarita" element={<Margarita />} />
        <Route path="/producto/semillas-de-alegría-del-hogar" element={<Hogar />} />
      </Routes>
      <Footer />
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
