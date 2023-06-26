"use client"
import { useState } from "react"
import { GameContext } from "./gameContext"


const initialState = { 
    blueBirdPoints:0,
    pinkBirdPoints:0,
}

export const GameProvider = ({children}) => {
    const [ state, setState ] = useState(initialState)
    
    const incrementBluePoints = () => {
        setState( state => ({...state, blueBirdPoints:state.blueBirdPoints +1}))
    }

    const incrementPinkPoints = () => {
        setState( state => ({...state, pinkBirdPoints:state.pinkBirdPoints +1}))
    }

    return (
        <GameContext.Provider
            value={{
                state,
                setState,
                incrementBluePoints,
                incrementPinkPoints
            }}
        >
            { children }
        </GameContext.Provider>
    )
}