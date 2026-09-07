import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setError(null)
        setLoading(true)

        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error!!! ${res}`)
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