import { useEffect, useState } from "react";
import AddItemForm from "../../AddItemForm/AddItemForm.js";
import FinishItem from "../../FinishItem/FinishItem.js";
import "./MediaPage.css";
import type { Book, Movie } from "../../../config/config.js";
import DeleteItem from "../../DeleteItem/DeleteItem.js";

interface MediaPageProps {
	pageTitle: string;
	searchInput: string;
	storageKey: string;
	latestKey: string;
	type: "book" | "movie";
	renderDetails: (item: Book | Movie) => string;
}

export default function MediaPage(props: MediaPageProps) {
	const [items, setItems] = useState<Array<Movie | Book>>(() => {
		const savedMedia = localStorage.getItem(props.storageKey);

		return savedMedia ? JSON.parse(savedMedia) : [];
	});

	const filteredItems = items.filter((item) =>
		item.title.toLowerCase().startsWith(props.searchInput.toLowerCase()),
	);

	const handleToggle = (itemId: string, isFinished: boolean) => {
		setItems((prev) =>
			prev.map((item) =>
				item.id === itemId ? { ...item, finished: isFinished } : item,
			),
		);
	};

	const handleDeleteItem = (itemId: string) => {
		const isConfirmed = window.confirm(`Are u shurely want to delete "${items.find((item) => item.id === itemId)?.title}"`)
		isConfirmed && setItems((prev) => prev.filter((item) => itemId !== item.id))

	}

	useEffect(() => {
		localStorage.setItem(props.storageKey, JSON.stringify(items));
	}, [items, props.storageKey]);

	return (
		<div>
			<h1 style={{ color: "white", textAlign: "center" }}>
				{props.pageTitle} - ({items.length})
			</h1>

			<AddItemForm
				add={(newItem) => setItems((prev) => [...prev, newItem as Book | Movie])}
				type={props.type}
			/>

			{filteredItems.length > 0 ? (
				<ul>
					{filteredItems.map((item) => (
						<li key={item.id} style={{ color: "white", display: "flex" }}>
							{props.renderDetails(item)}
							{localStorage.getItem(props.latestKey) === item.id && ` - latest`}
							<FinishItem item={item} onToggle={handleToggle} />
							<DeleteItem itemId={item.id} delete={handleDeleteItem}/>
						</li>
					))}
				</ul>
			) : (
				<p style={{ color: "white" }}>There is no {props.type}!</p>
			)}
		</div>
	);
}
