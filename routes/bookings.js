const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    const query = `
        SELECT b.BookingID, b.CustomerName, p.Name AS PackageName, b.BookingDate, b.Status
        FROM Bookings b
        JOIN Packages p ON b.PackageID = p.PackageID
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { CustomerName, PackageID, BookingDate, Status } = req.body;
    const query = `
        INSERT INTO Bookings (CustomerName, PackageID, BookingDate, Status)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [CustomerName, PackageID, BookingDate, Status || 'Pending'], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Booking added successfully!', bookingID: results.insertId });
    });
});

router.put('/:id', (req, res) => {
    const { CustomerName, BookingDate } = req.body;
    const { id } = req.params;
    const query = 'UPDATE Bookings SET CustomerName = ?, BookingDate = ? WHERE BookingID = ?';
    db.query(query, [CustomerName, BookingDate, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Booking updated successfully!' });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Bookings WHERE BookingID = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Booking deleted successfully!' });
    });
});

module.exports = router;

