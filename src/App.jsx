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
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <Toaster />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
