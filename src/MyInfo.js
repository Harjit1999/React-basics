import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./style.css";
import Image from "./Image";
import Joke from "./joke";
import jokedata from "./jokedata";
import Pro from "./productApp";
import App from "./classBased";
import App4 from "./StateChange";
import App5 from "./todo4";
function fun()
{
    console.log("hovered");
}
function MyInfo()
{
   const comp=jokedata.map(function(joke){
       return <Joke line={
           {
       key:joke.id,
       question:joke.question,
       punchLine:joke.punchLine
       } 
    } 
    />
   }) ;  
   return (<div>
       <Header/>
       <Footer/>
      
       <h1 onMouseOver={fun}>{comp}</h1>
       <Pro/>
       <App/>
       <button onClick={fun}>Click me!</button>
       
       <App4/>
       <App5/>
     </div>
     );
} 
export default MyInfo;