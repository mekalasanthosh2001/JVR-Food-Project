import React from "react";

import productoneimg from "../../../assets/product-1-cabage.png";
import producttwoimg from "../../../assets/product-2-orange.png";
import "./homecomponentsstyles.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Ourproducts = () => {
  return (
    <>
      <div className="ourproduct">
        <div className="ourproduct-heading">
          <h2>
            Our <span>Products</span>
          </h2>
        </div>
        <div className="ourproduct-boxes">
          <div className="ourproduct-box-container">
            <div className="product1">
              <img src={productoneimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/kg -- 100Rs/kg</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* 2 */}
            <div className="product1">
              <img src={productoneimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/- -- 100Rs/-</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* 3 */}
            <div className="product1">
              <img src={productoneimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/- -- 100Rs/-</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* end */}
          </div>
        </div>
        {/*second row  */}
        <div className="ourproduct-boxes">
          <div className="ourproduct-box-container">
            <div className="product1">
              <img src={productoneimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/kg -- 100Rs/kg</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* 2 */}
            <div className="product1">
              <img src={producttwoimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/- -- 100Rs/-</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* 3 */}
            <div className="product1">
              <img src={productoneimg} alt=""></img>
              <h3>Fresh Cabage</h3>
              <h3>30Rs/- -- 100Rs/-</h3>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
              <button>Add To Cart</button>
            </div>
            {/* end */}
          </div>
        </div>
        {/* second row end */}
      </div>
    </>
  );
};

export default Ourproducts;
