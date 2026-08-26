import React from "react";
import Menu from "./Menu/Menu.tsx";
import Search from "./Search/Search.tsx";

export default function Header() {
	return (
        <div style={{display: "flex"}}>
            <Menu />
            <Search />
        </div>
	);
}
