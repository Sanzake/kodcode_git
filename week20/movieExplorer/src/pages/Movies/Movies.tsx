import { Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import MovieCard from "./MovieCard/MovieCard";
import "./Movies.css";

const BASE_LINK = "https://api.themoviedb.org/3";
const API_KEY = "090a7f50cb7988b02761cec47b1e4b06";
const ALL_MOVIES = "/discover/movie"
const API_LINK = `${BASE_LINK}${ALL_MOVIES}?api_key=${API_KEY}&page=5`;

export default function Movies() {
	const movies = useFetch(API_LINK);
	console.log(movies);
	return (
		<div>
			<h1 className="pageTitle">Movies</h1>
			<div className="movieList">
				{movies?.map((m) => (
					<Link key={m.id} to={`/movies/${m.id}`}>
						<MovieCard movie={m} />
					</Link>
				))}
			</div>
		</div>
	);
}
