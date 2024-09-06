import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserProjects = () => {

    const [users, setusers] = useState([]);

    useEffect(()=>{
        const fetchUserProjects = async() => {
            try {
                const response = await axios.get('http://localhost/api/usersprojects');
                setusers(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserProjects();
    })
  return (
    <div>
      <h1>Project List</h1>
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
          {users.map(project => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.email}</td>
              <td>{project.description}</td>
              <td>{project.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserProjects