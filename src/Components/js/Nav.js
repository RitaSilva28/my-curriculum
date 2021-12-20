import React from "react";
import{Link} from "react-scroll"
import "../css/Nav.css"

export default function Nav(){


    return(
        <div className="nav-container">
            <ul>
    <li className="nav-item"> <Link to="about" spy={true} offset={-50} smooth={false}  duration={300}>About
        </Link></li>
    <li className="nav-item"><Link to="education" spy={true} offset={-50} smooth={false}  duration={300} >Education
        </Link></li>
    <li className="nav-item"><Link to="projects" spy={true} offset={-50} smooth={false}  duration={300} >Projects
        </Link></li>
    <li className="nav-item"><Link to="contact"  spy={true} offset={-30} smooth={false}  duration={300} >Contact
        </Link></li>
       <li className="nav-item"><a href="https://drive.google.com/file/d/1pBS9L-mooITyzWpXyHX8KL0JmlhRRTQx/view?usp=sharing" target="_blank" rel="noreferrer" >Resume</a></li>


  </ul>
        </div>
    )
}