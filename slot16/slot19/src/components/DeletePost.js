import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(true);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  const handleClose = () => navigate("/");

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa bài viết</Modal.Title>
      </Modal.Header>
      <Modal.Body>Bạn chắc chắn muốn xóa bài viết này?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

DeletePost.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeletePost;