import React from "react";
import{Link} from "react-scroll"
import "../css/Nav.css"

export default function Nav(){


    return(
        <div className="nav-container">
            <ul>
    <li className="nav-item"> <Link to="about" spy={true} smooth={true}  duration={500} > <span className="first-letter">A</span>bout
        </Link></li>
    <li className="nav-item"><Link to="education" spy={true} smooth={true}  duration={500} > <span className="first-letter">E</span>ducation
        </Link></li>
    <li className="nav-item"><Link to="projects" spy={true} smooth={true}  duration={500} > <span className="first-letter">P</span>rojects
        </Link></li>
    <li className="nav-item"><Link to="contact"  spy={true} smooth={true}  duration={500} ><span className="first-letter">C</span>ontact
        </Link></li>
       <li className="nav-item"><a href="https://drive.google.com/file/d/1pBS9L-mooITyzWpXyHX8KL0JmlhRRTQx/view?usp=sharing" target="_blank" rel="noreferrer" ><span className="first-letter">R</span>esume</a></li>


  </ul>
        </div>
    )
}