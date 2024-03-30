import React from "react";

import "./homecomponentsstyles.css";

import picone from "../../../assets/pic-1.png";
import pictwo from "../../../assets/pic-2.png";
import picthree from "../../../assets/pic-3.png";

import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Reviews = () => {
  return (
    <>
      <div className="review">
        <div className="review-heading">
          <h2>
            Customer's <span>Review</span>
          </h2>
        </div>
        <div className="review-boxes">
          <div className="review-box-container">
            <div className="review1">
              <img src={picone} alt=""></img>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                Etiam in mi a risus condimentum dictum. Nullam id finibus sem.
                Nunc iaculis orci ut tincidunt porttitor.
              </p>
              <h2>Jhon Deo</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
            </div>
            {/* 2 */}
            <div className="review1">
              <img src={pictwo} alt=""></img>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                Etiam in mi a risus condimentum dictum. Nullam id finibus sem.
                Nunc iaculis orci ut tincidunt porttitor.
              </p>
              <h2>Jhon Deo</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
            </div>
            {/* 3 */}
            <div className="review1">
              <img src={picthree} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                Etiam in mi a risus condimentum dictum. Nullam id finibus sem.
                Nunc iaculis orci ut tincidunt porttitor.
              </p>
              <h2>Jhon Deo</h2>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStarHalfStroke />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
