import React,{useContext} from 'react'
import {CountContext} from '../App'

function UseReducerWithContextF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            component F - {countContext.countVaule}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default UseReducerWithContextF
