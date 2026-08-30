import React, { useEffect, useState } from "react";
import type { Movie } from "../../config/config.js";
import AddItemForm from "../AddItemForm/AddItemForm.js";

export default function MoviesPage() {
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
      <h1 style={{ color: "white" }}>Movie page</h1>
      <AddItemForm add={(newMovie) => setBooks((prev) => [...prev, newMovie as Movie])} type="movie" />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ color: "white" }}>
            {`${movie.director} - ${movie.title}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
