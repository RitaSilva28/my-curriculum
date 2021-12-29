import React from "react";
import Trace2 from "../../images/traço2.svg" ;
import"../css/Contact.css"


export default function Contact(){


    return ( <div  id="contact">
         <h1> <span className="title">Let's get in touch!<img class="trace" src={Trace2} alt="underline draw"/></span></h1>

         <p className="contact-description">I'm currently open to work so if we think we can collaborate, you can follow me and send me a message in any of my social accounts or you can click the button bellow and send me an email! </p>

         <button><a href="mailto:webmaster@example.com">EMAIL ME</a></button>
      






        </div>
    )
}