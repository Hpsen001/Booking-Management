import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Package List</h2>
      <ul>
        {packages.map(pkg => (
          <li key={pkg.PackageID}>
            {pkg.Name} - {pkg.Price} THB
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Packages;
