function PersonDetail() {
  // Khai báo object người
  const person = {
    name: "Alice",
    age: 25,
    occupation: "Developer",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Thông tin người</h2>
      <p>Tên: {person.name}</p>
      <p>Tuổi: {person.age}</p>
      <p>Nghề nghiệp: {person.occupation}</p>
    </div>
  );
}

export default PersonDetail;
