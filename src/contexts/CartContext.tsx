import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return calculateTotals({ ...state, items: updatedItems });
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        return calculateTotals({ ...state, items: [...state.items, newItem] });
      }
    }
    
    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return calculateTotals({ ...state, items: updatedItems });
    }
    
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      return calculateTotals({ ...state, items: updatedItems });
    }
    
    case "CLEAR_CART":
      return initialState;
    
    default:
      return state;
  }
};

const calculateTotals = (state: CartState): CartState => {
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const total = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return { ...state, itemCount, total };
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};