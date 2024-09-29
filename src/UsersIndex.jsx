import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function UsersIndex() {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

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

  const handleClick = (userId) => {
    // Navigate to bookshelf and pass userId via state
    console.log(userId);
    navigate(`/bookshelf`, { state: { userId: userId } });
  };

  useEffect(handleUsersIndex, []);

  return (
    <div>
      <h1>All Users</h1>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => handleClick(user.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick(user.id);
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
