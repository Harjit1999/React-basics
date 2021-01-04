import React from "react";
import App4 from "./StateChange";
import tododata from "./todoData";

import Todo from "./TodoItem.js";
class App5 extends React.Component{

    constructor()
    {
        super();
        this.state={
            todos:tododata,
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(id)
    {
       this.setState(function(pre){
           var update=pre.todos.map(function(nw)
           {
               if(nw.id===id)
               {
                   nw.completed=!nw.completed;
               }
               return nw;
           })
           return {
                todos :update,
           };
       })
    }
    render()
    {
        var jok=this.state.todos.map(function(jo){
              return <Todo id={jo.id} item={jo.item} completed={jo.completed}/>
              
        })
               return (<div>
                   {jok}
               </div>
        )
    }
}
export default App5;