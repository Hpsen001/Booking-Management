const express = require('express');
const router = express.Router();
const db = require('../config/db');
    
router.get('/', (req, res) => {
    db.query('SELECT * FROM Packages', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { Name, Price, StartDate, EndDate, Description } = req.body;
    const query = 'INSERT INTO Packages (Name, Price, StartDate, EndDate, Description) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [Name, Price, StartDate, EndDate, Description], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Package added!', PackageID: results.insertId });
    });
});

module.exports = router; 
