import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
         console.log('LifeCycle A constructor')
         this.state = {
              userName : ''
         }
     }
     static getDerivedStateFromProps(props, state){
        console.log('LifeCycle A getDerivedStateFromProps')
        return null
     }
     componentDidMount(){
        console.log('LifeCycle A ComponentDidMount')
     }
    render() {
        console.log('LifeCycle A Render')
        return (
          
            <div>
                 <h2>Hello Abhishek </h2>
                 <LifeCycleB />
            </div>
           
        )
    }
}

export default LifeCycleA
