import './App.css';
import './style/home.css'
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

function App() {
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="toys" element={<Toy />}></Route>
          <Route path="catalog" element={<Catalog />}></Route>
          <Route path="character" element={<Character />}></Route>
          <Route path="brand" element={<Brand />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
