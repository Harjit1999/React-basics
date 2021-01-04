import React from "react";
import Condition from "./Conditional";

class App6 extends React.Component
{
   constructor()
   {
       super();
       this.state={login:true};
       this.handle=this.handle.bind(this);
   }
 
  /* componentDidMount()
   {  
       setTimeout(()=>
            {
          this.setState({login:false})
            }
       ,3000);
   }*/
   handle()
   {
       this.setState(function(pre){
           return {login :!pre.login};
           
       }
       )
   }
   render()
   {   var status;
        if(this.state.login)
        {
            status="LogOut";
        }
        else{
            status="LogIn";
        }
       return <div>
          <Condition check={this.state.login} />
          <button onClick={this.handle}>{status}</button>
       </div>
   }
}
export default App6;