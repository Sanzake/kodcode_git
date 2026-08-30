import { useState } from "react";
import BooksPage from "../BooksPage/BooksPage";
import MoviesPage from "../MoviesPage/MoviesPage";
import Tabs from "../Tabs/Tabs";
import "./Pages.css"
import Search from "../Search/Search";

export default function Pages() {
    const [activePage, setActivePage] = useState<string>("Movies")

    const changePage = (pageName: string): void => {
        setActivePage(pageName)
    }

	const [searchInput, setSearchInput] = useState<string>("")
	const changeSearchInput = (searchInputFromInput: string) => {
		setSearchInput(searchInputFromInput)
	}

	return (
		<div className="pages">
			<Tabs selected={activePage} select={changePage}/>
			<Search setSearchInput={changeSearchInput}/>
			{activePage === "Movies" && <MoviesPage searchInput={searchInput}/>}
			{activePage === "Books" && <BooksPage searchInput={searchInput}/>}
		</div>
	);
}
