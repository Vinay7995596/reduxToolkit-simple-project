import './App.css';
import Products from './component/Products';
import Cart from './component/Cart';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/cart'}><li>cart</li></Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Products />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
