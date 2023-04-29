// import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <Header/>
<Routes>
  <Route path ="/" exact element={<Home/>}>
</Route>
  <Route path ="/cart" exact element={<Cart/>}>
</Route>
</Routes>
    </BrowserRouter>
  );
}

export default App;
