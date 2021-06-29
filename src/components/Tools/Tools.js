import React from "react";
import "./Tools.css";

import ToolsData from "./ToolsData/ToolsData";

const Tools = () => {
    return (
        <div className="tools_div">
            <div className="tools_head">
                <p> TOOLS </p>
            </div>
            <div className="tools_menu">
                {ToolsData.map(ar => (
                    <div className="tools_data">
                        <img src={ar.icon} alt=""/>
                        <p> {ar.title} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tools;