import './App.css';
import './style/home.css'
import { useState } from 'react';
import {
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Catalog from './components/Catalog';
import Character from './components/Character';
import Brand from './components/Brand';
import Toy from './components/Toy';
import Index from './components/Index';
import Navbar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';

function App() {
  const [cart,setCart]=useState([]);
  const [logged,setLogged]=useState(false);

  function getCart(id){
    console.log("get",id);
    // cart.push(id);
    // setCart([
    //   ...cart,
    //   id
    // ]);
    setCart(prevState => ([
      ...prevState,
         id
        ]
    ))
    console.log("cart push",cart);
  }

  function handleAuth(childData){
    setLogged(childData)
    console.log("logged",logged);
}
  return (
    <>
          {/* <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Index />}>
                <Route path="toys" element={<Toy />} />
                <Route path="catalogs" element={<Catalog />} />
                <Route path="characters" element={<Character />} />
                <Route path="brands" element={<Brand />} />
              </Route>
            </Routes>
          </BrowserRouter> */}

      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Index cart={cart} getCart={getCart} />}></Route>
          <Route path="toys" element={<Toy />}></Route>
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="character" element={<Character />}></Route>
          <Route path="brand" element={<Brand />}></Route>
          <Route path="login" element={<Login handleAuth={handleAuth} />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="checkout" element={<Checkout cart={cart} logged={logged} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
