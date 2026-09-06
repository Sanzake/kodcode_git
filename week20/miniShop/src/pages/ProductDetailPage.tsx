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
    const addFavorite = favoriteStore((s) => s.addFavorite)
    

	return (
		<div>
			<h1 className="title">Product details</h1>

			<div className="detailedCard">
				<img src={currentProduct?.image} alt="" />
                <div className="info">
                    <p>{currentProduct?.title}</p>
                    <p>{currentProduct?.category}</p>
                    <p>{currentProduct?.description}</p>
                    <p>$ {currentProduct?.price}</p>
                    <div className="buttons">
                        <button type="button" onClick={() => addFavorite(Number(params.id))}>Add to favorite</button>
                        <button type="button" onClick={() => navigate("/")}>Back to products</button>
                    </div>
                </div>
			</div>
		</div>
	);
}
