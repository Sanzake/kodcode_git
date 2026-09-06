import { create } from "zustand";
import type { Product } from "../types/product";

type FavoriteStoreType = {
    favorites: Product[]
    addFavorite: (productId: number) => void
    removeFavorite: (productId: number) => void
}

const rawData = localStorage.getItem("products")
const products = JSON.parse(rawData)

export const favoriteStore = create<FavoriteStoreType>((set, get) => ({
    favorites: [],
    addFavorite: (productId: number) => {
        const idExistsInFavorites = get().favorites.some((p: Product) => p.id === productId)
        if (!idExistsInFavorites) {
            set((s) => ({
                favorites: [...s.favorites, products?.find((p: Product) => p.id === productId)]
            }))
        }
    },
    removeFavorite: (productId: number) => 
        set((s) => ({
            favorites: [...s.favorites.filter((product: Product) => (product.id !== productId))]
        }))
}))