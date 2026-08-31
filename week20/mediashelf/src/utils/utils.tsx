import type { Book, Movie } from "../config/config";


export const renderDetails = (item: Book | Movie): string => {
	if ("durationMinutes" in item) {
		return `${item.director} - ${item.title} - ${item.durationMinutes} pages`;
	}
	return `${item.author} - ${item.title} - ${item.pages} pages`;
};

