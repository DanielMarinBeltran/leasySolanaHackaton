import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__slider-area ltn__slider-3  section-bg-1 go-top">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title white-color--- animated">
                          <span>
                            <i className="fas fa-home" />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className="slide-title animated ">
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </p>
                        </div>
                        <div className="btn-wrapper animated ">
                          <Link
                            to="/about"
                            className="theme-btn-1 btn btn-effect-1 go-top"
                          >
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <img
                        src={
                          publicUrl +
                          "assets/img/home/man-black-suit-copy-space-removebg-preview.png"
                        }
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
