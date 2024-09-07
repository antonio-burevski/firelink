import React from "react";
import "../../assets/css/header.css";
import logo from "../../assets/media/firelink_hub_logo.png";

const FlHeader: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="title">Firelink Hub</div>
      </div>
      <nav className="navbar">
        <a href="#hub">Hub</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#account">Account</a>
      </nav>
    </header>
  );
};

export default FlHeader;
