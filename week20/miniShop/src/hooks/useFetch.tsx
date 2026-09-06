import { useEffect, useState } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState([])

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
            localStorage.setItem("products", JSON.stringify(result))
        })
        .catch(error => {
            console.error("Error!!!", error)
        })
     }, [url])   
     return data
}