const jwt = require('jsonwebtoken');
const config = require('../config');

// POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email i lozinka su obavezni.',
        messageEn: 'Email and password are required.'
      });
    }
    
    // Check credentials against config (centralized)
    const isEmailValid = email.toLowerCase().trim() === config.admin.email.toLowerCase();
    const isPasswordValid = password === config.admin.password;
    
    if (!isEmailValid || !isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Pogrešan email ili lozinka.',
        messageEn: 'Invalid email or password.'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        email: config.admin.email, 
        name: config.admin.name,
        role: 'admin'
      },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );
    
    res.json({
      success: true,
      message: 'Uspešna prijava!',
      messageEn: 'Login successful!',
      data: {
        token,
        admin: { 
          name: config.admin.name, 
          email: config.admin.email 
        }
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri prijavi.',
      messageEn: 'Login error.'
    });
  }
};

// GET /api/auth/me - Get current admin info
exports.getMe = async (req, res) => {
  res.json({
    success: true,
    data: { 
      name: req.admin.name, 
      email: req.admin.email 
    }
  });
};

// POST /api/auth/logout
exports.logout = async (req, res) => {
  res.json({ 
    success: true, 
    message: 'Uspešna odjava.',
    messageEn: 'Logout successful.'
  });
};

// POST /api/auth/change-password (optional - for future use)
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Trenutna i nova lozinka su obavezne.',
        messageEn: 'Current and new password are required.'
      });
    }
    
    // Verify current password
    if (currentPassword !== config.admin.password) {
      return res.status(401).json({
        success: false,
        message: 'Pogrešna trenutna lozinka.',
        messageEn: 'Invalid current password.'
      });
    }
  
    res.status(501).json({
      success: false,
      message: 'Za promenu lozinke, ažurirajte ADMIN_PASSWORD u .env fajlu i restartujte server.',
      messageEn: 'To change password, update ADMIN_PASSWORD in .env file and restart server.'
    });
    
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri promeni lozinke.',
      messageEn: 'Error changing password.'
    });
  }
};
