import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error(error); 
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.description}</td>
              <td>{user.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
