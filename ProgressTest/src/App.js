import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/LoginForm';
import LaptopManagement from './components/LaptopManagement';
import LaptopDetail from './components/LaptopDetail';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              user ? (
                <Navigate to="/laptops" replace />
              ) : (
                <LoginForm setUser={setUser} />
              )
            } 
          />
          <Route 
            path="/laptops" 
            element={
              user ? (
                <LaptopManagement user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/laptops/:id" 
            element={
              user ? (
                <LaptopDetail user={user} setUser={setUser} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;