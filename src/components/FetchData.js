import React, { Component } from 'react'
import axios from 'axios'

class FetchData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(results => {
          this.setState({
              posts: results.data
          })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        const {posts} = this.state
        return (
            <div>
            List of Posts {
                posts.length ? posts.map(post =><div key={post.id}>{post.title}</div>)
                : null
            }
            </div>
        )
    }
}

export default FetchData
