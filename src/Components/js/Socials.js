import React from "react";
import Github from "../../images/GITHUB_logo.png"
import Linkedin from "../../images/linkedin_logo.png"
import Instagram from "../../images/instagramLogo.png"


import "../css/Socials.css"

export default function Socials(){

    return(
        <div className="social-container" >
            <ul>
                <li className="social-item"><a href="https://github.com/RitaSilva28" target="_blank" rel="noreferrer"><img className="logo" src={Github} alt="github logo"/></a></li>
                <li ><a href="https://www.linkedin.com/in/rita-silva-44584453/" target="_blank" rel="noreferrer"><img className="logo" src={Linkedin} alt="Linkedin logo"/></a></li>
                <li ><a href="https://www.instagram.com/ritacfs/" target="_blank" rel="noreferrer"><img className="logo" src={Instagram} alt="Instagram logo"/></a></li>

            </ul>



        </div>
    )




}