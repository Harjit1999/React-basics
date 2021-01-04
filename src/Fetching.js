import React from "react";

class Fetch extends React.Component
{
   constructor()
   {
       super();
       this.state={
           info:[],
           loading:true,
       }
   }
   componentDidMount()
   { 
     fetch("https://swap.co/api/people").then((resp)=>
        resp.json()
    ).then((data)=>        
         this.setState({
             info:data,
         }) )
   }
   render()
   {  var item=this.state.loading?"loading...":this.state.info;
       return <div>
           {item}
       </div>
   }

}
export default Fetch;