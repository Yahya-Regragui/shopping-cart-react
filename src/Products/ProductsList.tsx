import { useSelector } from "react-redux"
import { addToCart } from "../Cart/cart.slice"
import { useAppDispatch } from "../store.hooks"
import { getProductsSelector, Product, removeProduct } from "./products.slice"



const ProductsList: React.FC = () => {

    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()

    const removeFromStore = (id: string) => dispatch(removeProduct(id))

    const addToCartHandler = (product: Product) => dispatch(addToCart(product))



    return (
        <div>
            <h2 >Games List</h2>
            {products.map(product => <div key={product.id} >
                <span>{`${product.title} : ${product.price}`}</span>
                <button onClick={() => removeFromStore(product.id)}>Remove from store</button>
                <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
            </div>)}

        </div>
    )
}

export default ProductsList
