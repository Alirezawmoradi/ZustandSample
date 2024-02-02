import {create} from "zustand";

type CounterStore = {
    count: number;
    color: string;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    incrementByValue: () => void;
    decrementByValue: () => void;
    incrementAsync: () => Promise<void>;
    decrementAsync: () => Promise<void>;
    colorChange: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    color: 'white',
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    },
    reset: () => {
        set((state) => ({count: state.count = 0}))
    },
    incrementByValue: () => {
        set((state) => ({count: state.count + 10}))
    },
    decrementByValue: () => {
        set((state) => ({count: state.count - 10}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve
                set((state) => ({count: state.count + 50}))
            }, 3000)
        })
    },
    decrementAsync: async () => {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve
                set((state) => ({count: state.count - 50}))
            }, 3000)
        })
    },
    colorChange: () => {
        set((state) => ({color: state.color = 'red'}))
    }
}))