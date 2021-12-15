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

         <p className="col-8" >Hello! My name is Rita and I'm a junior Frontend Developer. My interest in programming/development started in the beginning of 2020 when I had
more free time and decided to explore the process of creating a website.
At first I enrolled in a few short courses on websites like Udemy and LinkedIn Learning. I
then decided to enroll in Mobwiser’s Web Development Bootcamp. By doing so I was able

to focus my attention and interest in Frontend Development
Currently I’m looking for a career change that will allow me to pursue
Frontend Development and make it my full-time career. </p>


</div>

        </div>
        )
}