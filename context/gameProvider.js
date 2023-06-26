"use client"
import { useState } from "react"
import { GameContext } from "./gameContext"


const initialState = { 
    blueBirdPoints:0,
    pinkBirdPoints:0,
    gameover:false,
}

export const GameProvider = ({children}) => {
    const [ state, setState ] = useState(initialState)
    
    const incrementBluePoints = () => {
        setState( prev => ({...prev, blueBirdPoints:prev.blueBirdPoints +1}))
    }

    const incrementPinkPoints = () => {
        setState( prev => ({...prev, pinkBirdPoints:prev.pinkBirdPoints +1}))
    }
    
    const setGameOver = () => {
        setState( prev => ({...prev, gameover:true}))
    }
    
    const resetGame = () => {
        setState(initialState)
    }

    return (
        <GameContext.Provider
            value={{
                state,
                setState,
                incrementBluePoints,
                incrementPinkPoints,
                setGameOver,
                resetGame
            }}
        >
            { children }
        </GameContext.Provider>
    )
}