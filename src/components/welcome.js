import React , {Component} from 'react'

//Basic example of class component
class Welcome extends Component {
    render() {
    return <h1>Welcome Abhishek {this.props.name}</h1>
    }
}

export default Welcome