import React, { Component } from 'react'

class RPHover extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
               <h1 onMouseOver={incrementCount}>Hovered over {count} time</h1>  
            </div>
        )
    }
}

export default RPHover
