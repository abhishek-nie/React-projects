import React,{useContext} from 'react'
import {CountContext} from '../App'

function UseReducerWithContextD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            compoent D - {countContext.countVaule}
            
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default UseReducerWithContextD
