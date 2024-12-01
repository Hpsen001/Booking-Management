import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBooking from './AddBooking';
import ManageBookings from './components/ManageBookings';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Booking Management System</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/manage-bookings">Manage Bookings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<AddBooking />} />
          <Route path="/manage-bookings" element={<ManageBookings />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
