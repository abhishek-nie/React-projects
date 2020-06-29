import React from 'react'



const Hello = (props) => {
    //Destructuring concept :: we can below code
    //const {name, heroName} = props, now we can directly use name and heroName in place of
    //props.name and props.heroName
    return (
        <div>
             <h1>Hello {props.name} == {props.heroName}</h1>
             {props.children}
        </div>
       

    )
}

export default Hello