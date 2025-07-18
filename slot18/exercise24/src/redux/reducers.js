import { ADD_TO_CART, UPDATE_CART_QUANTITY, REMOVE_FROM_CART } from './actions';

// Initial State - Trạng thái ban đầu
const initialState = {
  products: [
    {
      id: '123456',
      name: 'iPhone 15 Pro',
      price: 999.99,
      description: 'Flagship smartphone with advanced features',
      catalogs: ['Electronics', 'Smartphones']
    },
    {
      id: '234567',
      name: 'MacBook Air M2',
      price: 1299.99,
      description: 'Ultra-thin laptop with M2 chip',
      catalogs: ['Electronics', 'Laptops']
    },
    {
      id: '345678',
      name: 'AirPods Pro',
      price: 249.99,
      description: 'Wireless earbuds with noise cancellation',
      catalogs: ['Electronics', 'Audio']
    },
    {
      id: '456789',
      name: 'Samsung Galaxy S24',
      price: 899.99,
      description: 'Latest Android smartphone',
      catalogs: ['Electronics', 'Smartphones']
    }
  ],
  cart: []
};

// Reducer - Hàm xử lý thay đổi state
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Nếu đã có, tăng số lượng
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // Nếu chưa có, thêm mới với quantity = 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;