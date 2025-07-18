// Action Types - Định nghĩa các loại hành động
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Action Creators - Các hàm tạo action
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const updateCartQuantity = (productId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { productId, quantity }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});