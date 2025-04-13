/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const MovingSection = () => {
  const {homePage} = useSelector((state) => state.HomePage);

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="moving-section-wrap cs-bold">
        <div className="moving-section-in">
          {[...Array(3)].map((_, index) => (
            <div className="moving-section" key={index}>
              <h2>{homePage?.marqueeText}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovingSection;
