"use client"
import { useContext, useState, useEffect } from "react";
import { GameContext } from "@/context/gameContext";
import Score from './Score'

const Timer = () => {
    const { setGameOver, state } = useContext(GameContext)
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if(seconds <= 0){
            setGameOver()
            setSeconds(60)
        }
        else if (seconds > 0 && state.gameover == false) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        }

    }, [seconds]);

    return ( 
        <article className="flex flex-col w-full text-center p-10 text-2xl font-bold font-serif gap-y-4">
            {
                state.gameover &&
                <Score/>
            }
            <h3>Tiempo restante:</h3>
            {
                seconds > 10 ?
                <h3>{ seconds }</h3>
                :
                <h3 className="text-red-500">{ seconds }</h3>
            }
        </article>
     );
}
 
export default Timer;