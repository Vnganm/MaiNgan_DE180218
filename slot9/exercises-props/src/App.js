import 'bootstrap/dist/css/bootstrap.min.css';

import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  
  const students = [
    { name: "Nha Phuong", age: 19, avatar: "https://baovephapluat.vn/data/images/0/2023/02/25/haipv/a.jpg?dpi=150&quality=100&w=820" },
    { name: "Quoc Phong", age: 20, avatar: "https://photo.znews.vn/w660/Uploaded/sgtnrn/2024_11_22/TT.png" },
    { name: "Gia Man", age: 21, avatar: "https://uploads.nguoidothi.net.vn/content/56b553eb-922a-4c4f-80e1-1229ef7594a2.jpg" },
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