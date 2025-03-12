import { createStore } from "zustand"

export type CounterState = {
      counter : number
}

export type CounterActions = {
      decrementCount : () => void
      incrementCount : () => void 
}

export type CounterStore = CounterState & CounterActions

export const defaultInitState:CounterState = {
      counter  : 0
}

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    decrementCount: () => set((state) => ({ counter: state.counter - 1 })),
    incrementCount: () => set((state) => ({ counter: state.counter + 1 })),
  }))
}