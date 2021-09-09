import { useState } from "react"
import { Product } from "./products.slice"

const ProductForm: React.FC = () => {

    const [{ title, id, price }, setProduct] = useState<Product>({
        id: "",
        title: "",
        price: 0
    })

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
        (prev as any)[name] = value;
        const newValue = { ...prev }
        return newValue;
    })

    return (
        <>
            <h2>Add Game To The Store</h2>
            <form action="">
                <input type="text" placeholder="Game Title" name="title" value={title} onChange={handleChange} />
                <input type="number" placeholder="Price" name="price" value={price} onChange={handleChange} />
                <input type="text" placeholder="id" name="id" value={id} onChange={handleChange} />
                <button>Add Game</button>
            </form>
        </>
    )
}

export default ProductForm
