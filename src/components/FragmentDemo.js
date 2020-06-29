import React from 'react'
// We can pas key in Fragment and fragements stops to add extra node to DOM
// in this case a extra div
function FragmentDemo() {
    return (
        <React.Fragment key="abhishek">
            <h1>Hello Abhishek</h1>
            <p>Welcome to React World</p>
        </React.Fragment>
    )
}

export default FragmentDemo
