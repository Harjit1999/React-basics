import React from "react";

function Condition(props)
{
   if(props.check===true)
   {
       return <h1>user log in</h1>
   }
  return <h1>user log out</h1>
}

export default Condition;