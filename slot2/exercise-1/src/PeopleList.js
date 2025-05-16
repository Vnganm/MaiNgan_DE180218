function PeopleList() {
  // Mảng người
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Student" },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Danh sách người</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - Tuổi: {person.age} - Nghề: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;
