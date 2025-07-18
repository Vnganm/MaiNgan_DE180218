import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import LaptopManagement from './components/LaptopManagement';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import CartPage from './components/CartPage';
import { CartProvider } from './components/CartContext'; // Chỉ import CartProvider

const ProtectedRoute = ({ user, setUser, children }) => {
  console.log('ProtectedRoute rendered, user:', user); // Debug log
  return user ? children : <Navigate to="/" replace />;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('App rendered, user:', user, 'location:', window.location.pathname);
    if (!user && window.location.pathname !== '/') {
      console.log('Redirecting to / due to no user');
    }
  }, [user]);

  if (!user && window.location.pathname !== '/') {
    return <Navigate to="/" replace />;
  }

  // Fallback render to debug
  if (!LaptopManagement || !LaptopDetail || !CartPage || !Checkout) {
    console.error('One or more components failed to load:', { LaptopManagement, LaptopDetail, CartPage, Checkout });
    return <div>Error: One or more components failed to load. Check console.</div>;
  }

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={<LoginForm setUser={setUser} />}
            />
            <Route 
              path="/laptops" 
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <LaptopManagement user={user} setUser={setUser} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/laptops/:id" 
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <LaptopDetail user={user} setUser={setUser} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <CartPage user={user} setUser={setUser} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute user={user} setUser={setUser}>
                  <Checkout user={user} setUser={setUser} />
                </ProtectedRoute>
              } 
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;