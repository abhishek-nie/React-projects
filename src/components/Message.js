import React , {Component} from 'react'

// explains click event in class component and change the state
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }
    onChangeMessage (){
        this.setState({
            message : 'Thanks for subscribing'
        })
    }
    render() {
    return (
        <div><h1>{this.state.message}</h1>
        <button onClick ={() => this.onChangeMessage()}>Subscribe</button>
        </div>
    )
    }
}

export default Message