import React from "react";

import "./homecomponentsstyles.css";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

import blogone from "../../../assets/blog-1.jpg";
const Ourblogs = () => {
  return (
    <>
      <div className="blogs">
        <div className="blogs-heading">
          <h2>
            Our <span>Blogs</span>
          </h2>
        </div>
        <div className="blogs-boxes">
          <div className="blogs-box-container">
            <div className="blogs1">
              <img src={blogone} alt=""></img>

              <div className="user-blogs">
                <div className="blogs-user">
                  <span className="icon-orange">
                    <FaUser />
                  </span>
                  <span>User </span>
                </div>
                <div className="blog-date">
                  <span className="icon-orange">
                    <SlCalender />
                  </span>
                  <span>1st March 2024</span>
                </div>
              </div>
              <div className="peras">
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                <button>Read More</button>
              </div>
            </div>
            {/* 2 */}
            <div className="blogs1">
              <img src={blogone} alt=""></img>

              <div className="user-blogs">
                <div className="blogs-user">
                  <span className="icon-orange">
                    <FaUser />
                  </span>
                  <span>User </span>
                </div>
                <div className="blog-date">
                  <span className="icon-orange">
                    <SlCalender />
                  </span>
                  <span>1st March 2024</span>
                </div>
              </div>
              <div className="peras">
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                <button>Read More</button>
              </div>
            </div>
            {/* 3 */}
            <div className="blogs1">
              <img src={blogone} alt=""></img>

              <div className="user-blogs">
                <div className="blogs-user">
                  <span className="icon-orange">
                    <FaUser />
                  </span>
                  <span>User </span>
                </div>
                <div className="blog-date">
                  <span className="icon-orange">
                    <SlCalender />
                  </span>
                  <span>1st March 2024</span>
                </div>
              </div>
              <div className="peras">
                <h3>Fresh And Organic Vegetables And Fruits</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                fringilla turpis quis diam dapibus, in sodales eros semper.
                <button>Read More</button>
              </div>
            </div>
            {/* 3end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourblogs;
