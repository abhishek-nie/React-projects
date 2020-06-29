import React ,{useState} from 'react'

function HookUseState() {
    const [count ,seCount] = useState(0)
    return (
        <div>
            <button onClick={()=> seCount(count +1 )}>click {count} time</button>
        </div>
    )
}

export default HookUseState
