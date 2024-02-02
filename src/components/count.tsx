import {useCounterStore} from "../zustand/store.tsx";
import {useEffect} from "react";

const logCount = () => {
    const count = useCounterStore.getState().count;
    console.log('count', count)
};
const setCount = () => {
    useCounterStore.setState({count: 1})
}

const setColor = () => {
    useCounterStore.setState({color: 'red'})
}
const resetColor = () => {
    useCounterStore.setState({color: ''})
}

export const Count = ({count}: { count: number }) => {
    const increment = useCounterStore((state) => state.increment);
    const decrement = useCounterStore((state) => state.decrement);
    const reset = useCounterStore((state) => state.reset);
    const incrementByValue = useCounterStore((state) => state.incrementByValue);
    const decrementByValue = useCounterStore((state) => state.decrementByValue);
    const incrementAsync = useCounterStore((state) => state.incrementAsync);
    const decrementAsync = useCounterStore((state) => state.decrementAsync);
    const color = useCounterStore((state) => state.color);

    useEffect(() => {
        logCount();
    }, []);

    useEffect(() => {
        setCount();
    }, []);

    useEffect(() => {
        count == 10 ? setColor() : resetColor();
    }, [count]);

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            {count}
            <div style={{marginTop: "50px", display: "flex", gap: "20px"}}>
                <button style={{color: color}} onClick={increment}>Increment</button>
                <button style={{color: color}} onClick={decrement}>Decrement</button>
                <button style={{color: color}} onClick={reset}>Reset</button>
                <button style={{color: color}} onClick={incrementByValue}>Increment +10</button>
                <button style={{color: color}} onClick={decrementByValue}>Decrement -10</button>
                <button style={{color: color}} onClick={incrementAsync}>IncrementAsync +50</button>
                <button style={{color: color}} onClick={decrementAsync}>DecrementAsync -50</button>
            </div>
        </div>
    )
}