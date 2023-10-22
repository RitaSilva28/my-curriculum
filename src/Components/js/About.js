import React from "react";
import Trace2 from "../../images/traço2.svg" ;
import Photo from "../../images/fotoCV.jpg"


import"../css/About.css"

export default function About(){
    return( 



    <div  id="about">


         <h1> <span className="title">About me...<img class="trace" src={Trace2} alt="underline draw"/></span></h1>

<div className="about-me-container row ">
    <img className=" profile-photo col-sm-5 .float-sm-right
" src={Photo} alt="Rita Silva"  />

         <p className="col-sm-7 mx-auto about-description" >
             
             Hi there! I'm Rita! <br/><br/>
          I'm a Junior Frontend Developer. In 2020 with lockdown and the pandemic I decided to explore how to create a website. I always considered myself to be a very curious person and to easily learn new things. <br/> <br/>I enrolled in a few short courses on websites like Udemy and LinkedIn Learning. I moved on to Mobwiser’s Web Development Bootcamp and recently finished 3 SheCodes Workshops (Basics, Plus and React). Currently I’m looking for a career change that will allow me to pursue
          Frontend Development and make it my full-time career.


          <br/>
          
    



 </p>


</div>

<div className="skills-container">

    <h4>My Skills</h4>

<div className="row">

    <ul className="col">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Angular</li>
    </ul>
    <ul className="col">
        <li>VSCode</li>
        <li>Typescript</li>
        <li>Bootstrap</li>

        <li>GIT</li>
        <li>NPM</li>
       
    </ul>

    </div>

</div>

<div className="hire-container">

<h4>What I can bring to your team...</h4>

<ul>
<li>Team Work</li>
<li>Communication</li>

<li>Responsability</li>

    <li>Organization</li>
    <li>Willingness to learn</li>
    <li>Commitment</li>




</ul>



</div>

        </div>
        )
}