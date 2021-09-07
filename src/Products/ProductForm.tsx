
const ProductForm = () => {
    return (
        <>
            <h2>Add Game To The Store</h2>
            <form action="">
                <input type="text" placeholder="Game Title" name="title" />
                <input type="number" placeholder="Price" name="price" />
                <input type="text" placeholder="id" name="id" />
                <button>Add Game</button>
            </form>
        </>
    )
}

export default ProductForm
