import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillBagHeartFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="navigate">
      <div className="Navbar">

        <li class="nav-item">
          <NavLink className="nav-link " to='/' id="Home"><img src="/image/Logo1.png" id="logo" /></NavLink>
        </li>


        <div>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-tot">
              <div class="dropdown">


                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" id="drop-h">
                  Catagory
                </button>
                <ul class="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/cakesb" id="birthday1">Birthday</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/tuffle">Truffle Cakes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/ccakes">Chocolate Cakes</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/coffee">Coffee Cake</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/couples">Anniversary</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/husband">For Men</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/wife">For Women</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/rose">Rose Bouquets</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/lily">Lily Bouquets</NavLink></li>
                </ul>
              </div>

              <li class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-link " to='/cart' id="Cart">
                  <BsFillCartFill /> Cart
                </NavLink>
              </li>
              <li class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-link " to='/wishlist' id="Wishlist">
                  <BsFillBagHeartFill /> Wishlist
                </NavLink>
              </li>
              <li class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-link " to='/signin' id="Signin">
                  <BsPerson className="log" /> Sign up
                </NavLink>
              </li>
              {/* <li class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className="nav-link " to='/login' id="LogIn"> <BsFillPersonFill />LogIn</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar;
