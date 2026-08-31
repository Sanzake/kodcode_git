import { create } from "zustand";


type CartItem = {
    id: number
    name: string
    qty: number
}

interface CartStore {
    items: { id: number; name: string; qty: number }[];
    add: (item: CartItem) => void;
    remove: (id: number) => void;
    total: () => number;
}

export const cartStore = create<CartStore>((set, get) => ({
    items: [],
    add: (item: CartItem) => 
        set((s) => ({
            items: [...s.items, item]
        })),

    remove: (id: number) => 
        set((s) => ({
            items: s.items.filter((item) => item.id !== id)
        })),

    total: () => get().items.length

}))
