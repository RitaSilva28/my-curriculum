import React from "react";
import Github from "../../images/GITHUB_logo.png"
import Linkedin from "../../images/linkedin_logo.png"


import "../css/Socials.css"

export default function Socials(){

    return(
        <div className="social-container" >
            <ul>
                <li className="social-item"><a href="https://github.com/RitaSilva28" target="_blank" rel="noreferrer"><img className="logo" src={Github} alt="github logo"/></a></li>
                <li><img className="logo" src={Linkedin} alt="Linkedin logo"/></li>

            </ul>



        </div>
    )




}