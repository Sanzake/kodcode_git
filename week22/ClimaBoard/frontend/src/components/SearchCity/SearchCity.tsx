import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch'
import type { City } from '../../types/City';
import SearchingCityCard from './SearchingCityCard/SearchingCityCard';

export default function SearchCity() {
    const BASE_URL = "http://127.0.0.1:8000/"

    const [inputValue, setInputValue] = useState("")
    const [url, setUrl] = useState(`${BASE_URL}search-city?city_name=Jerusalem`)

    const handleURL = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputValue.length > 2) {
            setUrl(`${BASE_URL}search-city?city_name=${inputValue}`)
        }
    }

    const { data, error, loading } = useFetch<City[]>(url);

    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
    if (!data) return <>No data!!!</>

    return (
        <div>
            <form onSubmit={handleURL}>
                <input type="text" placeholder='search city' onChange={(e) => setInputValue(e.target.value)}/>
                <button type='submit'>search</button>
            </form>
            <ul>
                {data.map((c) => (
                    <div key={c.id}>{<SearchingCityCard city={c}/>}</div>
                ))}
            </ul>
        </div>

    )
}
