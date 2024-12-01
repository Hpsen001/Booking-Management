import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import './styles/AddBooking.css';


function AddBooking() {
  const [formData, setFormData] = useState({
    CustomerName: '',
    PackageID: '',
    BookingDate: ''
  });

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching packages:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/bookings', formData)
      .then(() => {
        alert('Booking added successfully!');
      })
      .catch(error => {
        console.error('Error creating booking:', error);
      });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4">Add New Booking</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="CustomerName" 
                    value={formData.CustomerName} 
                    onChange={handleChange} 
                    placeholder="Enter your name"
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Select Package</Form.Label>
                  <Form.Select 
                    name="PackageID" 
                    value={formData.PackageID} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">-- Select a Package --</option>
                    {packages.map(pkg => (
                      <option key={pkg.PackageID} value={pkg.PackageID}>
                        {pkg.Name} ({pkg.Price} THB)
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Booking Date</Form.Label>
                  <Form.Control 
                    type="date" 
                    name="BookingDate" 
                    value={formData.BookingDate} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Add Booking
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddBooking;
