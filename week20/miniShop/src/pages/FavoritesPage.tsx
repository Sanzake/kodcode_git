import ProductCard from '../components/ProductCard/ProductCard'
import { favoriteStore } from '../store/favoriteStore'
import type { Product } from '../types/product'
import "./FavoritesPage.css"

export default function FavoritesPage() {
    const products = favoriteStore((s) => s.favorites)

    return (
        <div className="favoritesPage">
            {products.map((p: Product) => (
                <div key={p.id}>
                    <ProductCard product={p} />
                </div>
                
            ))}
            {products.length === 0 && <p>No favorites yet!</p>}
        </div>
  )
}
