import { Link } from "react-router";
import { favoriteStore } from "../../store/favoriteStore";
import type { Product } from "../../types/product";
import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    const addFavorite = favoriteStore((s) => s.addFavorite)


    return (
        <div className="card">
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt="" className="poster"/>
                <p>{product.title}</p>
                <p>${product.price}</p>
            </Link>
            <button type="button" onClick={() => addFavorite(product.id)}>add to favorite</button>
        </div>
    )
}
