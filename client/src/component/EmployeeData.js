import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './EmployeeData.css';

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="container">
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.EmployeeID}>
              <td>{employee.EmployeeID}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.Email}</td>
              <td>{employee.DOB}</td>
              <td>{employee.PhoneNumber}</td>
              <td>{employee.City}</td>
              <td>{employee.Designation}</td>
              <td>{employee.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeData;
