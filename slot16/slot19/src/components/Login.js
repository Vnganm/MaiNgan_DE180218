import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Navbar, Container } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Đảm bảo json-server chạy để lấy dữ liệu
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Tên đăng nhập hoặc mật khẩu không được để trống!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/useraccounts");
      const users = response.data;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        localStorage.setItem("username", username);
        setMessage(`Login successfully with username: ${username}`);
        setTimeout(() => {
          navigate("/postlist");
        }, 1000);
      } else {
        setMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch (error) {
      setMessage("Lỗi khi kết nối đến server!");
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand>Quản lý Bài Viết</Navbar.Brand>
        </Container>
      </Navbar>


      <Container className="d-flex justify-content-center">
        <div style={{ width: "600px" }}>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-2">
              Đăng nhập
            </Button>
          </Form>
          {message && (
            <Alert variant={message.includes("successfully") ? "success" : "danger"} className="text-center">
              {message}
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;