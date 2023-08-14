import React from "react";
import "./contact.css";
import { FaMailBulk, FaSearchLocation } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <div className="app">
        <div className="container-contact">
          <div className="title">Contact</div>
          <div className="desc">Don't be shy! Hit me up! 👇</div>
        </div>
      </div>

      <div className="app">
        <div className="container-contact p-b-100">
          <div className="row space-between">
            <div className="location">
              <div className="icon-location">
                <FaSearchLocation />
              </div>
              <div>
                <div className="txt-location">Location</div>
                <div className="txt-location">Jakarta, Indonesia</div>
              </div>
            </div>
            <div className="location">
              <div className="icon-location">
                <FaMailBulk />
              </div>
              <div>
                <div className="txt-location">Mail</div>
                <div className="txt-location">ddaniramdani10@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
