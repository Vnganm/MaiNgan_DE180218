import { useState } from "react";

const employees = [
  { name: "Anna" },
  { name: "Brian" },
  { name: "Clara" },
  { name: "Ann" },
  { name: "Elisabeth" }
];

export default function Exercise10() {
  const [query, setQuery] = useState("");

  const results = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
            <h2>Exercise 10: Tìm kiếm nhân viên</h2>
      <input
        type="text"
        placeholder="Search employee..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {results.map((emp, index) => (
          <li key={index}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
}