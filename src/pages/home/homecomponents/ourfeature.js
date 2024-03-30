import React from "react";
import featureimage1 from "../../../assets/feature-img-1.png";
import featureimage2 from "../../../assets/feature-img-2.png";
import featureimage3 from "../../../assets/feature-img-3.png"

import "./homecomponentsstyles.css";

const Ourfeatures = () => {
  return (
    <>
      <div className="ourfeatures">
        <div className="ourfeatures-heading">
          <h2>
            Our <span>Features</span>
          </h2>
        </div>
        <div className="Ourfeatures-boxes">
          <div className="ourfeatures-box-container">
            <div className="box1">
              <img src={featureimage1} alt=""></img>
              <h2>Fresh And Organic</h2>
              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </p>
              <button type="submit">Read More</button>
            </div>
            <div className="box1">
              <img src={featureimage2} alt=""></img>
              <h2>Fresh And Organic</h2>

              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </p>
              <button type="submit">Read More</button>
            </div>
            <div className="box1">
              <img src={featureimage3} alt=""></img>
              <h2>Fresh And Organic</h2>

              <p>
                Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit, Quis!
              </p>
              <button type="submit">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourfeatures;
