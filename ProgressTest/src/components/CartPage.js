import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Cart from './Cart';
import PropTypes from 'prop-types';
import axios from 'axios';

const CartPage = ({ user, setUser }) => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveFromCart = async (laptopId) => {
    try {
      const item = cart.find(item => item.id === laptopId);
      if (!item) return;

      const response = await axios.get(`http://localhost:3001/Laptops/${laptopId}`);
      const laptop = response.data;
      const updatedLaptop = { ...laptop, quantity: laptop.quantity + item.cartQuantity };
      await axios.put(`http://localhost:3001/Laptops/${laptopId}`, updatedLaptop);

      await axios.delete(`http://localhost:3001/cart/${laptopId}`);
      const updatedCart = cart.filter(item => item.id !== laptopId);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error removing from cart:', error.response ? error.response.data : error.message);
      alert('Failed to remove from cart. Please try again.');
    }
  };

  const handleUpdateCartQuantity = async (laptopId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const item = cart.find(item => item.id === laptopId);
      if (!item) return;

      const response = await axios.get(`http://localhost:3001/Laptops/${laptopId}`);
      const laptop = response.data;
      const quantityDifference = newQuantity - item.cartQuantity;

      if (laptop.quantity - quantityDifference < 0) {
        alert('Not enough stock available!');
        return;
      }

      const updatedLaptop = { ...laptop, quantity: laptop.quantity - quantityDifference };
      await axios.put(`http://localhost:3001/Laptops/${laptopId}`, updatedLaptop);

      const updatedItem = { ...item, cartQuantity: newQuantity };
      await axios.put(`http://localhost:3001/cart/${laptopId}`, updatedItem);
      const updatedCart = cart.map(item => item.id === laptopId ? updatedItem : item);
      setCart(updatedCart);
    } catch (error) {
      console.error('Error updating cart quantity:', error.response ? error.response.data : error.message);
      alert('Failed to update cart quantity. Please try again.');
    }
  };

  const handleClearCart = async () => {
    try {
      for (const item of cart) {
        const response = await axios.get(`http://localhost:3001/Laptops/${item.id}`);
        const laptop = response.data;
        const updatedLaptop = { ...laptop, quantity: laptop.quantity + item.cartQuantity };
        await axios.put(`http://localhost:3001/Laptops/${item.id}`, updatedLaptop);
      }
      await axios.delete('http://localhost:3001/cart');
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error.response ? error.response.data : error.message);
      alert('Failed to clear cart. Please try again.');
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Cart
      cart={cart}
      handleRemoveFromCart={handleRemoveFromCart}
      handleUpdateCartQuantity={handleUpdateCartQuantity}
      handleClearCart={handleClearCart}
      handleCheckout={handleCheckout}
    />
  );
};

CartPage.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

export default CartPage;