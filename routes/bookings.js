const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    const query = `
        SELECT b.BookingID, b.CustomerName, b.BookingDate, b.Status, p.Name AS PackageName
        FROM Bookings b
        JOIN Packages p ON b.PackageID = p.PackageID
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { CustomerName, PackageID, BookingDate } = req.body;
    const query = 'INSERT INTO Bookings (CustomerName, PackageID, BookingDate, Status) VALUES (?, ?, ?, "Pending")';
    db.query(query, [CustomerName, PackageID, BookingDate], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Booking added!', BookingID: results.insertId });
    });
});

module.exports = router;
