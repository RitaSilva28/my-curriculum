import React,{useState} from "react"
import"./Intro.css"
import MainPage from"./MainPage"





export default function Intro(){

    let [displayIntro, setDisplayIntro]=useState(true)

function enterSite(){
    setDisplayIntro(false)
}

    if(displayIntro){
    return(
        <div>
        
        <div className="intro">
            <div className="titles">
              <h1>Hello, I'm <span>Rita Silva</span></h1>
              <h1>I'm a Frontend Developer and Video Editor</h1>

              <h4>Check my work</h4>
              <input type="button" value="Enter site ➡︎" onClick={enterSite}/>
              </div>
              </div>
            <img className="intro-bg" alt="background"/>
       
        </div>
             
              
    )
    }else{
        return <MainPage />
    }
}