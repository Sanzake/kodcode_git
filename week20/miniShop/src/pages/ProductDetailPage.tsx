import { useNavigate, useParams } from "react-router";
import "./ProductDetailPage.css";
import { PRODUCT_URL } from "../config";
import useFetch from "../hooks/useFetch";
import { favoriteStore } from "../store/favoriteStore";
import type { Product } from "../types/product";

export default function ProductDetailPage() {
	const params = useParams();
	const {
		data: currentProduct,
		error,
		loading,
	} = useFetch<Product>(PRODUCT_URL + params.id);

	const navigate = useNavigate();
	const toggleFavorite = favoriteStore((s) => s.toggleFavorite);
	const isFavorite = favoriteStore((s) =>
		s.favorites.some((p) => p.id === Number(params.id)),
	);

	if (error) return <p>{error}</p>;
	if (loading) return <div>Loading...</div>;
	if (!currentProduct) return;

	return (
		<div>
			<div className="detailedCard">
				<img src={currentProduct.image} alt="" className="imgTag" />
				<div className="info">
					<p className="titleTag">{currentProduct.title}</p>
					<p>🏷️ {currentProduct.category}</p>
					<p className="priceTag">$ {currentProduct.price}</p>
					<p className="descriptionTag">{currentProduct.description}</p>

					<button
						className="button-add-favorite"
						type="button"
						onClick={() => toggleFavorite(currentProduct)}
					>
						{isFavorite ? "❤️" : "🤍"}
					</button>
					<button
						className="button-back"
						type="button"
						onClick={() => navigate(-1)}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
}
