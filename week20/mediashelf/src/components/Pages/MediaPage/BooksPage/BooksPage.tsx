import { renderDetails } from "../../../../utils/utils";
import MediaPage from "../MediaPage";

export function BooksPage({ searchInput }: { searchInput: string }) {
	return (
		<MediaPage
			searchInput={searchInput}
			pageTitle="Your books"
			type="book"
			storageKey="myBooks"
			latestKey="latestBookId"
			renderDetails={renderDetails}
		/>
	);
}
