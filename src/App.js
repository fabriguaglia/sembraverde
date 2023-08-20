import './App.css';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/home/home';
import Header from './components/header/header';
import Products from './components/products/products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
