import React from "react";
import cl from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={cl.myBtn} {...props}>
            {children}
        </button>
    )
}

export {MyButton}