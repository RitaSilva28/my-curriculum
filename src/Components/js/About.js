import React from "react";
import Trace2 from "../../images/traço2.png" ;
import Photo from "../../images/fotoCV.jpeg"


import"../css/About.css"

export default function About(){
    return( 

    <div  id="about">

         <h1> <span className="title">About me...<img class="trace" src={Trace2} alt="underline draw"/></span></h1>

<div className="about-me-container row ">
    <img className=" profile-photo col-3" src={Photo} alt="Rita Silva"  />

         <p className="col-8 about-description" >Hello! My name is Rita and I'm a Junior Frontend Developer. My interest in programming/development started in the beginning of 2020 when I had
more free time and decided to explore the process of creating a website.
At first I enrolled in a few short courses on websites like Udemy and LinkedIn Learning. <br/><br/>Then, I decided to enroll in Mobwiser’s Web Development Bootcamp. By doing so I was able

to focus my attention and interest in Frontend Development.
Currently I’m looking for a career change that will allow me to pursue
Frontend Development and make it my full-time career. </p>


</div>

<div className="skills-container">

    <h4>My Skills</h4>

<div className="row">

    <ul className="col">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>Javascript</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Angular</li>
    </ul>
    <ul className="col">
    <li>VSCode</li>
        <li>Typescript</li>
        <li>GIT</li>
        <li>NPM</li>
       
    </ul>

    </div>

</div>

<div className="hire-container">

<h4>What I can bring to your team...</h4>

<ol>
    <li>Organization</li>
    <li>Resilience</li>
    <li>Team Work</li>
    <li>Willingness to learn</li>
    <li></li>



</ol>



</div>

        </div>
        )
}