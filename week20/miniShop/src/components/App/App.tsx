import { Route, Routes } from "react-router";
import FavoritesPage from "../../pages/FavoritesPage";
import HomePage from "../../pages/HomePage";
import Layout from "../Layout/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/favorites" element={<FavoritesPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
