import { useEffect, useState } from "react"

export type Movie = {
    id: number
    title: string
    release_date: string
    poster_path: string
    vote_average: number
    backdrop_path: string
    overview: string
}

export default function useFetch(url: string | null) {
    const [data, setData] = useState<any>(null)
    
    useEffect(() => {
        if (url === null) return

        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error!!!${res.status}`);
            }
            return res.json()
        })
        .then(data => {
            const finalData = data.results ? data.results : data
            setData(finalData)
        })
        .catch(err => {
            console.error("fetch error!!!", err)
            setData(null)
        })
        }, [url])

    

    useEffect(() => {
        if (data) {
            localStorage.setItem("movies", JSON.stringify(data))
        }
    }, [data])
    
    return data
}
