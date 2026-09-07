import { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import ThemeСontext from "../../context/themeContext";
import FavoritesPage from "../../pages/FavoritesPage";
import HomePage from "../../pages/HomePage";
import ProductDetailPage from "../../pages/ProductDetailPage";
import Layout from "../Layout/Layout";
import "./App.css"

function App() {
	const themeContextValue = useContext(ThemeСontext);
	const [theme, setTheme] = useState<string>(themeContextValue.theme);
	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
	
	return (
		<div>
			<ThemeСontext value={{theme, toggleTheme}}>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/favorites" element={<FavoritesPage />}></Route>
						<Route path="/products/:id" element={<ProductDetailPage />}></Route>
					</Route>
				</Routes>
			</ThemeСontext>
		</div>
	);
}

export default App;
