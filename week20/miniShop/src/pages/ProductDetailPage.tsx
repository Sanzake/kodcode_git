import { useNavigate, useParams } from "react-router";
import useFetchSingleProduct from "../hooks/useFetchSingleProduct";
import "./ProductDetailPage.css"
import { favoriteStore } from "../store/favoriteStore";

const PRODUCT_URL = "https://fakestoreapi.com/products/";

export default function ProductDetailPage() {
	const params = useParams();
	const currentProduct = useFetchSingleProduct(
		PRODUCT_URL + params.id,
	); 
    const navigate = useNavigate()
    const toggleFavorite = favoriteStore((s) => s.toggleFavorite)
    const isFavorite = favoriteStore((s) => s.favorites.some((p) => p.id === Number(params.id)))
    
    if (!currentProduct) return <div>Loading...</div>
    
    
	return (
		<div>
			<h1 className="title">Product details</h1>

			<div className="detailedCard">
				<img src={currentProduct.image} alt="" className="imgTag"/>
                <div className="info">
                    <p className="titleTag">{currentProduct.title}</p>
                    <p>🏷️ {currentProduct.category}</p>
                    <p className="priceTag">$ {currentProduct.price}</p>
                    <p className="descriptionTag">{currentProduct.description}</p>

                    <button className="button-add-favorite" type="button" onClick={() => toggleFavorite(currentProduct)}>{isFavorite ? "❤️" : "🤍"}</button>
                    <button className="button-back" type="button" onClick={() => navigate(-1)}>Back</button>
                </div>
			</div>
		</div>
	);
}
