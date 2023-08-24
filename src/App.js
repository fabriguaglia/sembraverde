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
      </Routes>
      <Footer />
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
