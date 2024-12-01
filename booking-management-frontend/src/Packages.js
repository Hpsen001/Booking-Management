import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the packages!', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Package List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => (
            <tr key={pkg.PackageID}>
              <td>{index + 1}</td>
              <td>{pkg.Name}</td>
              <td>{pkg.Price} THB</td>
              <td>{pkg.StartDate}</td>
              <td>{pkg.EndDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Packages;