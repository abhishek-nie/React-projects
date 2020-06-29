import React from 'react'
// shows how to call a method of parent component from child component. pass the refrence as a props
function ChildComponent(props) {
    // using arrow function because ot helps to pass paramater to parent component
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick = {() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
