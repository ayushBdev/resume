import React from "react";
import "./Home.css";

import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Education from "../Education/Education";
import Hobbies from "../Hobbies/Hobbies";
import Tools from "../Tools/Tools";
import Language from "../Languages&Frameworks/Language";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <Header/>
            </div>
            <div className="contact">
                <Contact/>
            </div>
            <div className="menu">
                <div className="section-1">
                    <div className="aboutme">
                        <About/>
                    </div>
                    <div className="education">
                        <Education/>
                    </div>
                    <div className="hobbies">
                        <Hobbies/>
                    </div>
                </div>
                <div className="section-2">
                    <div className="tools">
                        <Tools/>
                    </div>
                    <div className="langauges">
                        <Language/>
                    </div>
                    <div className="projects">
                        <Projects/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Home;