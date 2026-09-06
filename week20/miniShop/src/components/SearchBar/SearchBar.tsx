import type React from "react";
import "./SearchBar.css"
import { useEffect, useRef } from "react";

interface SearchBarProps {
    setSearchWord: (word: string) => void
}

export default function SearchBar({setSearchWord}: SearchBarProps) {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value)
    }
    
    const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

    return (
        <input className="searchBar" ref={inputRef} type="text" placeholder="search" onChange={handleSearch}/>
    )
}
