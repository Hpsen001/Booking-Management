import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatedData, setUpdatedData] = useState({ CustomerName: '', BookingDate: '' });

  // ดึงข้อมูลการจองทั้งหมด
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios.get('http://localhost:5000/api/bookings')
      .then(response => setBookings(response.data))
      .catch(error => console.error('Error fetching bookings:', error));
  };

  // เปิด Modal เพื่อแก้ไขข้อมูล
  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setUpdatedData({ CustomerName: booking.CustomerName, BookingDate: booking.BookingDate });
    setShowModal(true);
  };

  // ยืนยันการแก้ไขข้อมูล
  const handleSave = () => {
    axios.put(`http://localhost:5000/api/bookings/${selectedBooking.BookingID}`, updatedData)
      .then(() => {
        alert('Booking updated successfully!');
        setShowModal(false);
        fetchBookings();
      })
      .catch(error => console.error('Error updating booking:', error));
  };

  // ลบข้อมูลการจอง
  const handleDelete = (bookingID) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      axios.delete(`http://localhost:5000/api/bookings/${bookingID}`)
        .then(() => {
          alert('Booking deleted successfully!');
          fetchBookings();
        })
        .catch(error => console.error('Error deleting booking:', error));
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Manage Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Package Name</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.BookingID}>
              <td>{index + 1}</td>
              <td>{booking.CustomerName}</td>
              <td>{booking.PackageName}</td>
              <td>{booking.BookingDate}</td>
              <td>{booking.Status}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(booking)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(booking.BookingID)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal สำหรับแก้ไขข้อมูล */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control 
                type="text" 
                name="CustomerName" 
                value={updatedData.CustomerName} 
                onChange={(e) => setUpdatedData({ ...updatedData, CustomerName: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control 
                type="date" 
                name="BookingDate" 
                value={updatedData.BookingDate} 
                onChange={(e) => setUpdatedData({ ...updatedData, BookingDate: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ManageBookings;
