import { useEffect, useState } from "react";

export default function useFetch<T>(url: string | null) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!url) {
            setData(null);
            setError(null);
            setLoading(false);
            return; 
        }
        setError(null)
        setLoading(true)

        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error!!! response.ok - ${res.ok}`)
            }
            return res.json()
        })
        .then(result => {
            setData(result)
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
     }, [url])   
     return {data, error, loading}
}