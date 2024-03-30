import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-contaoner">
          <div className="footer-left1">
            <div className="quick-info">
              <h1 style={{ fontSize: "20px" }}>
                <span className="spanicon">
                  <FaShoppingBasket size={25} />
                </span>
                <span>
                  JVR ORGANIC<sup>Products</sup>
                </span>
              </h1>{" "}
            </div>
            <p>
              Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
              Laudantium?
            </p>
            <div className="link-logos">
              <span className="icon">
                <FaFacebookF />
              </span>
              <span className="icon">
                <FaLinkedinIn />
              </span>
              <span className="icon">
                <FaTwitter />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
            </div>
          </div>
          {/* 2colmn */}
          <div className="second-column">
            <div className="contact-list">
              <div className="quick-info">
                <h3>Contact Info</h3>
              </div>
              <div className="call">
                <span className="styles-logos">
                  <BiSolidPhoneCall size={25} color="orange" />
                  +91 8179015037
                </span>
              </div>
              <div className="email">
                <span className="styles-logos">
                  <IoIosMail color="orange" size={25} />
                  jvrproductname@gmail.com
                </span>
              </div>
              <div className="locality">
                <span className="styles-logos">
                  {" "}
                  <FaLocationDot color="orange" size={25} />
                  Hyderabad, warangal
                </span>
              </div>
            </div>
          </div>
          {/* 3column */}
          <div className="third-column">
            <div className="quick-info-list">
              <div className="quick-info">
                <h3>Quick Info</h3>
              </div>
              <div className="links-list">
                <span className="styles-logos">
                  <FaArrowRightLong color="orange" />
                  Home
                </span>
              </div>
              <div className="address-text">
                <h2>Created By-</h2>
                <span>
                  <i>Mr.MsrWebDeveloper </i>| All Rights Reserved{" "}
                </span>
              </div>
            </div>
          </div>
          {/* 3end */}
        </div>
      </div>
    </>
  );
};

export default Footer;
