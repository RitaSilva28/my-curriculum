import React, {useState} from "react";
import{Link} from "react-scroll"
import Menu from "../../images/menu.png"
import "../css/Nav.css"


export default function Nav(){

    let [display, setDisplay]=useState(false);

    window.addEventListener("resize", ()=>{
        if (window.innerWidth > 655){


  let navbar= document.querySelector("ul");

navbar.style.display="block";
        
    } else{

        let navbar= document.querySelector("ul");

        navbar.style.display="none";

    }});



    function displayNav(){

if(window.innerWidth <= 655){

        if(!display ){

            let navbar= document.querySelector("ul");

navbar.style.display="block";

setDisplay(true)

}else if(display){

    let navbar= document.querySelector("ul");

    navbar.style.display="none";

    setDisplay(false)


}
}

    }


    return(
        <div className="nav-container">
            <img className="menu-button" src={Menu} alt="menu button" onClick={displayNav} />
            <ul >
    <li className="nav-item nav-display"> <Link to="about" spy={true} offset={-50} smooth={false}  duration={300} onClick={displayNav}>About
        </Link></li>
    <li className="nav-item nav-display"><Link to="education" spy={true} offset={-50} smooth={false}  duration={300} onClick={displayNav} >Education
        </Link></li>
    <li className="nav-item nav-display"><Link to="projects" spy={true} offset={-50} smooth={false}  duration={300} onClick={displayNav} >Projects
        </Link></li>
    <li className="nav-item nav-display"><Link to="contact"  spy={true} offset={-50} smooth={false}  duration={300} onClick={displayNav} >Contact
        </Link></li>
       <li className="nav-item nav-display"><a href="https://drive.google.com/file/d/1wanz_HDMuPV6l4KLEdp7mfwWycSheKkO/view?usp=sharing" target="_blank" rel="noreferrer" onClick={displayNav}>Resume</a></li>


  </ul>
        </div>
    )
}