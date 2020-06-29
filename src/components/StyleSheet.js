import React from 'react'
import './Style.css'
function StyleSheet(props) {
    let message  = props.primary ? 'primary' : ''
    return (
        <div>
           <h2 className={`${message} font-xl`}>Hello Abhihek</h2> 
        </div>
    )
}

export default StyleSheet
