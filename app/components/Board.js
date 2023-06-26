"use client"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { GameContext } from "@/context/gameContext";

const Board = () => {
    const fields = ["bird-house", "pink-bird", "blue-bird"];
    const { incrementBluePoints, incrementPinkPoints } = useContext(GameContext)
    const [board, setBoard] = useState([]);
    
    useEffect(() => {
        initializeBoard();
    }, []);


    const initializeBoard = () => {
        const initialBoard = Array(9).fill("bird-house");
        setBoard(initialBoard);
    };

    const handleClick = (index) => {

        if (board[index] === "pink-bird") {
            incrementPinkPoints()
        } else if (board[index] === "blue-bird") {
            incrementBluePoints()
        }

        changeRandomField(index);
    };

    
    const changeRandomField = (index) => {
        const newBoard = [...board];
        const randomFieldValue = Math.floor(Math.random() * board.length)
        newBoard[index] = "bird-house"
        newBoard[randomFieldValue] = fields[Math.floor(Math.random() * 2) + 1];
        setBoard(newBoard);
    };

    return ( 
        <article className="grid grid-cols-3 gap-2 items-center justify-center md:w-6/12">
            {
                board.map((field,index) => (
                    <button 
                        key={index} 
                        onClick={() => handleClick(index)}
                        className={`${field} bg-contain bg-center drop-shadow-lg w-[20vw] h-[20vh] md:w-[15vw] md:h-[15vh] cursor-pointer focus:scale-95`}
                    ></button>
                ))
            }

        </article>
     );
}
 
export default Board;