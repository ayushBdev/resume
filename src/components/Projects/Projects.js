import React from "react";
import "./Projects.css";


import { url } from "../Images/Images";

import ProjectData from "./ProjectData/ProjectData";

const Projects = () => {
    return (
        <div className="project_div">
            <div className="project_head">
                <p> PROJECTS </p>
            </div>
            <div className="project_menu">
                {ProjectData.map(ar => (
                    <div className="project_data" target="_blank">
                        <div className="project_title">
                            <p> {ar.title} </p>
                        </div>
                        <div className="project_desc">
                            <div>
                                <a href={ar.link} target="_blank"> 
                                    <img src={url} alt=""/> 
                                    <p> {ar.link} </p>
                                </a>
                                <p> {ar.description} </p>
                            </div>
                            <div>
                                <img src={ar.qrcode} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;