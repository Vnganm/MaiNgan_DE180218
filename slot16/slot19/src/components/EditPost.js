import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`, {
          timeout: 5000, // Giới hạn thời gian chờ API
        });
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error.message);
      }
    };
    fetchPost();
  }, [id]);

  // Sử dụng useCallback để tối ưu hóa handleSubmit
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const updatedPost = { title, content };
      try {
        console.time("putRequest"); // Đo thời gian yêu cầu
        await axios.put(`http://localhost:3000/posts/${id}`, updatedPost, {
          timeout: 5000, // Giới hạn thời gian chờ API
        });
        console.timeEnd("putRequest"); // Kết thúc đo thời gian
        navigate("/"); // Quay về trang chính
      } catch (error) {
        console.error("Lỗi khi cập nhật bài viết:", error.message);
      }
    },
    [title, content, id, navigate]
  );

  return (
    <div className="container mt-4">
      <h1>Chỉnh sửa bài viết</h1>
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
          Cập nhật bài viết
        </Button>
      </Form>
    </div>
  );
};

export default EditPost;