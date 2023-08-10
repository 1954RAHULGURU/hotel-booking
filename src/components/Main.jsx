import React from "react";
import { Link } from "react-router-dom";
import "./stytles/main.css";

const Main = () => {
  return (
    <div class="container-fluid maindiv">
      <div className="headeroyo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Oyorooms-branding.svg/1200px-Oyorooms-branding.svg.png"
          alt=""
          height={70}
          width={70}
        />
        <h1 className="title"> Welcome to OYO Hotel Booking </h1>
        <div className="login01">
          <Link to="/AdminLogin">
            {" "}
            <h3>Admin Login</h3>
          </Link>
        </div>
        <div className="login2">
          <Link to="/CustomerLogin">
            {" "}
            <h3>Customer Login</h3>
          </Link>
        </div>
      </div>

      <div className="details1">
        <h3>Over 157,000 hotels and homes across 35 countries</h3>
      </div>

      <div className="details2">
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/f0be8dc3-e384-40b3-89f9-a0a0109159ce.jpg"
          alt=""
          width={1450}
          height={200}
        />
      </div>

      <div className="details3">
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/ac15627f-c423-4383-a43b-1402ef8c3a73.png"
          alt=""
          width={1450}
          height={100}
        />
      </div>

      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmYZ7jw6D8CycIC9qkY2bdHnHVGyHMlHQAk2Xzhirwq2VmtYhEXPor3nGfpGp6HGVQhU&usqp=CAU"
        alt=""
        width={150}
      />
      <div className="details4">
        <h3>World's leading chain of hotels and homes</h3>
        <h5>Download OYO app for exciting offers.</h5>
        <h6>About Us</h6>
        <h6>Terms & Careers</h6>
        <h6>Blogs</h6>
        <h6>Terms & Conditions</h6>
        <h6>Guest policys</h6>
        <h6>Trust and safety</h6>
        <h6>2023 @ All Rights Reservrd</h6>
      </div>
    </div>
  );
};

export default Main;
