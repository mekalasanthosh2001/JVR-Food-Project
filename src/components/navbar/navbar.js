import React, { useEffect, useState } from "react";
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

  // search option getpopup

  const [popupone, setpopupone] = useState(false);
  const getpopup = () => {
    setpopupone(true);

    setTimeout(() => {
      setpopupone(!popupone);
    }, 100);
  };

  // get shoping cart box

  const [shopingcartitems, setshopingcartitem] = useState(0);

  const pushitemtoshopingcart = () => {
    setshopingcartitem(!shopingcartitems);
    setTimeout(() => {
      setshopingcartitem(false);
    }, 10000);
  };

  // closesignuppopup

  const [signuppopup, setsignuppopup] = useState(false);

  const closesignuppopup = () => {
    setsignuppopup(!signuppopup);
  };
  // setTimeout(() => {
  //   closesignuppopup();
  // }, 10000);

  useEffect(() => {
    setInterval(() => {
      closesignuppopup();
    }, 40000);
    closesignuppopup();
  }, []);
  // close buton
  const closepopup = () => {
    setsignuppopup(false);
  };

  // signup box open or login box close
  const [isvisablelogi, setvisable] = useState(true);
  const [iscolorchange, setcolorchange] = useState(true);
  const remove = () => {
    setvisable(true);
    setcolorchange(true);
  };
  const getadd = () => {
    setvisable(false);
    setcolorchange(false);
  };

  const [removeset, setremoveprofile] = useState(false);

  const removieprofile = () => [setremoveprofile(true)];

  const[topSwitch,setTopSwitch]=useState(false)

  const handleSwitch=()=>{
    setTopSwitch(!topSwitch)
  }

  return (
    <>
      <nav>
        {/* popup login box model */}

        {signuppopup ? (
          <div className="Login-form">
            <div className="Loginform">
              <span onClick={closepopup}>&times;</span>
              <div className="switch" >
                <span
                  className="leftswitch activeleft"
                  onClick={remove}
                  style={{
                    backgroundColor: iscolorchange ? "orange" : "gray",
                    color: "white",
                  }}
                >
                  L
                </span>
                <span
                  className="rightswitch"
                  onClick={getadd}
                  style={{
                    backgroundColor: iscolorchange ? "gray" : "orange",
                    color: "white",
                  }}
                >
                  S
                </span>
              </div>
              {/* Login form -----------------------------------------------------------------------------*/}
              {isvisablelogi ? (
                <div className="login-here" style={{ display: "block" }}>
                  <h1>LOGIN</h1>
                  <div className="loginfield">
                    <div className="name-field">
                      <label>Email </label>
                      <input
                        type="email"
                        placeholder="jvrsuport@gmail.com"
                      ></input>
                    </div>

                    <div className="password-failed">
                      <label>Password </label>
                      <input
                        type="password"
                        placeholder=" * * * * * * "
                      ></input>
                    </div>
                    <div className="checkbox-recomonded">
                      <input type="checkbox"></input>
                      <label> Remember me</label>
                    </div>
                    <div className="buttonsubmit">
                      <button>LOGIN</button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* sign-up form  */}
              {!isvisablelogi ? (
                <div className="sign-here " style={{ display: "block" }}>
                  <h1>Sign Up</h1>
                  <div className="signupfield">
                    <div className="loginname-field">
                      <div className="name-field">
                        <label>Frist Name </label>
                        <input
                          type="text"
                          placeholder=" Enter Frist Name"
                        ></input>
                      </div>
                      <div className="name-field">
                        <label>Second Name </label>
                        <input
                          type="text"
                          placeholder="Enter Last Name"
                        ></input>
                      </div>
                    </div>

                    <div className="name-field">
                      <label>Email </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                      ></input>
                    </div>
                    <div className="name-field">
                      <label>Phone / Mobile </label>
                      <input type="tel" placeholder="+91 9876543210"></input>
                    </div>

                    <div className="passwordsection">
                      <div className="password-failed">
                        <label>Password </label>
                        <input
                          type="password"
                          placeholder=" * * * * * * "
                        ></input>
                      </div>
                      <div className="password-failed">
                        <label>Re Enter Password </label>
                        <input
                          type="password"
                          placeholder=" * * * * * * "
                        ></input>
                      </div>
                    </div>
                    <div className="buttonsubmit">
                      <button>SING UP</button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* sign-up form  end*/}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="logo">
          <h1>
            <span className="spanicon">
              <FaShoppingBasket />
            </span>
            <span>
              JVR ORGANIC<sup>Products</sup>
            </span>
          </h1>
        </div>
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
          <button onClick={getpopup}>
            <FaSearch size={25}></FaSearch>
          </button>
          {popupone ? (
            <div className="serchbox-popup">
              <input type="text" placeholder="search here"></input>
              <span class="custom-span">
                <FaSearch></FaSearch>
              </span>
            </div>
          ) : (
            ""
          )}

          <button onClick={pushitemtoshopingcart}>
            <FaShoppingCart size={25}> </FaShoppingCart>
          </button>

          {shopingcartitems ? (
            <div className="shoping-cart">
              <div className="product">products</div>
            </div>
          ) : (
            ""
          )}

          <button onClick={removieprofile}>
            <FaUser size={25}></FaUser>
          </button>
          {removeset ? (
            <div className="profile-popup">
              <div className="profilesettigs">
                <div className="photo-name">
                  <FaUser className="fauser"></FaUser>
                  <span className="user-name">Mr. Santhosh Reddy</span>
                </div>
              </div>
              <div className="edit-profile-box">
                <div className="profile-options"></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
