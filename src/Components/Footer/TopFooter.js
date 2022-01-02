import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const TopFooter = () => {
  return (
    <TopFooterStyled className="container-fluid">
      <div className="top">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <h3 className="my-4">BikersHub</h3>
            <p className="my-4">
              House: A, Road: A, Sector: A, Uttara Model Town, Dhaka 1230,
              Bangladesh
            </p>
            <p className="my-2">Email: fht801@gmail.com</p>
            <p className="my-2">Phone: +880160001110111</p>
            {/* <button className="button btn my-2">Read More</button> */}
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 services text-center">
            <h3 className="mt-3">Services</h3>
            <p>
              <Link className="text-white text-decoration-none" to="/">
                Support
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/">
                Account
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 Subscribe">
            <p className="mt-5">Subscribe for for Update and news.</p>
            <input className="input-group" type="text" placeholder="Email" />
            <div className="icons my-4">
              <i className="fab fa-facebook-square fa-3x mx-3"></i>
              <i className="fab fa-instagram-square fa-3x mx-3"></i>
              <i className="fab fa-twitter fa-3x mx-3"></i>
              <i className="fab fa-youtube fa-3x mx-3"></i>
            </div>
          </div>
        </div>
      </div>
    </TopFooterStyled>
  );
};

const TopFooterStyled = styled.div`
  color: white;
  .top {
    .button {
      background-color: #f1be5d;
      color: #444040;
      font-weight: 600;
      border: none;
    }
    .button:hover {
      background-color: orange;
    }
    .services {
      p {
        font-weight: 600;
      }
    }
    .icons {
      i {
        color: #ffffff;
      }
      i:hover {
        color: #7456d6;
        /* background-color: white; */
      }
    }
    .Subscribe {
      p {
        font-weight: 600;
        font-size: 18px;
      }
      input {
        border: none;
        border-radius: 3px;
        height: 30px;
      }
    }
  }
`;

export default TopFooter;
