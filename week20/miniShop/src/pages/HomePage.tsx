import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import type { Product } from "../types/product";
import "./HomePage.css";
import { PRODUCT_URL } from "../config";
import useFetch from "../hooks/useFetch";

export default function HomePage() {
	const { data: products, error, loading } = useFetch<Product[]>(PRODUCT_URL);
	const [searchWord, setSearchWord] = useState("");

	useEffect(() => {
		if (products) {
			localStorage.setItem("products", JSON.stringify(products));
		}
	}, [products]);
	
	const filteredProducts = useMemo(() => {
		return (products ?? []).filter((product: Product) =>
			product.title.toLowerCase().includes(searchWord.toLowerCase()),
		);
	}, [products, searchWord])
	
	if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;


	return (
		<div className="homePage">
			<SearchBar setSearchWord={setSearchWord} />

			{filteredProducts.map((p: Product) => (
				<div key={p.id}>
					<ProductCard product={p} />
				</div>
			))}

			{filteredProducts.length === 0 && <p>No results</p>}
		</div>
	);
}
