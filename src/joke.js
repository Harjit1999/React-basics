import React from "react";
import "./style.css";
function Joke(props)
{   
    /*if(props.line.question===undefined)
    {
        props.line.question=props.line.punchLine;
    }*/
    console.log(props.line.question);
    return(<div className="jok">
        <h1>Jokes</h1>
        
        <p style={{display:props.line.question?"block":"none"}}>question:
           {props.line.question}
        </p>
        <p style={{color:props.line.question?"green":"red"}}>punchline:{props.line.punchLine}</p>
        
        <hr/>
    </div>)
}
export default Joke;