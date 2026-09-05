// import { create } from "zustand";
// import type { Movie } from "../../hooks/useFetch";
// import useFetch from "../../hooks/useFetch";

// interface MoviesStore {
//     movies: Movie[]
//     getMovies: () => Movie[]
// }

// const moviesStore = create<MoviesStore>((set, get) => ({
//     movies: useFetch("https://api.themoviedb.org/3/movie/popular?api_key=090a7f50cb7988b02761cec47b1e4b06"),

//     getMovies: () => get().movies

// }))

// export default moviesStore