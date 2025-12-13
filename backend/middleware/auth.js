const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Protect routes - verify JWT token
 * Only allows access if valid admin token is present
 */
const protect = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Pristup odbijen. Prijavite se.',
        messageEn: 'Access denied. Please login.'
      });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token nije pronađen.',
        messageEn: 'Token not found.'
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    
    // Check if it's the admin email (using config)
    if (decoded.email.toLowerCase() !== config.admin.email.toLowerCase()) {
      return res.status(401).json({
        success: false,
        message: 'Nevažeći pristup.',
        messageEn: 'Invalid access.'
      });
    }
    
    // Attach admin info to request
    req.admin = {
      email: config.admin.email,
      name: config.admin.name
    };
    
    next();
    
  } catch (error) {
    console.error('Auth middleware error:', error.message);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Nevažeći token.',
        messageEn: 'Invalid token.'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token je istekao. Prijavite se ponovo.',
        messageEn: 'Token expired. Please login again.'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Greška pri autentifikaciji.',
      messageEn: 'Authentication error.'
    });
  }
};

module.exports = { protect };
