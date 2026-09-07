import { Link } from "react-router";
import { favoriteStore } from "../../store/favoriteStore";
import type { Product } from "../../types/product";
import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    const toggleFavorite = favoriteStore((s) => s.toggleFavorite)
    const favorites = favoriteStore((s) => s.favorites)
    const isFavorite = favorites.some((p) => p.id === product.id)

    return (
        <div className="card">
            <Link className="cardLines" to={`/products/${product.id}`}>
                <img src={product.image} alt="" className="poster"/>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </Link>
            <button type="button" onClick={() => toggleFavorite(product)}>{isFavorite ? "❤️" : "♡"}</button>
        </div>
    )
}
