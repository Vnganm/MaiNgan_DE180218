function SortPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Developer" },
    { name: "David", age: 35, occupation: "Designer" },
  ];

  // Copy mảng và sắp xếp
  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;
    // Nếu nghề giống nhau, so sánh tuổi
    return a.age - b.age;
  });

  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px", textAlign: "left" }}>
      <h2>Danh sách người sau khi sắp xếp</h2>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - Nghề: {person.occupation} - Tuổi: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortPeople;
