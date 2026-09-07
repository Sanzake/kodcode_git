import { create } from "zustand";
import type { Product } from "../types/product";

type FavoriteStoreType = {
    favorites: Product[]
    toggleFavorite: (product: Product) => void
}

const rawData = localStorage.getItem("products")
const products = rawData ? JSON.parse(rawData) : []

export const favoriteStore = create<FavoriteStoreType>((set, get) => ({
    favorites: [],

    toggleFavorite: (product: Product) => {
        const isExist = get().favorites.some((p: Product) => p.id === product.id)

        if (isExist) {
            set((s) => ({
                favorites: s.favorites.filter((p: Product) => (p.id !== product.id))
        }))
            
        } else {
            const productToAdd = products?.find((p: Product) => p.id === product.id)
            set((s) => ({
                favorites: [...s.favorites, productToAdd]
            }))
      }
    }
}))