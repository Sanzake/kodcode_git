import type { Product } from "../types/product";
import useFetch from "./useFetch";

export default function useFetchSingleProduct(url: string) {
    const data = useFetch<Product>(url)
    return data
}