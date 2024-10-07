// Import dependencies
const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const taskRoutes = require('./src/routes/tasks.js');
// const errorHandler = require('./middleware/errorHandler');

// Load environment variables from .env file
// dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api', taskRoutes); // Use the task routes for /api endpoint

// Error handling middleware (should be after routes)
// app.use(errorHandler);

// Start server on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
