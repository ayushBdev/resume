import React from "react";
import "./Contact.css";

import ContactData from "./ContactData/ContactData";

const Contact = () => {
    return (
        <div className="contact_div">
            <div className="contact_head">
                <p> CONTACT </p>
            </div>
            <div className="contact_list">
                {ContactData.map(ar => (
                    <a className="links" href={ar.link} key={ar.value} target="_blank">
                        <img src={ar.icon} alt=""/>
                        <p> {ar.value} </p>
                    </a>
                ))}
            </div>
        </div>
    );
};  

export default Contact;