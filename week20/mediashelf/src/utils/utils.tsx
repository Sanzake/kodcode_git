import type { Book, Movie } from "../config/config";


export const renderDetails = (item: Book | Movie): string => {
	if ("durationMinutes" in item) {
		return `${item.title} - ${item.director} - ${item.durationMinutes} pages`;
	}
	return `${item.title} - ${item.author} - ${item.pages} pages`;
};

