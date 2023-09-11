import React, { useCallback, useState } from "react"

const Counter = () => {
    const [value, setValue] = useState<number>(0);

    const increement = useCallback(() => {
        setValue((prevValue) => {
            return prevValue + 1;
        });
    },[])

    const decrement = useCallback(() => {
        setValue((prevValue) => {
            if(prevValue == 0) return prevValue
            return prevValue - 1;
        });
    },[])

    return (
        <>
            <button onClick={increement}>+</button>
            <span>{value}</span>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter