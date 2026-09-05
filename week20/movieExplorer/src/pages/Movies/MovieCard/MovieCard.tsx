import type { Movie } from "../../../hooks/useFetch";
import "./MovieCard.css"

const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w440_and_h660_face";

interface MovieCardProps {
	movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
	return (
		<div className="movieCard">
			<img src={MOVIE_IMG_URL + movie.poster_path} alt="" className="poster"/>
			<h3 className="cardTitle">{movie.title}</h3>
			<p className="cardString">{movie.release_date}</p>
            <p className="cardString">{movie.vote_average}⭐</p>
		</div>
	);
}
