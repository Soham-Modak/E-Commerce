import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Home from "./Home";
import SignIn from "./SignIn";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Navbar from "./Navbar";
import LogIn from "./LogIn";
import Footer from "./Footer";
import Terms from "./Terms";
import ForgotPass from "./ForgotPass";
import Privacy from "./Privacy";
import Disclaimer from "./Disclaimer";
import CakesB from "./CakesB";
import Flowers from "./Flowers";
import Chocolates from "./Chocolates";
import Husband from "./Husband";
import Wife from "./Wife";
import Couples from "./Couples";
import Contact from "./Contact";
import Tuffle from "./Tuffle";
import Lavender from "./Lavender";
import Rose from "./Rose";
import Lily from "./Lily";
import Ccakes from "./Ccakes";
import Coffee from "./Coffee";
import Modal from "./Modal";
import Details from "./Details";
import './Project.css';
import CartProvider from "./CartProvider";

const ParentRouter =()=> {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return(
        <>
        <Router>
         <Navbar/>
         <CartProvider>
          <Routes>

            <Route path="/" element = {<Home />}/>
            <Route path="/signin" element = {<SignIn />}/>
            <Route path="/cart" element = {<Cart />}/>
            <Route path="/wishlist" element = {<Wishlist />}/>
            <Route path="/login" element = {<LogIn />}/>
            <Route path="/terms" element = {<Terms />}/>
            <Route path="/forgotpass" element = {<ForgotPass />}/>
            <Route path="/privacy" element = {<Privacy />}/>
            <Route path="/disclaimer" element = {<Disclaimer />}/>
            <Route path="/cakesb" element = {<CakesB  onAddToCart={handleAddToCart} />}/>
            <Route path="/flowers" element = {<Flowers onAddToCart={handleAddToCart} />}/>
            <Route path="/chocolates" element = {<Chocolates onAddToCart={handleAddToCart} />}/>
            <Route path="/husband" element = {<Husband onAddToCart={handleAddToCart} />}/>
            <Route path="/wife" element = {<Wife onAddToCart={handleAddToCart} />}/>
            <Route path="/couples" element = {<Couples onAddToCart={handleAddToCart} />}/>
            <Route path="/contact" element = {<Contact onAddToCart={handleAddToCart} />}/>
            <Route path="/tuffle" element = {<Tuffle onAddToCart={handleAddToCart} />}/>
            <Route path="/lavender" element = {<Lavender onAddToCart={handleAddToCart} />}/>
            <Route path="/rose" element = {<Rose onAddToCart={handleAddToCart} />}/>
            <Route path="/lily" element = {<Lily onAddToCart={handleAddToCart} />}/>
            <Route path="/ccakes" element = {<Ccakes onAddToCart={handleAddToCart} />}/>
            <Route path="/coffee" element = {<Coffee onAddToCart={handleAddToCart} />}/>
            <Route exact path="/product/:id" element = {<Details />}/>
            <Route path="/modal" element = {<Modal />}/>
            
          </Routes>
          </CartProvider>
          <Footer/>
        </Router>
        </>
    )
}

export default ParentRouter;