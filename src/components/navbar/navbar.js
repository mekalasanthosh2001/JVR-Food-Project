import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleclick = () => {
    setclick(!click);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <h1>
            <span className="spanicon">
              <FaShoppingBasket />
            </span>
            <span>
              JVR ORGANIC<sup>Products</sup>
            </span>
          </h1>
        </div>{" "}
        <div className={click ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/Feature">Feature</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Categories">Categories</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/Contactus">Contactus</Link>
        </div>
        <div className="serch-icons">
          <div className="hamburgur" onClick={handleclick}>
            {click ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <button>
            <FaSearch size={25}></FaSearch>
          </button>

          <button>
            <FaShoppingCart size={25}> </FaShoppingCart>
          </button>
          <button>
            <FaUser size={25}></FaUser>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
