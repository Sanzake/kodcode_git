// 1
function formatFullName(first: string, last: string): string {
    return first + " " + last
} 

// 2
interface Product {
    id: number
    name: string
    price: number
    inStock?: boolean
    tags?: string[]
}

function printProduct(p: Product): void {
    console.log(`${p.id} ${p.name} ${p.price} ${p.inStock ?? "Not known"}`)
}
const a: Product = {id: 42, name:"pen", price: 10}

// 3
type Direction = "left" | "right" | "up" | "down"

function move(dir: Direction, steps: number): string {
    return dir
}

// bonus
function getByTag(products: Product[], tag: string): Product[] {
    const result: Product[] = []
    for (const p of products) {
        if (p.tags?.includes(tag)) {
            result.push(p)
        }
    }
    return result
}

move("diagonale")

printProduct(a)
console.log(formatFullName("Dani", "Brbr"))