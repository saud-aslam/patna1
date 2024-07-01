import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import TrackOrder from "./pages/track-order/TrackOrder";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/track-order" element={<TrackOrder/>} />
      </Routes>
    </Router>
    </> 
  );
}

export default App;
