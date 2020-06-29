import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const intialState ={
    loading : true,
    error :'',
    post : {}
}
const reducer =(state,action)=>{
    switch(action.type) {
        case 'Fetch_success':
            return {
                loading:false,
                error: '',
                post : action.payload
            }
        case 'Fetch_Error':
            return {
                loading: false,
                post :{},
                error: 'Something went wrong'
            }
    }
}

function UseReducerDateFetch() {
    const [state, dispatch]=useReducer(reducer, intialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            dispatch({type:'Fetch_success', payload:res.data })
        }).catch((error)=>{
            dispatch({type:'Fetch_Error'})
        })
    },[])
    return (
        <div>
        
                {state.loading ? 'Loading': state.post.title}
                {state.error ? state.error :null}
        
        </div>
    )
}

export default UseReducerDateFetch
