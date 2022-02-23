
const CarroItem = ({ data}) => {
    let { id, name, precio, quantity } = data;

  return (
    <div>
      <h4>{name}</h4>
      <h5>
         CLP{precio} X {quantity} = CLP{precio * quantity}
      </h5>
      <button>Eliminar</button>
      <br />
      <br />
    </div>
  );
};

export default CarroItem;
