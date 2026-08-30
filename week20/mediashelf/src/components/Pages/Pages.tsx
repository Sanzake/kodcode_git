import React, { useState } from "react";
import BooksPage from "../BooksPage/BooksPage";
import MoviesPage from "../MoviesPage/MoviesPage";
import Tabs from "../Tabs/Tabs";
import "./Pages.css"

export default function Pages() {
    const [activePage, setActivePage] = useState<string>("Movies")

    const changePage = (pageName: string): void => {
        setActivePage(pageName)
    }

	return (
		<div className="pages">
			<Tabs selected={activePage} select={changePage}/>
			{activePage === "Movies" && <MoviesPage />}
			{activePage === "Books" && <BooksPage />}
		</div>
	);
}
