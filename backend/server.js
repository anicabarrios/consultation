require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./routes');

const app = express();

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                              CORS SETUP                                     ║
// ║           IMPORTANT: This allows your frontend to connect                   ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// CORS configuration - Allow frontend to make requests
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',      // Vite default
      'http://localhost:3000',      // React default
      'http://127.0.0.1:5173',
      'http://127.0.0.1:3000',
      config.frontendUrl            // From .env
    ];
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(null, true); // Allow all origins in development
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                            MIDDLEWARE                                       ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Request logging (development)
if (config.nodeEnv === 'development') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                              ROUTES                                         ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv
  });
});

// API routes
app.use('/api', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint nije pronađen.',
    messageEn: 'Endpoint not found.'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Interna greška servera.',
    messageEn: 'Internal server error.'
  });
});

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                         DATABASE & SERVER START                             ║
// ╚════════════════════════════════════════════════════════════════════════════╝

const startServer = async () => {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(config.mongoUri);
    console.log('✓ Connected to MongoDB');

    // Start server
    app.listen(config.port, () => {
      console.log(`\n════════════════════════════════════════════`);
      console.log(`  🚀 Server running on port ${config.port}`);
      console.log(`  📍 Environment: ${config.nodeEnv}`);
      console.log(`  🌐 Frontend URL: ${config.frontendUrl}`);
      console.log(`  📡 API URL: http://localhost:${config.port}/api`);
      console.log(`════════════════════════════════════════════\n`);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;