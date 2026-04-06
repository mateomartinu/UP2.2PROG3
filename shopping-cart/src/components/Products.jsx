import { allProducts } from "../data/products"; //archivo que contiene la data
import ProductCard from "./ProductCard";
import { useState } from "react"; //importamos el estado 

const Products = () => {

    // guarda los objetos de los productos del carrito 
    const [cart, setCart] = useState([]);

    // añadir un estado para los mensajes
    const [message, setMessage] = useState("");
    //logica para agregar productos
    const addToCart = (product) => {

        //validamos que un producto no se agregue dos veces
        const exists = cart.find(elemento => elemento.code === product.code);

        if(exists)
        {
            // añadir un mensaje de "producto ya existente"
            setMessage("Este Producto ya esta en el carrito !!");
            return;
        }

        setCart([...cart, product]);
        // añadir un mensaje de "agrado con exito"
        setMessage("Agregado con exito!!");
    }


    //logica para eliminar un producto de cart

    const removeProduct = (code) => {
        const newCart = cart.filter(product => product.code !== code);

        //el nuevo array tiene todos los productos que ya tenia menos el que queremos borrar

        setCart(newCart);

        //añadir mensaje de "eliminacion con exito"
        setMessage("Eliminacion con exito !!");
    }


    // metodo para el precio total de los productos
    const TotalPrice = (cart) => {
        const total = cart.reduce((acum, producto) => {
            return acum + producto.price;
        }, 0);
        return total;
    }

    //metodo para comprar (vaciar el carrito)
    const handleComprar = (product) => {
        setCart([]);            // vacía el carrito
        setMessage("Compra realizada con éxito"); // muestra el mensaje
    }

    return (
        <>
            <section>
                <h2>Productos</h2>
                <ul>
                    {
                        allProducts.map(
                            producto => <ProductCard key={producto.code} product={producto} onAdd={addToCart} />
                        )
                    }
                </ul>
            </section>
            <section>
                <h2>Carrito</h2>
                <ul>
                    {
                        cart.map(item => <li key={item.code}>Nombre: {item.name} Precio: {item.price} 
                        <button onClick={() => removeProduct(item.code)}>Eliminar</button> </li>)
                        
                    }
                    
                </ul>
                <h3>Total: {TotalPrice(cart)}</h3>
                <button onClick={handleComprar}>Comprar</button>
                {message && <p>{message}</p>}
            </section>
        </>
    )
}

export default Products;