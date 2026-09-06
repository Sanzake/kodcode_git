import { useState } from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";
import "./HomePage.css";

export default function HomePage() {
	const products: Product[] = useFetch("https://fakestoreapi.com/products");

	const [searchWord, setSearchWord] = useState("");

	const filteredProducts = products.filter((product: Product) => 
		product.title.toLowerCase().startsWith(searchWord.toLowerCase())
	)

	console.log(products);
	
	return (
		<div className="homePage">
			<h1 className="title">Products</h1>
			<SearchBar setSearchWord={setSearchWord}/>
			{filteredProducts?.map((p: Product) => (
				<Link key={p.id} to={`/products/${p.id}`}>
					<ProductCard product={p} />
				</Link>
			))}
		</div>
	);
}
