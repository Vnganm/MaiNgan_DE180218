function AverageAgeByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Developer" },
    { name: "David", age: 35, occupation: "Designer" },
  ];

  // Nhóm và tính tuổi trung bình
  const grouped = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = { totalAge: 0, count: 0 };
    }
    acc[key].totalAge += person.age;
    acc[key].count += 1;
    return acc;
  }, {});

  // Tính tuổi trung bình
  const averages = Object.keys(grouped).map((occupation) => ({
    occupation,
    averageAge: (grouped[occupation].totalAge / grouped[occupation].count).toFixed(1),
  }));

  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px", textAlign: "left" }}>
      <h2>Tuổi trung bình theo nghề nghiệp</h2>
      <ul>
        {averages.map((item, index) => (
          <li key={index}>
            {item.occupation}: {item.averageAge} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
