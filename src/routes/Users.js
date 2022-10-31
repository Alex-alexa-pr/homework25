import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (userId) => () => {
    navigate(`/users/${userId}`);
  }

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {users.map(({ id, firstName, lastName, email, phone }) => (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td><button onClick={handleClick(id)}>Show more</button></td>
        </tr>
      ))}

    </>
  );
}

export default Users;