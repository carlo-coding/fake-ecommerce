import react from "react"
import { TYPES } from "../TYPES/accionesTipo";

export const compraStateInitial = {
  products: [
    { id: 1, name: "Producto 1", precio: 100 },
    { id: 2, name: "Producto 2", precio: 200 },
    { id: 3, name: "Producto 3", precio: 300 },
    { id: 4, name: "Producto 4", precio: 400 },
    { id: 5, name: "Producto 5", precio: 500 },
    { id: 6, name: "Producto 6", precio: 600 },
  ],
  cart: [],
};

export function compraReducer(state, action) {
  switch(action.type) {
    case TYPES.AGREGARcarro: {
      let itemCarro = state.products.find(product => product.id === action.payload)
      console.log(itemCarro)

      let itemInCart = state.cart.find((item) => item.id === itemCarro.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemCarro.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...itemCarro, quantity: 1 }],
          };
    }
    case TYPES.QUITAR_UNO_CARRO:
    case TYPES.QUITAR_TODO_CARRO:
  }
}