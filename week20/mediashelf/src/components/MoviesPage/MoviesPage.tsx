import { useEffect, useState } from "react";
import type { Movie } from "../../config/config.js";
import AddItemForm from "../AddItemForm/AddItemForm.js";

interface MoviesPageProps {
	searchInput: string
}

export default function MoviesPage(props: MoviesPageProps) {
  const [movies, setBooks] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem("myMovies")

    if (savedMovies) {
      try {
        return JSON.parse(savedMovies)
      } catch(error) {
        console.log(error)
      }
    }
    return []
  });

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(movies))
  }, [movies])

  return (
    <div>
      <h1 style={{ color: "white" }}>Your movies</h1>
      <AddItemForm
        add={(newMovie) => setBooks((prev) => [...prev, newMovie as Movie])}
        type="movie"
      />
      <ul>
        {movies
        .filter(movie => movie.title.startsWith(props.searchInput))
        .map((movie) => (
          <li key={movie.id} style={{ color: "white" }}>
            {`${movie.director} - ${movie.title}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
