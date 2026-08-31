import { useEffect, useState } from "react";
import type { Movie } from "../../config/config.js";
import AddItemForm from "../AddItemForm/AddItemForm.js";
import "./MoviesPage.css"

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

  const filteredMovies = movies.filter(movie => movie.title.startsWith(props.searchInput))

  useEffect(() => {
    localStorage.setItem("myMovies", JSON.stringify(movies))
  }, [movies])

  return (
    <div>
      <h1 className="moviesPage">Your movies ({movies.length})</h1>
      <AddItemForm
        add={(newMovie) => setBooks((prev) => [...prev, newMovie as Movie])}
        type="movie"
      />

      {filteredMovies.length > 0 ? 
      <ul>
        {filteredMovies
        .map((movie) => (
          <li key={movie.id} style={{ color: "white" }}>
            {`${movie.director} - ${movie.title} - ${movie.durationMinutes} minutes`}
            {movie.id === localStorage.getItem("latestMovieId") && ` - latest`}
          </li>
        ))}
      </ul> : <p style={{color:"white"}}>There is no movies!</p>}
      
    </div>
  );
}
