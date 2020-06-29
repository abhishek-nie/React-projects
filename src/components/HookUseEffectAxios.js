import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HookUseEffectAxios() {
    const [posts,setPost] = useState('')
    const [id,setId] = useState(1)
    const [inputIdOnButtonClick, setInputIdOnButtonClick] = useState(1)
  const handleClick =()=>{
        setInputIdOnButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${inputIdOnButtonClick}`)
        .then(res =>{
            setPost(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[inputIdOnButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Pots</button>
    <h1>{posts.title}</h1>
        </div>
    )
}

export default HookUseEffectAxios
