import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = ({children, onclick}) => {
    return (
        <div onClick = {onclick} className= {classes.backdrop}>
            {children}
        </div>
    )
}

export default Backdrop
