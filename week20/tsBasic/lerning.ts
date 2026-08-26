type Status = "new" | "sale" | "sold"

interface Product {
    id: number
    name: string
    price: number
    status: Status
    inStock?: boolean
}

function getDiscount(p: Product): string {
    return String(p.price * 0.9)
}


const a: Product = {id: 42, name:"pen", price: 10, status: "sold"}

console.log(getDiscount(a))