import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
         console.log('LifeCycle B constructor')
         this.state = {
              userName : ''
         }
     }
     static getDerivedStateFromProps(props, state){
        console.log('LifeCycle B getDerivedStateFromProps')
        return null
     }
     componentDidMount(){
        console.log('LifeCycle B ComponentDidMount')
     }
    render() {
        console.log('LifeCycle B Render')
        return (
          
            <div>
                 <h2>Hello Abhishek </h2>
                 
            </div>
        )
    }
}

export default LifeCycleB
