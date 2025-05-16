function AreAllTeenagers() {
  const people = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 16 },
    { name: "Charlie", age: 20 },
  ];

  // Kiểm tra tất cả có phải vị thành niên không
  const allTeenagers = people.every(
    (person) => person.age >= 13 && person.age <= 19
  );

  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <h2>Có phải tất cả đều vị thành niên?</h2>
      <p>{allTeenagers ? "Có" : "Không"}</p>
    </div>
  );
}

export default AreAllTeenagers;
