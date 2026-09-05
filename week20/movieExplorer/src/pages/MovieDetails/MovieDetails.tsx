import { useParams } from "react-router"
import "./MovieDetails.css"
import useFetch from "../../hooks/useFetch"

const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w1920/";

const BASE_LINK = "https://api.themoviedb.org/3";
const API_KEY = "090a7f50cb7988b02761cec47b1e4b06";

export default function MovieDetails() {
  const params = useParams()
  const movieId = Number(params.id)
  const API_LINK = `${BASE_LINK}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos`;
  
  const data = useFetch(API_LINK)

  return (
    <div>
      {data && 
        <div style={{backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.6), rgba(100, 100, 100, 0.6)), url(${MOVIE_IMG_URL}${data.backdrop_path})`}}>
          <img src={MOVIE_IMG_URL + data.poster_path} alt="" className="movieDetailPoster"/>
          <h1>{data.title}</h1>
          <h3>{data.release_date}</h3>
          <h3>{data.vote_average}</h3>
          <h3>{data.overview}</h3>
          <h3>{data.credits?.crew?.find(person => person.job === "Director")?.name}</h3>
        </div>
      }
      {!data && <p>Movie not found!!!</p>}
    </div>


  )
}
