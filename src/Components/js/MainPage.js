import React from "react";
import About from "./About"
import Projects from "./Projects"
import Education from "./Education"
import Contact from "./Contact";
import Nav from "./Nav";

import "../css/MainPage.css"



export default function MainPage(){
    
  return (

<div>
<Nav id="navbar"/>


<div className="MainPage">
<About id="About"/>
<Education id="Education"/>
<Projects id="Projects"/>
<Contact id="Contact"/>


</div>
</div>
  )
}


