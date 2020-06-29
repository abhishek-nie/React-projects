import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: false
        }
    }
// dont add if else statement in jsx means inside div because jsx is just for function call and object creation
    render() {
        // element variable approach
        // let message
        // if (this.state.isLogged) {
        //     message =    <div>Hello ABhishek</div>
        // }
        // else {
        //         message=   <div>Helo Soni</div>
        // }
        // return(
        // <div>{message}</div>
        // )

        // other approach using ternary operator
        return (
            this.state.isLogged ?  <div>Hello ABhishek</div>:
                                    <div>Helo Soni</div>
        )

        // normal conditional approach
        // if (this.state.isLogged) {
        //     return (
        //         <div>Hello ABhishek</div>
        //     )
        // }
        // else {
        //     return (
        //         <div>Helo Soni</div>
        //     )
        // }
    }
}

export default UserGreeting
