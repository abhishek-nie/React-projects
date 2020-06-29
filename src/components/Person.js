import React from 'react'
// person is same as props and destructing the person
function Person({person}) {
    return (
        <div>
          <h2> i am {person.name}  and i know {person.skill}</h2>  
        </div>
    )
}

export default Person
