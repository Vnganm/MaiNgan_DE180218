import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // Sử dụng useCallback để tối ưu hóa handleSubmit
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const newPost = { title, content };
      try {
        await axios.post("http://localhost:3000/posts", newPost, {
          timeout: 5000, // Giới hạn thời gian chờ API (5 giây)
        });
        navigate("/"); // Quay về trang chính
      } catch (error) {
        console.error("Lỗi khi tạo bài viết:", error.message);
      }
    },
    [title, content, navigate]
  );

  return (
    <div className="container mt-4">
      <h1>Thêm bài viết mới</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Tạo bài viết
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;