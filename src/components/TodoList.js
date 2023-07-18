import React from "react";
import { TodoItem } from "./TodoItem";


const TodoList = ({list, remove}) => {
    return (
        <div>
            {
                list.map(todo => 
                    <TodoItem remove={remove} key={todo.id} todoItem={todo}/>
                )
            }
        </div>
    )
}

export {TodoList}