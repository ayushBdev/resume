import React from "react";
import "./Header.css";

import { frame ,photo } from "../Images/Images";

const Header = () => {
    return (
        <div className="header_div">
            <div className="header_text">
                <p> AYUSH BHATT </p>
                <p> FULL STACK WEB DEVELOPER </p>
            </div>
            <div className="pic">
                <img src={photo} alt=""/>
            </div>
            <div className="barcode">
                <img src={frame} alt=""/>
            </div>
        </div>
    );
};  

export default Header;