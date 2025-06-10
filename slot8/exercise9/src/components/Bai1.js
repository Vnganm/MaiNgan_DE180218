import Card from 'react-bootstrap/Card';

function Bai1() {
  return (
    <Card>
      <Card.Body>
          <Card.Title as="h2">Tên: Vương Mai Ngân</Card.Title>
          <Card.Text className="lead">Sinh viên năm 3 đại học FPT. Hiện tại đang nghèo</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Bai1;