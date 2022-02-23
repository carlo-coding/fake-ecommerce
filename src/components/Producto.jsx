const Producto = ({data, agregarCarro}) => {
  let {id, name, precio} = data
  return <div>
    <h3>{name}</h3>
    <p>{precio}</p>
    <button onClick={() => agregarCarro(id)}>Agregar</button>
  </div>
}

export default Producto