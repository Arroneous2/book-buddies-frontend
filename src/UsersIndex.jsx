import { useState, useEffect } from "react";
import axios from "axios";

export function UsersIndex() {
  const jwt = localStorage.getItem("jwt");

  const [users, setUsers] = useState([]);

  const handleUsersIndex = () => {
    axios
      .get("http://localhost:3000/users.json", {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then((response) => {
        console.log(response);
        setUsers(response.data);
      });
  };

  useEffect(handleUsersIndex, []);

  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => alert(`Clicked on ${user.first_name} ${user.last_name}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              alert(`Clicked on ${user.first_name} ${user.last_name} via keyboard!`);
            }
          }}
        >
          <h2>{user.first_name}</h2>
          <h2>{user.last_name}</h2>
          <h3>{user.email}</h3>
        </div>
      ))}
    </div>
  );
}
