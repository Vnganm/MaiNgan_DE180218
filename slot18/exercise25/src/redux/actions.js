export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const addProduct = (product) => {
  return (dispatch) => {
    // Mô phỏng API call
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT,
        payload: {
          ...product,
          id: Math.random().toString(36).substr(2, 9) // Tạo ID ngẫu nhiên
        }
      });
    }, 1000);
  };
};