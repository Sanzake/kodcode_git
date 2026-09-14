import type React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import type { City } from "../../types/City";
import SearchingCityCard from "./SearchingCityCard/SearchingCityCard";

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
			<form onSubmit={handleURL}>
				<input
					type="text"
					placeholder="search city"
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type="submit">search</button>
			</form>
			<ul>
				{data.map((c) => (
					<button type="button" key={c.id} onClick={() => setCurrentCity(c)}>
						{<SearchingCityCard city={c} />}
					</button>
				))}
			</ul>
		</div>
	);
}
