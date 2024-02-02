import {useCounterStore} from "./zustand/store.tsx";
import {Count} from "./components/count.tsx";

function App() {
    const count = useCounterStore((state) => state.count);
    return (
        <Count count={count}/>
    )
}

export default App
