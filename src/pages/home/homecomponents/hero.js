import React from "react";
import heroimage from "../../../assets/banner-bg.jpg";

import "./homecomponentsstyles.css";

const Hero = () => {
  return (
    <>
      <div className="herosection">
        <img src={heroimage} alt="banner" />
        <div className="hero-content">
          <div className="hero-pera">
            <h2>
              Fresh And <span style={{ color: "rgb(255, 94, 0)" }}>Organic</span>{" "}
              Products
            </h2>
            <p>
              Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam
              Vitae Perspiciatis Neque Soluta.
            </p>
            <button type="submit">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
