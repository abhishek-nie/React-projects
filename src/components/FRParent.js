import React, { Component } from 'react'
import FRChild from './FRChild'
class FRParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
               <FRChild ref={this.inputRef}/> 
               <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParent
