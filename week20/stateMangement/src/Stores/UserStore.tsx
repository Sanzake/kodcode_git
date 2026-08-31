import { create } from 'zustand'

type User = {
  username: string
  age: number
}

type UserStoreType= {
  user: User | null
  setUser: (newUser: User | null) => void
  counter: number
  increment: () => void
  decrement: () => void
}

export const userStore = create<UserStoreType>((set) => ({
  user: null,
  setUser: (newUser: User | null) => set({user: newUser}),
  counter: 0,
  increment: () => set((s) => ({counter: s.counter + 1})),
  decrement: () => set((s) => ({counter: s.counter - 1}))
  
}))