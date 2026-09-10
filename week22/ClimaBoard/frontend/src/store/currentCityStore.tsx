import { create } from "zustand";
import type { City } from "../types/City";


type CurrentCityStore = {
    currentCity: City | null
    setCurrentCity: (city: City) => void
}

export const useCurrentCityStore = create<CurrentCityStore>((set) => ({
    currentCity: null,
    setCurrentCity: (city: City) => set({currentCity: city})
})
)
