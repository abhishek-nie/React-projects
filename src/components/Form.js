import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             userName :'',
             comments : '',
             topic :'React'
         }
     }
     handleUserName = (event) => {
         this.setState({
             userName : event.target.value
         })
     }
     handleComments = (event) => {
         this.setState({
             comments : event.target.value
         })
     }
     handleTopic = (event) =>{
      this.setState({
        topic: event.target.value
      })
     }
     
    render() {
        return (
            <form>
            <div>
                <label>User Name</label>
                <input type="text" value={this.state.userName} onChange = {this.handleUserName}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.setState.comments} onChane={this.handleComments} ></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option>React</option>
                    <option>Vue</option>
                    <option>Angular</option>
                </select>
            </div>
            </form>
        )
    }
}

export default Form
