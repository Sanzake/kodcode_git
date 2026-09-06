import type { Product } from "../../types/product";
import "./ProductCard.css"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="card">
            <img src={product.image} alt="" className="poster"/>
            <p>{product.title}</p>
            <p>{product.price} $</p>
        </div>
    )
}
