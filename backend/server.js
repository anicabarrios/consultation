const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Import routes - single index file
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
      return true;
    } else {
      console.log('⚠ MongoDB URI not configured');
      return false;
    }
  } catch (error) {
    console.error('✗ MongoDB connection error:', error.message);
    return false;
  }
};

// Auto-seed database if empty (runs only once)
const seedIfEmpty = async () => {
  try {
    const Question = require('./models/Question');
    const count = await Question.countDocuments();
    
    if (count === 0) {
      console.log('📦 Database is empty, seeding mock data...');
      await require('./utils/seedData')();
      console.log('✓ Database seeded successfully!');
    } else {
      console.log(`✓ Database has ${count} questions, skipping seed`);
    }
  } catch (error) {
    console.error('Seed error:', error.message);
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

connectDB().then(async (connected) => {
  // Seed database if connected and empty
  if (connected) {
    await seedIfEmpty();
  }
  
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