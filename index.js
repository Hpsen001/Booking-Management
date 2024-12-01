const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const bookingsRoutes = require('./routes/bookings');
const packagesRoutes = require('./routes/packages');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Booking Management API!');
});

app.use('/api/bookings', bookingsRoutes);

app.use('/api/packages', packagesRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
