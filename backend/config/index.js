// config/index.js
const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/ilic-law-qa',
  jwtSecret: process.env.JWT_SECRET || 'ilic-law-secret-key-2024',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  
  // Admin credentials - REQUIRED for authentication
  admin: {
    email: process.env.ADMIN_EMAIL || 'suzanailic@gmail.com',
    password: process.env.ADMIN_PASSWORD || 'Advokat123',
    name: process.env.ADMIN_NAME || 'Suzana Ilić'
  }
};

module.exports = config;
