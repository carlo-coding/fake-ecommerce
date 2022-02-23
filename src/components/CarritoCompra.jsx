import {useReducer}  from "react"
import { TYPES } from "../TYPES/accionesTipo";
import {
  compraReducer,
  compraStateInitial,
} from "../reducer/carritoReducer"
import Producto from "./Producto"
import CarroItem from "./CarroItem"


const CarritoCompra = () => {
  const [state, dispatch] = useReducer(compraReducer,compraStateInitial)
  const {products, cart} = state

  const agregarCarro = (id) => {
    console.log(id)
    dispatch({ type: TYPES.AGREGARcarro, payload: id });
  }

  const limpiarCarro = () =>{
    console.log(`hola`)
  }
  
  return <>
  <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="">
        {products.map(product => <Producto key={product.id} data={product} agregarCarro={agregarCarro}/>)}
      </article>
      <h3>Carrito</h3>
      <article className="">
        <button onClick={limpiarCarro}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CarroItem key={index} data={item} />
        ))}
      </article>
    </div>
  </>
}

export default CarritoCompra