import React, { useState } from "react";
import '../styles.css'
import { MyButton } from "../UI/Button/MyButton";


const TodoItem = (props) => {
    const [isChecked, setIsChecked] = useState(false)

    function handleChange() {
        setIsChecked(isChecked => !isChecked)
    }

    return (
        <div className='todoItem'>
            <div className="itemForm">
                <form>
                    <input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                </form>
                <p style={{textDecoration: isChecked ? 'line-through' : 'none'}}>{props.todoItem.title}</p>
            </div>
            <MyButton onClick={() => props.remove(props.todoItem)}>delete</MyButton>
        </div>
    )
}

export {TodoItem}