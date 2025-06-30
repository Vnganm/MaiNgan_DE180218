import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { Container } from 'react-bootstrap';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Navigation/>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          
          {/* Các route được bảo vệ */}
          <Route element={<ProtectedRoute />}>
            <Route path="/posts" element={<Post />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;