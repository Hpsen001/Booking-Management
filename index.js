const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const packagesRoutes = require('./routes/packages');
const bookingsRoutes = require('./routes/bookings');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/packages', packagesRoutes);
app.use('/api/bookings', bookingsRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:5000`);
});
