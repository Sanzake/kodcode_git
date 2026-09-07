import { Link } from "react-router";
import { favoriteStore } from "../../store/favoriteStore";
import type { Product } from "../../types/product";
import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    const toggleFavorite = favoriteStore((s) => s.toggleFavorite)
    const isFavorite = favoriteStore((s) => s.favorites.some((p) => p.id === product.id))

    return (
        <div className="card">
            <Link className="card-lines" to={`/products/${product.id}`}>
                <img src={product.image} alt="" className="poster"/>
                <p className="product-title">{product.title}</p>
                <p className="product-price">${product.price}</p>
            </Link>
            <button type="button" className="add-button" onClick={() => toggleFavorite(product)}>{isFavorite ? "❤️" : "🤍"}</button>
        </div>
    )
}
