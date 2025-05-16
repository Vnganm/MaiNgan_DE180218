function NamePerson() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default NamePerson;