import { useState, useEffect } from "react";
const Effect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const users = [
    { id: 1, name: "Meenu" },
    { id: 2, name: "Meera" },
    { id: 3, name: "Meela" }
  ];
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count + 1}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched data:", json);
        setData(json);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [count]); 
  return (
    <div>
      <h2>Effect Component</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Fetched Todo:</h3>
      {data ? (
        <div>
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Title:</strong> {data.title}</p>
          <p><strong>Completed:</strong> {data.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Users List:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id}. {user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Effect;
