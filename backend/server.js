const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const routes = require('./routes/index');

const app = express();

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? true  
    : process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// API Routes - all routes under /api
app.use('/api', routes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV 
  });
});

// ============================================
// SERVE STATIC FILES IN PRODUCTION
// ============================================
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Database connection
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✓ MongoDB connected successfully');
    } else {
      console.log('⚠ MongoDB URI not configured');
    }
  } catch (error) {
    console.error('✗ MongoDB connection error:', error.message);
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Došlo je do greške na serveru.',
    messageEn: 'Internal server error.'
  });
});

// Start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔════════════════════════════════════════════════╗
║   Advokatska kancelarija Ilić Lj. Suzana       ║
╠════════════════════════════════════════════════╣
║   Server running on port ${PORT}                  ║
║   Mode: ${process.env.NODE_ENV || 'development'}                          ║
╚════════════════════════════════════════════════╝
    `);
  });
});

module.exports = app;