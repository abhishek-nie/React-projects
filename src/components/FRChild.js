import React from 'react'

const FRChild = React.forwardRef((props, ref)=>{
return (
    <div>
        <input type="text" ref={ref}></input>
    </div>
)
})

export default FRChild
