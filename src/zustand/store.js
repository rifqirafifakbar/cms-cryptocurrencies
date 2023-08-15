import { create } from 'zustand'

export const useStore = create((set) => ({
    // initial state
    isColor: "blue",
}))