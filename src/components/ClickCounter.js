import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

class ClickCounter extends Component {
   
    render() {
        const {count, incrementHandler} = this.props
        return (
            <div>
                <button onClick={incrementHandler}>  Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter,5)
