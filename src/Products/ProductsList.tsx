import { useState } from "react"

interface Product {
    title: string;
    price: number;
    id: string;
}

const initialProducts = [
    { title: "Escape From Tarkov", price: 60, id: "eft" },
    { title: "Hunt: Showdown", price: 70, id: "hunt" },
    { title: "Hell Let Loose", price: 55, id: "hll" },
]

const ProductsList = () => {

    const [products, setProducts] = useState<Product[]>(initialProducts)

    return (
        <div>
            <h2 >Games List</h2>
            {products.map(product => <div key={product.id} >
                <span>{`${product.title} : ${product.price}`}</span>
            </div>)}

            <button onClick={() => setProducts(prevProducts => [
                {
                    title: 'Half Life',
                    price: 100,
                    id: 'hl'
                }, ...prevProducts])} >Add Product</button>
        </div>
    )
}

export default ProductsList
