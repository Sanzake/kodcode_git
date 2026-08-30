import React from "react";

interface SearchProps {
	setSearchInput: (param: string) => void;
}
export default function Search(props: SearchProps) {
    const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchInput(e.target.value)
    }
	return (
		<input type="text" placeholder="search" onChange={changeSearchInput} />
	);
}
