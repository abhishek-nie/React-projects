import React, { Component } from 'react'
//Explains the four approcahes to bind this 
// 1st one in direct binding in eventhandler
//2nd one is to use arrow function
//3rd is to bind this in constructor
// 4th is to define event as class property i.e define as arrow function

 class EventBinding extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message :'Hello World'
         }
         //3rd approach
         //this.clickHandler = this.clickHandler.bind(this)
     }
     //2nd approach
    //  clickHandler(){
    //      this.setState({
    //          message: 'Good Bye'
    //      })
    //  }
    //4th approach
    clickHandler = () =>{
        this.setState({
            message: 'Good Bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st approach */}
               {/* <button onClick= {this.clickHandler.bind(this)}>Click me</button>   */}
               
               {/* <button onClick= {() => this.clickHandler()}>Click me</button>  */}
               {/* <button onClick= {this.clickHandler}>Click me</button> */}
               <button onClick= {this.clickHandler}>Click me</button> 
            </div>
        )
    }
}

export default EventBinding
