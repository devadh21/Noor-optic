import { create } from 'zustand'

type changeDirectionStore = {
  isRTL: boolean
  setIsRTL: (isRTL: boolean) => void
}

export const useChangeDirectionStore = create<changeDirectionStore>((set) => ({
  isRTL: true,
  setIsRTL: (isRTL) => set({ isRTL }),
}))