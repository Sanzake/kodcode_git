import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T>()

    useEffect(() => {
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
            console.error("Error!!!", error)
        })
     }, [url])   
     return data
}