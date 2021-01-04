import React from "react";

class App4 extends React.Component
{
    constructor()
    {
        super();
        this.state={
            inc:0,
        }
        this.stateChange=this.stateChange.bind(this);
    }
    stateChange()
    {
      this.setState(function(pre){
            return {inc:pre.inc+1};
      });
    }
    render()
    {
        return <div>
            <h1>{this.state.inc}</h1>
            <button onClick={this.stateChange}>Increase</button>
        </div>
    }
}
export default App4;