import React from "react";
import "./Language.css";

import LanguageData from "./LanguageData/LanguageData";

const Language = () => {
    return (
        <div className="language_div">
            <div className="language_head">
                <p> LANGUAGES & FRAMEWORKS </p>
            </div>
            <div className="language_menu">
                {LanguageData.map(ar => (
                    <div className="language_data">
                        <img src={ar.icon} alt=""/>
                        <p> {ar.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Language;