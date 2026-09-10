import { create } from "zustand";


type CurrentUserStore = {
    currentUser: string
    setCurrentUser: (username: string) => void
}

export const useCurrentUserStore = create<CurrentUserStore>((set) => ({
    currentUser: "guest",
    setCurrentUser: (username: string) => set({currentUser: username})
})
)
