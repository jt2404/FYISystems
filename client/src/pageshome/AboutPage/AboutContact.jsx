/* eslint-disable */
import React from 'react'
import IMG4 from "../../assets/img/contact/contact-img.png";
import { addfeedbackData } from 'src/services/Feedback';

const AboutContact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (data.appointmentDate && data.appointmentTime) {
      data.appointmentDate = new Date(`${data.appointmentDate}T${data.appointmentTime}`).toISOString();
      delete data.appointmentTime;
    }
    try {
      const response = addfeedbackData(data);
      e.target.reset();
      console.log("✅ Data sent successfully:", response.data);
    } catch (error) {
      e.target.reset();
      console.error("❌ Error sending data:", error);
    }
  };
  return (
    <div id='contactform'>
    <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container-fluid px-md-0" >
      <div className="contact-form-content">
        <div className="contact-form-img">
          <img src={IMG4} alt="Contact Image" />
        </div>
        <div className="contact-form">
          <div>
            <h5 className="contact-title">
              Ready to take control of your financial future? Our team of
              seasoned experts is here to guide you every step of the way. Fill
              out the form below to get in touch with us today!
            </h5>
            <div className="ak-height-40 ak-height-lg-30"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <div className="type_1">
                <label for="fullname" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="csame"
                  placeholder="Write your name here..."
                />
              </div>
            </div>
            <div className="form-inputs">
              <div className="type_1">
                <label for="YourPhone" className="form-label">Your Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="YourPhone"
                  className="csame"
                  placeholder="Write your phone number here..."
                />
              </div>
              <div className="type_1">
                <label for="emailInput" className="form-label">Your Email*</label>
                <input
                  type="email"
                  name="email"
                  id="emailInput"
                  className="csame"
                  placeholder="Write your email here..."
                  required
                />
              </div>
            </div>

            <div className="form-textarea">
              <div className="type_1">
                <label for="textareaInput" className="form-label"
                  >Description</label
                >
                <textarea
                  name="description"
                  rows="3"
                  id="textareaInput"
                  className="csame"
                  placeholder="Write description details..."
                ></textarea>
              </div>
            </div>
            <div className="form-inputs mt-3">
  <div className="type_1">
    <label htmlFor="appointmentDate" className="form-label">Appointment Date</label>
    <input
      type="date"
      name="appointmentDate"
      id="appointmentDate"
      className="csame"
      required
    />
  </div>
  <div className="type_1">
    <label htmlFor="appointmentTime" className="form-label">Appointment Time</label>
    <input
      type="time"
      name="appointmentTime"
      id="appointmentTime"
      className="csame"
      required
    />
  </div>
</div>

            <div className="ak-height-40 ak-height-lg-40"></div>
            <button type="submit" className="common-btn border-0">
              <span> Book Appointment</span>
              {/* <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_978fsdf)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_978fsdf">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.00927734)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span> */}
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutContact