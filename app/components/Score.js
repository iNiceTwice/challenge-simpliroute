"use client"
import { useContext } from "react";
import { GameContext } from "@/context/gameContext";

const Score = () => {

    const { state, resetGame } = useContext(GameContext)

    const handleClick = () => {
        resetGame()
    }

    return ( 
        <div className="flex z-20 justify-center items-center fixed top-0 left-0 h-screen w-screen bg-slate-800/50">
            <div className="bg-white p-8 flex flex-col rounded text-center font-medium gap-2">
                <h2>Game Over</h2>
                <h2>Pink birds: { state.pinkBirdPoints } - Blue birds: { state.blueBirdPoints } </h2>
                <button className="bg-green-300 py-2 mt-4" onClick={handleClick}>Try again</button>
            </div>
        </div>
     );
}
 
export default Score;