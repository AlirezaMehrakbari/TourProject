import {create} from "zustand";

type Step = {
    step: number,
    nextStep: () => void,
    prevStep: () => void,
    resetStep: () => void
}
const useStep = create<Step>((set) => (
    {
        step: 0,
        nextStep: () => set((state) => ({step: state.step + 1})),
        prevStep: () => set((state) => ({step: state.step - 1})),
        resetStep: () => set({step: 0}),
    }
))

export default useStep