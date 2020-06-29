import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import Memo from './Memo'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'ak'
         }
     }
     componentDidMount(){
       setInterval(() => {
        this.setState({
            name : 'ak'
        })
       },2000)
     }
    render() {
        console.log("Rendering Parent component")
        return (
            
            <div>
                Parent Component
                <Memo name={this.state.name}></Memo>
                {/* <RegularComp name={this.state.name}></RegularComp>
                <PureComp name= {this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
