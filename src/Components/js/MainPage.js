import React from "react";
import About from "./About"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact";
import Socials from "./Socials";
import Nav from "./Nav";

import "../css/MainPage.css"



export default function MainPage(){
    
  return (

<div>
<Nav id="navbar"/>


<div className="MainPage">
<About />
<Education />
<Projects />
<Contact />
<Socials/>
</div>



</div>
  )
}


