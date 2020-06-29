import React, { Component } from 'react'


 class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    /*Below code explains that if we want to exceute any fucntion after the 
    asynchronus call of setState method then pass as callback in setState*/

    /*Increment(){
        this.setState(
            {
                count : this.state.count + 1
            },() => {console.log(this.state.count)}
        )
    }*/


    // if we want to use the previous state , pass as function to the argument 
    //to setState method instead of object
    Increment(){
        this.setState((prevState) =>({
            count : prevState.count + 1
        }))
    }
    // below code is just for example to explain prevState
    Increment5 (){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick ={() => this.Increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter
