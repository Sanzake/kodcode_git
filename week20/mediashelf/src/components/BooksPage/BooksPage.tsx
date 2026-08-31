import { useEffect, useState } from "react";
import type { Book } from "../../config/config.js";
import AddItemForm from "../AddItemForm/AddItemForm.js";
import "./BooksPage.css"
import FinishItem from "../FinishItem/FinishItem.js";

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

	const filteredBooks = books.filter(book => book.title.startsWith(props.searchInput))

	useEffect(() => {
		localStorage.setItem("myBooks", JSON.stringify(books));
	}, [books]);

	const handleToggle = (bookId: string, isFinished: boolean) => {
		setBooks(prevBooks => prevBooks
			.map(book => book.id === bookId ? {...book, finished: isFinished} : book))
	}

	return (
		<div>
			<h1 className="booksPage">Your books ({books.length})</h1>
			<AddItemForm
				add={(newBook) => setBooks((prev) => [...prev, newBook as Book])}
				type="book"
			/>
			{ filteredBooks.length > 0 ?
			<ul>
				{filteredBooks
				.map((book) => (
					<li key={book.id} style={{ color: "white", display: "flex" }}>
						{`${book.author} - ${book.title} - ${book.pages} pages`}
						{localStorage.getItem("latestBookId") === book.id && ` - latest`}

						<FinishItem item={book} onToggle={handleToggle}/>
					</li>
				))}
			</ul> : <p style={{color:"white"}}>There is no books!</p>}
		</div>
	);
}
