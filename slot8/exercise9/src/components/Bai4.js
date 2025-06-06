import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';

const Bai4 = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Bài 4: Simple Card</h2>
      <Card style={{ width: '28rem' }} className="shadow-sm">
        <Card.Body>
          {/* Hình ảnh */}
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png" 
            alt="Card" 
            fluid 
            rounded 
            className="mb-3"
            style={{ maxHeight: '200px', objectFit: 'cover' }}
          />
          
          {/* Tiêu đề */}
          <Card.Title className="fw-bold mb-2">
            FPT Education
          </Card.Title>
          
          {/* Mô tả */}
          <Card.Text className="text-muted">
            FPT UNIVERSITY - không biết viết gì.
          </Card.Text>
          
          {/* Footer */}
          <div className="mt-3 pt-2 border-top">
            <p className="mb-1 fw-semibold">Mai Ngan - FPT DaNang</p>
            <p className="mb-1 small text-muted">FPT University Da Nang Campus</p>
            <p className="small text-muted">Mobile: 012345678</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Bai4;