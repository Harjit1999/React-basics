import React from "react";
import JokeData from "./jokedata";
import Joke from "./joke";
class App extends React.Component
{   constructor()
    {   super();
        this.state={
            logedIn:true,
        };
    }
    render(){
        
       
        return <div>
             <App2 name={this.state.logedIn} />
             <App3/>
        </div>
    }
}

class App2 extends React.Component{
    render()
    {    var st;
        if(this.props.name)
        {
            st="in"
        }
        else{
            st="out"
        }
        return <div>
            <h1>user is {st}</h1>
        </div>
    }
}
class App3 extends React.Component{
    constructor()
    {
        super();
        this.state={
            todos:JokeData,
        }
    }
    
    render()
    {    
        var stat=this.state.todos.map(function(joke){
            return <Joke line={
                  {
                      key:joke.key,
                      question:joke.question
     
                  }
            }     />
        })
        return <div>
            <h1>{stat}</h1>
        </div>
    }
}
export default App;
 

