import React from 'react'
import Person from './Person'
function ListRederer() {
    // one approch to list render
    // const name = ['AK','Soni','Divya']
    // const nameList = name.map(name =><h2>{name}</h2>)
    // return (
    //     <div>
    //       {nameList}
    //     </div>
    // )

    //2nd approach, passing thr person as a prop to Person component
    // while defining a list, always define a key props and key should be unique
    // you can not  access key props in child component
    const persons = [{name :'AK', skill :'React'}, {name :'soni',skill:'Vue'}]
const personList = persons.map(person => <Person key={person.name} person={person}/>)
    return(
        <div>
           {personList}
        </div>
    )
}

export default ListRederer
