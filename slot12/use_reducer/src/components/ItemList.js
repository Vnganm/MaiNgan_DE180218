import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup, Card } from "react-bootstrap";

// Reducer function để xử lý các hành động
function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, { id: Date.now(), name: action.name, createdAt: new Date().toISOString() }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SORT_ITEMS":
      const sortedItems = [...state.items];
      if (action.sortType === "alphabetical") {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.sortType === "created-time") {
        sortedItems.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }
      return {
        ...state,
        items: sortedItems,
      };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  items: [],
};

function ItemList() {
  // useReducer để quản lý danh sách items
  const [state, dispatch] = useReducer(listReducer, initialState);

  // useState để quản lý các state khác
  const [newItemName, setNewItemName] = useState(""); // Tên item mới
  const [editId, setEditId] = useState(null); // ID của item đang chỉnh sửa
  const [editName, setEditName] = useState(""); // Tên mới khi chỉnh sửa
  const [filterText, setFilterText] = useState(""); // Từ khóa lọc

  // Hàm thêm item
  const handleAddItem = () => {
    if (newItemName.trim()) {
      dispatch({ type: "ADD_ITEM", name: newItemName.trim() });
      setNewItemName("");
    }
  };

  // Hàm xóa item
  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  // Hàm bắt đầu chỉnh sửa
  const handleEditStart = (id, name) => {
    setEditId(id);
    setEditName(name);
  };

  // Hàm lưu chỉnh sửa
  const handleEditSave = () => {
    if (editName.trim()) {
      dispatch({ type: "EDIT_ITEM", id: editId, newName: editName.trim() });
      setEditId(null);
      setEditName("");
    }
  };

  // Hàm hủy chỉnh sửa
  const handleEditCancel = () => {
    setEditId(null);
    setEditName("");
  };

  // Hàm sắp xếp
  const handleSort = (sortType) => {
    dispatch({ type: "SORT_ITEMS", sortType });
  };

  // Lọc items theo từ khóa
  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  // Định dạng thời gian tạo
  const formatCreatedTime = (createdAt) => {
    return new Date(createdAt).toLocaleString();
  };

  return (
    <Container className="my-8">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm border-0 rounded-3 bg-light">
            <h2 className="text-center mb-4 text-primary">Item List Manager</h2>

            {/* Form thêm item */}
            <Form>
              <Form.Group controlId="formAddItem" className="mb-3">
                <Form.Label className="fw-bold">Add New Item:</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Enter item name"
                    className="rounded-end"
                  />
                  <Button
                    variant="primary"
                    onClick={handleAddItem}
                    className="rounded-start"
                  >
                    Add Item
                  </Button>
                </div>
              </Form.Group>

              {/* Lọc và sắp xếp */}
              <Form.Group controlId="formFilterSort" className="mb-3">
                <Row>
                  <Col md={8}>
                    <Form.Label className="fw-bold">Filter Items:</Form.Label>
                    <Form.Control
                      type="text"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                      placeholder="Search items..."
                    />
                  </Col>
                  <Col md={4} className="d-flex align-items-end">
                    <Button
                      variant="secondary"
                      onClick={() => handleSort("alphabetical")}
                      className="me-2"
                    >
                      Sort A-Z
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleSort("created-time")}
                    >
                      Sort by Time
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>

            {/* Danh sách items */}
            <h3 className="mt-4 mb-3 text-secondary">Item List</h3>
            <ListGroup>
              {filteredItems.length === 0 ? (
                <ListGroup.Item className="text-center text-muted">
                  No items found. Add some items or adjust your filter!
                </ListGroup.Item>
              ) : (
                filteredItems.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    className="d-flex justify-content-between align-items-center p-3 border rounded mb-2 bg-white shadow-sm"
                  >
                    {editId === item.id ? (
                      <div className="w-100">
                        <Form.Control
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="mb-2"
                        />
                        <Button
                          variant="success"
                          size="sm"
                          onClick={handleEditSave}
                          className="me-2"
                        >
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={handleEditCancel}
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <span className="fw-semibold">{item.name}</span>
                          <div className="text-muted small">
                            Added: {formatCreatedTime(item.createdAt)}
                          </div>
                        </div>
                        <div>
                          <Button
                            variant="warning"
                            size="sm"
                            onClick={() => handleEditStart(item.id, item.name)}
                            className="me-2"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </>
                    )}
                  </ListGroup.Item>
                ))
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;