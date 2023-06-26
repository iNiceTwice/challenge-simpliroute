"use client"
import { useContext } from "react";
import { GameContext } from "@/context/gameContext";

const Counter = () => {

    const { state } = useContext(GameContext)

    return ( 
        <article className="flex justify-center items-center w-full mt-12 gap-x-16 md:gap-x-60">
            <div className="flex flex-col items-center gap-2 text-2xl font-bold font-serif">
                <h3>Aves Rosas</h3>
                <h3>{ state.pinkBirdPoints }</h3>
            </div>
            <div className="flex flex-col items-center gap-2 text-2xl font-bold font-serif">
                <h3>Aves Azules</h3>
                <h3>{ state.blueBirdPoints }</h3>
            </div>
        </article>
     );
}
 
export default Counter;