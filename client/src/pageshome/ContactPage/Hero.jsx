/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';

const Hero = () => {
  const {homePage} = useSelector((state) => state.HomePage);
  
  return (
    <section className="common-page-hero">
    <img
      src="../assets/img/bg/common-bg.png"
      className="common-hero-bg ak-bg"
      alt="..."
    />
    <div className="common-hero-content">
      <div className="common-hero-info">
        <div
          className="ak-section-heading ak-style-1 animation-title-content animation-style3"
        >
          <p className="ak-section-subtitle animation-title">{homePage?.contactSection?.bannertext}</p>
          <h2 className="ak-section-title animation-title">
          {homePage?.contactSection?.title}
          </h2>
        </div>
        <p className="back-btn"><a href="/">Home</a> / Contact</p>
      </div>
      <a href="" className="phone-number">{homePage?.contactSection?.phoneNumber[0]}</a>
    </div>
  </section>
  )
}

export default Hero
