import React from 'react'

function Hero({Hero}) {
    if (Hero === "Joker"){
        throw new Error("Not a hero")
    }
    return (
        <div>
            {Hero}
        </div>
    )
}

export default Hero
