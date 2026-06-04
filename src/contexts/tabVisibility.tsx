import { create } from 'zustand'

type TabStore = {
  hidden: boolean
  setHidden: (hidden: boolean) => void
}

export const useTabStore = create<TabStore>((set) => ({
  hidden: false,
  setHidden: (hidden) => set({ hidden }),
}))