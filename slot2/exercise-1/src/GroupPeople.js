function GroupPeople() {
  const people = [
    { name: "Alice", age: 25, occupation: "Developer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Developer" },
    { name: "David", age: 35, occupation: "Designer" },
  ];

  // Nhóm theo occupation
  const grouped = people.reduce((acc, person) => {
    const key = person.occupation;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person);
    return acc;
  }, {});

  return (
    <div style={{ marginTop: "20px", paddingLeft: "20px", textAlign: "left" }}>
      <h2>Nhóm người theo nghề nghiệp</h2>
      {Object.keys(grouped).map((occupation) => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <ul>
            {grouped[occupation].map((person, index) => (
              <li key={index}>
                {person.name} - Tuổi: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupPeople;
