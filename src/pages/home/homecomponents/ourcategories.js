import React from "react";

import "./homecomponentsstyles.css";

import categoriesimgone from "../../../assets/categories-1.png";
import categoriesimgotwo from "../../../assets/categories-2.png";
import categoriesimgthree from "../../../assets/categories-3.png";
import categoriesimgfour from "../../../assets/categories-4.png";

const Ourcategories = () => {
  return (
    <>
      <div className="Ourcategories">
        <div className="Ourcategories-heading">
          <h2>
            Our <span>Categories</span>
          </h2>
        </div>
        <div className="Ourcategories-boxes">
          <div className="Ourcategories-box-container">
            <div className="categories1">
              <img src={categoriesimgone} alt=""></img>
              <h3>Fresh Cabage</h3>
              <p>Upto 45% Off</p>
              <button>Shop Now</button>
            </div>
            {/* 2 */}
            <div className="categories1">
              <img src={categoriesimgotwo} alt=""></img>
              <h3>Fresh Cabage</h3>
              <p>Upto 45% Off</p>
              <button>Shop Now</button>
            </div>
            {/* 3 */}
            <div className="categories1">
              <img src={categoriesimgthree} alt=""></img>
              <h3>Fresh Cabage</h3>
              <p>Upto 45% Off</p>
              <button>Shop Now</button>
            </div>
            {/* 4 */}
            <div className="categories1">
              <img src={categoriesimgfour} alt=""></img>
              <h3>Fresh Cabage</h3>
              <p>Upto 45% Off</p>
              <button>Shop Now</button>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourcategories;
