import React ,{useState,useEffect} from 'react'

function HookUseEffectWithCondition() {
    const [count ,seCount] = useState(0)
    const [name ,setName] = useState('')
    useEffect(() => {
        console.log('document updated')
        document.title = `clicked ${count}  times`
    }, [count])

    return (
        <div>   
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=> seCount(count +1 )}>click {count} time</button>
        </div>
    )
}

export default HookUseEffectWithCondition
