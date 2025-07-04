import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Navbar, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "user";
    const userRole = storedUsername.toLowerCase().includes("admin") ? "Admin" : "User";
    setRole(userRole);

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center">Đang tải...</div>;

  if (!data || data.length === 0) return <div className="text-center">Không có bài viết nào!</div>;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand>Quản lý Bài Viết</Navbar.Brand>
          <div className="ms-auto">
            <span className="text-white me-3">Role: {role}</span>
            <Button variant="outline-light" onClick={handleLogout}>
              Quay lại đăng nhập
            </Button>
          </div>
        </Container>
      </Navbar>
      <Container>
        <h2 className="text-center mb-4">Danh sách bài viết</h2>
        <Button variant="primary" className="mb-3">
          <Link to="/create" style={{ color: "white", textDecoration: "none" }}>
            Tạo bài viết mới
          </Link>
        </Button>
        {data.map((post) => (
          <Card key={post.id} className="mb-3 shadow-sm" style={{ borderRadius: "10px" }}>
            <Card.Body>
              <Card.Title className="fw-bold">{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
              <div className="d-flex gap-2">
                <Button variant="info">
                  <Link to={`/edit/${post.id}`} style={{ color: "white", textDecoration: "none" }}>
                    Chỉnh sửa
                  </Link>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Xóa
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

PostList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default PostList;