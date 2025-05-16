function FirstTeenager() {
  const people = [
    { name: "Alice", age: 12, occupation: "Student" },
    { name: "Bob", age: 15, occupation: "Student" },
    { name: "Charlie", age: 20, occupation: "Developer" },
  ];

  // Tìm người đầu tiên tuổi từ 13 đến 19
  const firstTeenager = people.find(
    (person) => person.age >= 13 && person.age <= 19
  );

  return (
    <div style={{ marginTop: "20px",  textAlign: "left" }}>
      <h2>Người vị thành niên đầu tiên</h2>
      {firstTeenager ? (
        <p>
          {firstTeenager.name} - Tuổi: {firstTeenager.age} - Nghề:{" "}
          {firstTeenager.occupation}
        </p>
      ) : (
        <p>Không tìm thấy người vị thành niên.</p>
      )}
    </div>
  );
}

export default FirstTeenager;
