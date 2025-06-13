import 'bootstrap/dist/css/bootstrap.min.css';

import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";

function App() {
  const userData = { name: "nganvm@fe.edu.vn", age: 20 };
  const namesList = ["nganvm@fe.edu.vn", "test@fe.edu.vn"];
  
  const students = [
    { name: "Nha Phuong", age: 19, avatar: "https://photo.znews.vn/w660/Uploaded/neg_yslewlx/2019_07_25/thanhviennhomnhachktsau13namnguoitrothanhdoanhnhankesuyttutuvinonan.jpg" },
    { name: "Quoc Phong", age: 20, avatar: "https://photo.znews.vn/w660/Uploaded/neg_yslewlx/2019_07_25/thanhviennhomnhachktsau13namnguoitrothanhdoanhnhankesuyttutuvinonan.jpg" },
    { name: "Gia Man", age: 21, avatar: "https://photo.znews.vn/w660/Uploaded/neg_yslewlx/2019_07_25/thanhviennhomnhachktsau13namnguoitrothanhdoanhnhankesuyttutuvinonan.jpg" },
  ];

  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;