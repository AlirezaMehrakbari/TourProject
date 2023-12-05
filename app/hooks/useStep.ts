
import {create} from "zustand";

type Step = {
    step: number,
    nextStep: () => void,
    prevStep: () => void,
    resetStep: () => void,
    increase2Step : ()=>void
}
const useStep = create<Step>((set) => (
    {
        step: 0,
        nextStep: () => set((state) => ({step: state.step + 1})),
        increase2Step: () => set((state) => ({step: state.step + 2})),
        prevStep: () => set((state) => ({step: state.step - 1})),
        resetStep: () => set({step: 0}),
    }
))

export default useStep