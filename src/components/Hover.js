import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

class Hover extends Component {
       render() {
        const {count, incrementHandler}= this.props
        return (
            <div>
               <h1 onMouseOver={incrementHandler}>hover {count} times the headings</h1> 
            </div>
        )
    }
}

export default UpdateComponent(Hover,10)
