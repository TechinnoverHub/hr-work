import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  addItem,
  updateItem,
  deleteItem,
  retrieveCart,
  storeCart,
  clearCartStore
} from 'Utils/cartHelpers';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      toast.info('Product added to cart');
      const cartData = { ...addItem(action.payload, state) };
      storeCart(cartData);
      return cartData;
    }

    case 'INCREASE_ITEM_QTY': {
      const cartData = { ...updateItem(action.payload, 'increase', state) };
      storeCart(cartData);
      return cartData;
    }

    case 'DECREASE_ITEM_QTY': {
      const cartData = { ...updateItem(action.payload, 'decrease', state) };
      storeCart(cartData);
      return cartData;
    }

    case 'REMOVE_ITEM': {
      toast.info('Product removed from cart');
      const cartData = { ...deleteItem(action.payload, state) };
      storeCart(cartData);
      return cartData;
    }

    case 'CLEAR_CART': {
      clearCartStore();
      return {};
    }

    case 'INIT_CART': {
      const cartData = retrieveCart();
      return cartData ? cartData : state;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {});

  useEffect(() => {
    dispatch({ type: 'INIT_CART' });
  }, []);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCartState, useCartDispatch };
