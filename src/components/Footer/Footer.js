import React from "react";
import "./Footer.css";

import { logo } from "../Images/Images";

const Footer = () => {
    return (
        <div className="footer_div">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Footer;