function PeopleTable() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Student" },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Bảng người</h2>
      <table border="1" cellPadding="8" cellSpacing="0" style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleTable;
