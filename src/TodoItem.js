import React from "react";

function fun(props)
{
    console.log("changed"+props.completed);
}
function TodoItem(props)
{   
    return (<div className="todo-item">
        <input type="checkbox" checked={props.completed} onChange={fun(props)}
          />
       <p>{props.item}</p>
     </div>);
}
export default TodoItem;