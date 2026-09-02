import { Route, Routes } from "react-router";
import "./App.css";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import MovieDetails from "../../pages/MovieDetails";
import Movies from "../../pages/Movies";
import Layout from "../Layout/Layout";

function App() {
	return (
		<div>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:id" element={<MovieDetails />} />
					<Route path="/favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
