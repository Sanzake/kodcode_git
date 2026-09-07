import { useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import type { Product } from "../types/product";
import "./HomePage.css";
import useFetchProducts from "../hooks/useFetchProducts";

const PRODUCTS_URL = "https://fakestoreapi.com/products/"

export default function HomePage() {
	const products: Product[] = useFetchProducts(PRODUCTS_URL);
	localStorage.setItem("products", JSON.stringify(products))

	const [searchWord, setSearchWord] = useState("");

	const filteredProducts = products.filter((product: Product) => 
		product.title.toLowerCase().includes(searchWord.toLowerCase())
	)

	console.log(products);
	
	return (
		<div className="homePage">
			<SearchBar setSearchWord={setSearchWord}/>
			
			{filteredProducts.map((p: Product) => (
				<div key={p.id}>
					<ProductCard product={p} />
				</div>
			))}

			{filteredProducts.length === 0 && <p>No results</p>}
		</div>
	);
}
