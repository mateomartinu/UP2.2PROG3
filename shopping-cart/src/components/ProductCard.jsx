const ProductCard = ({product, onAdd}) => {
    return (
        <>
            <h3>{product.name}</h3>
            <p>Precio: $ {product.price}</p>
            <p>Disponible {product.isAvailable ? "Si" : "No"}</p>
            <button onClick={() => onAdd(product)} disabled={product.isAvailable === false}>
                Agrear al Carrito
            </button>
        </>
    )
}

export default ProductCard;