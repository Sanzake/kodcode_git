import { useEffect, useState } from "react";
import type { Book } from "../../config/config.js";
import AddItemForm from "../AddItemForm/AddItemForm.js";

interface BooksPageProps {
	searchInput: string
}

export default function BooksPage(props: BooksPageProps) {
	const [books, setBooks] = useState<Book[]>(() => {
		const savedBooks = localStorage.getItem("myBooks");

		if (savedBooks) {
			try {
				return JSON.parse(savedBooks);
			} catch (error) {
				console.error(error);
			}
		}
		return [];
	});

	useEffect(() => {
		localStorage.setItem("myBooks", JSON.stringify(books));
	}, [books]);

	return (
		<div>
			<h1 style={{ color: "white" }}>Your books</h1>
			<AddItemForm
				add={(newBook) => setBooks((prev) => [...prev, newBook as Book])}
				type="book"
			/>
			<ul>
				{books
				.filter(book => book.title.startsWith(props.searchInput))
				.map((book) => (
					<li key={book.id} style={{ color: "white" }}>
						{`${book.author} - ${book.title}`}
					</li>
				))}
			</ul>
		</div>
	);
}
