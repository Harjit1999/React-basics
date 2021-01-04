import React from 'react';
import TodoItem from './TodoItem.js';
function Header()
{   
    return (<div className="todo-list">
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           <TodoItem/>
           

        </div>
    );
}

export default Header;