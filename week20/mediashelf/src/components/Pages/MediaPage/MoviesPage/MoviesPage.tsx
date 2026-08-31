import { renderDetails } from "../../../../utils/utils";
import MediaPage from "../MediaPage";

export function MoviesPage({ searchInput }: { searchInput: string }) {
	return (
		<MediaPage
			searchInput={searchInput}
			pageTitle="Your movies"
			type="movie"
			storageKey="myMovies"
			latestKey="latestMovieId"
			renderDetails={renderDetails}
		/>
	);
}
