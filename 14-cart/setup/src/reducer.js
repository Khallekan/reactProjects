import React from 'react';
import CartItem from './CartItem';

const reducer = (state, action) => {
  switch (action.type) {
    case `LOADING`:
      return { ...state, isLoading: true };
    case `DISPLAY_ITEMS`:
      return {
        ...state,
        isLoading: false,
        cart: action.payload.data,
        cartTotal: action.payload.data.length,
      };
    case `INCREASE_ITEM`:
      let increaseCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: increaseCart,
      };
    case `DECREASE_ITEM`:
      let decreaseCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount >= 0);
      return {
        ...state,
        cart: decreaseCart,
      };
    case `GET_TOTALS`:
      let { cartTotal, cartAmount } = state.cart.reduce(
        (total, item) => {
          const { price, amount } = item;
          total.cartAmount += amount;
          total.cartTotal += price * amount;
          total.cartTotal = parseFloat(total.cartTotal.toFixed(2));
          return total;
        },
        { cartTotal: 0, cartAmount: 0 }
      );
      return { ...state, cartTotal, cartAmount };
    case `REMOVE_ITEM`:
      let removeItemCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: removeItemCart,
      };
    case `CLEAR_CART`:
      return {
        ...state,
        cart: [],
      };
    default:
      throw new Error(`Not handled`);
  }
};

export default reducer;
