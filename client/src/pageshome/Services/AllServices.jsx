/* eslint-disable */
import React from "react";
import service_4 from "../../assets/img/service/service_4.png";
import service_5 from "../../assets/img/service/service_5.png";
import service_6 from "../../assets/img/service/service_6.png";
import service_7 from "../../assets/img/service/service_7.png";
import service_8 from "../../assets/img/service/service_8.png";
import service_9 from "../../assets/img/service/service_9.png";
import { useSelector } from "react-redux";

const AllServices = () => {
  
  const {homePage} = useSelector((state) => state.HomePage);

  return (
    <>
      <div className="ak-height-60 ak-height-lg-50"></div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          <a href="service-details.html" className="service-card style-two">
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[0]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[0]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">          {homePage?.servicesSection?.services[0]?.title}
              </p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[0]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
          <a href="service-details.html" className="service-card style-two">
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[1]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[1]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">{homePage?.servicesSection?.services[1]?.title}</p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[1]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
          <a href="service-details.html" className="service-card style-two">
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[2]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[2]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">{homePage?.servicesSection?.services[2]?.title}</p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[2]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
          <a href="service-details.html" className="service-card style-two">
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[3]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[3]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">{homePage?.servicesSection?.services[3]?.title}</p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[3]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
          <a
            href="service-details.html"
            className="service-card style-two mb-10"
          >
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[4]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[4]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">{homePage?.servicesSection?.services[4]?.title}</p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[4]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
          <a href="service-details.html" className="service-card style-two">
            <div className="service-thumb">
              <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[5]?.imageUrl}`} alt="..." />
              <div className="overlay-image">
                <img src={`http://3.128.53.252:3001${homePage?.servicesSection?.services[5]?.imageUrl}`} alt="..." />
              </div>
            </div>
            <div className="service-info">
              <p className="service-title">{homePage?.servicesSection?.services[5]?.title}</p>
              <p className="service-desp">
              {homePage?.servicesSection?.services[5]?.description}
              </p>
            </div>
            <div className="service-footer">
              <p className="more-btn">
                <span> View More </span>
                <span className="svg-icon style-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z"
                      fill="#030917"
                    />
                    <path
                      d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default AllServices;
