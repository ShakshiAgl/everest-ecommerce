import { Routes, Route, useLocation } from 'react-router-dom'; // ⬅️ add useLocation
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import ScrollToTop from "./ScrollToTop";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from "./components/ScrollToTop";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation(); // ⬅️ get current route

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, // set false if you want animation every scroll
    });
    Aos.refresh(); // ⬅️ refresh AOS on every route change
  }, [location.pathname]); // ⬅️ trigger useEffect on route change

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
