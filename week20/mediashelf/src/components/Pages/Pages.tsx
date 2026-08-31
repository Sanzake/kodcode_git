import { useState } from "react";
import BooksPage from "../BooksPage/BooksPage";
import MoviesPage from "../MoviesPage/MoviesPage";
import "./Pages.css"
import Search from "../Search/Search";
import TabsManager from "../TabsManager/TabsManager";

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
			<TabsManager selected={activePage} select={changePage}/>
			<Search setSearchInput={changeSearchInput}/>
			{activePage === "Movies" && <MoviesPage searchInput={searchInput}/>}
			{activePage === "Books" && <BooksPage searchInput={searchInput}/>}
		</div>
	);
}
