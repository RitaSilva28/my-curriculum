import React,{useState} from "react"
import"../css/Intro.css"
import MainPage from"./MainPage";
import Footer from"./Footer"
import Trace1 from "../../images/traço.png" ;
import Trace2 from "../../images/traço2.png" ;

export default function Intro(){

    let [displayIntro, setDisplayIntro]=useState(true)

function enterSite(){
    setDisplayIntro(false)
}

    if(displayIntro){
    return(
        
        <div>
        <div className="intro">
              <h1>  HELLO! I'M <span className="name">RITA <img class="trace1" src={Trace1} alt="underline draw"/>
</span></h1>
              <h2>  I'M A <span className="frontend-word ">FRONTEND DEVELOPER <img class="trace2 hide" src={Trace2} alt="underline draw"/></span> AND THIS IS MY WEB PORTFOLIO  </h2>

              <p> PLEASE CLICK THE <span className="button-word">{`<BUTTON>`}</span> BELOW TO CHECK IT OUT </p>
              <input type="button" value="ENTER" onClick={enterSite}/>
              </div> 
              <Footer/>

              

              </div>
    )
    }else{
        return <MainPage />

    }
}