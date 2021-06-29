import React from "react";
import "./Hobbies.css";

import HobbiesData from "./HobbiesData/HobbiesData";

const Hobbies = () => {
    return (
        <div className="hobbies_div">
            <div className="hobbies_head">
                <p> HOBBIES </p>
            </div>
            <div className="hobbies_menu">
                <p> When I'm not coding, I like  </p>
                {HobbiesData.map(ar => (
                    <div className="data_menu">
                        <img src={ar.icon} alt=""/>
                        <p> {ar.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hobbies;