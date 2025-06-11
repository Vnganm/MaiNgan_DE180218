const NameList = ({ names }) => {
  return (
    <div>
        <h1>Hello</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;