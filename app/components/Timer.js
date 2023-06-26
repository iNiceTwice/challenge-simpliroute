"use client"
import { useState, useEffect } from "react";

const Timer = () => {

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]);

    return ( 
        <article className="flex flex-col w-full text-center p-10 text-2xl font-bold font-serif gap-y-4">
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