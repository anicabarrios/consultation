const express = require('express');
const router = express.Router();

// Import controllers
const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');

// Import middleware
const { protect } = require('../middleware/auth');

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                          PUBLIC ROUTES                                      ║
// ║                    (No authentication required)                             ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Anyone can submit a question
router.post('/questions', questionController.submitQuestion);

// Anyone can view published questions
router.get('/questions', questionController.getQuestions);

// Anyone can view a single published question
router.get('/questions/:id', questionController.getQuestion);


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                          AUTH ROUTES                                        ║
// ║                    (For admin login/logout)                                 ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Admin login - returns JWT token
router.post('/auth/login', authController.login);

// Admin logout
router.post('/auth/logout', authController.logout);

// Get current admin info (protected)
router.get('/auth/me', protect, authController.getMe);

// Change password (protected)
router.post('/auth/change-password', protect, authController.changePassword);


// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                     ADMIN ROUTES (Protected)                                ║
// ║              (Only authenticated admin can access)                          ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// Get all questions (including unpublished, with emails)
router.get('/admin/questions', protect, questionController.getAdminQuestions);

// Answer a question - ONLY admin can do this
router.patch('/admin/questions/:id/answer', protect, questionController.answerQuestion);

// Toggle question visibility - ONLY admin can do this
router.patch('/admin/questions/:id/toggle', protect, questionController.togglePublish);

// Delete a question - ONLY admin can do this
router.delete('/admin/questions/:id', protect, questionController.deleteQuestion);


module.exports = router;
