import type React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import type { City } from "../../types/City";
import SearchingCityCard from "./SearchingCityCard/SearchingCityCard";
import "./SearchCity.css"

interface SearchCityProps {
	setCurrentCity: (city: City) => void;
}

export default function SearchCity({ setCurrentCity }: SearchCityProps) {
	const BASE_URL = "http://127.0.0.1:8000/";

	const [inputValue, setInputValue] = useState("");
	const [url, setUrl] = useState(`${BASE_URL}search-city?city_name=Jerusalem`);

	const handleURL = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.length > 2) {
			setUrl(`${BASE_URL}search-city?city_name=${inputValue}`);
		}
	};

	const { data, error, loading } = useFetch<City[]>(url);

	if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
	if (!data) return <>No data!!!</>;

	return (
		<div>
			<form className="searchCityForm" onSubmit={handleURL}>
				<input
					className="searchCityInput"
					type="text"
					placeholder="City name..."
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="searchCityButton" type="submit">search</button>
			</form>
			<ul className="results">
				{data.map((c) => (
					<button className="searchResult" type="button" key={c.id} onClick={() => setCurrentCity(c)}>
						{<SearchingCityCard city={c} />}
					</button>
				))}
			</ul>
		</div>
	);
}
