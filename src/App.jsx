import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  { Toaster } from 'react-hot-toast';
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import { Products } from "./pages/Products";
import { Shop } from "./pages/Shop";
import About from "./pages/About";
import { Cart } from "./pages/Cart";
import { Technology } from "./pages/Technology";
import {Faq} from "./pages/Faq";
import { Shipping } from "./pages/Shipping";
import { Returns } from "./pages/Returns";
import { Privacypolicy } from "./pages/Privacypolicy";
import { RefundPolicy } from "./pages/Refundpolicy";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        
      </Routes>
       <Toaster />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
