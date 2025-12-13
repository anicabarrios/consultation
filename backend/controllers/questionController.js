const { Question } = require('../models');

// POST /api/questions - Submit question (Public - anyone can ask)
exports.submitQuestion = async (req, res) => {
  try {
    const { name, email, question } = req.body;
    
    if (!name || !email || !question) {
      return res.status(400).json({
        success: false,
        message: 'Sva polja su obavezna (ime, email, pitanje).',
        messageEn: 'All fields are required (name, email, question).'
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Unesite validnu email adresu.',
        messageEn: 'Please enter a valid email address.'
      });
    }
    
    const newQuestion = await Question.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      question: { sr: question.trim(), en: '' },
      isAnswered: false,
      isPublished: true
    });
    
    res.status(201).json({
      success: true,
      message: 'Hvala! Vaše pitanje je uspešno poslato.',
      messageEn: 'Thank you! Your question has been successfully submitted.',
      data: newQuestion.toPublic('sr')
    });
    
  } catch (error) {
    console.error('Submit question error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri slanju pitanja.',
      messageEn: 'Error submitting question.'
    });
  }
};

// GET /api/questions - Get all public questions (anyone can view)
exports.getQuestions = async (req, res) => {
  try {
    const lang = req.query.lang || 'sr';
    const questions = await Question.find({ isPublished: true })
      .sort({ isAnswered: -1, answeredAt: -1, createdAt: -1 });
    
    const formatted = questions.map(q => q.toPublic(lang));
    const answered = formatted.filter(q => q.isAnswered);
    const pending = formatted.filter(q => !q.isAnswered);
    
    res.json({
      success: true,
      data: {
        all: formatted,
        answered,
        pending,
        counts: { 
          total: formatted.length, 
          answered: answered.length, 
          pending: pending.length 
        }
      }
    });
    
  } catch (error) {
    console.error('Get questions error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri učitavanju pitanja.',
      messageEn: 'Error loading questions.'
    });
  }
};

// GET /api/questions/:id - Get single question (public)
exports.getQuestion = async (req, res) => {
  try {
    const lang = req.query.lang || 'sr';
    const question = await Question.findById(req.params.id);
    
    if (!question || !question.isPublished) {
      return res.status(404).json({ 
        success: false, 
        message: 'Pitanje nije pronađeno.',
        messageEn: 'Question not found.'
      });
    }
    
    res.json({ success: true, data: question.toPublic(lang) });
    
  } catch (error) {
    console.error('Get question error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri učitavanju pitanja.',
      messageEn: 'Error loading question.'
    });
  }
};

// ==================== ADMIN ONLY ROUTES ====================

// GET /api/admin/questions - Get all for admin (PROTECTED)
exports.getAdminQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .sort({ isAnswered: 1, createdAt: -1 });
    const formatted = questions.map(q => q.toAdmin());
    
    res.json({
      success: true,
      data: {
        all: formatted,
        counts: {
          total: formatted.length,
          answered: formatted.filter(q => q.isAnswered).length,
          pending: formatted.filter(q => !q.isAnswered).length,
          published: formatted.filter(q => q.isPublished).length,
          hidden: formatted.filter(q => !q.isPublished).length
        }
      }
    });
    
  } catch (error) {
    console.error('Admin get questions error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri učitavanju pitanja.',
      messageEn: 'Error loading questions.'
    });
  }
};

// PATCH /api/admin/questions/:id/answer - Answer question (PROTECTED - admin only)
exports.answerQuestion = async (req, res) => {
  try {
    const { answer, category, question: editedQuestion } = req.body;
    
    if (!answer || (!answer.sr && !answer.en)) {
      return res.status(400).json({
        success: false,
        message: 'Odgovor je obavezan (bar na jednom jeziku).',
        messageEn: 'Answer is required (at least in one language).'
      });
    }
    
    const updateData = {
      answer: { 
        sr: answer.sr || answer.en || '', 
        en: answer.en || answer.sr || '' 
      },
      category: { 
        sr: category?.sr || '', 
        en: category?.en || '' 
      },
      isAnswered: true,
      answeredAt: new Date()
    };
    
    // Allow admin to edit the question text if needed
    if (editedQuestion) {
      updateData.question = {
        sr: editedQuestion.sr || editedQuestion.en,
        en: editedQuestion.en || editedQuestion.sr
      };
    }
    
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!updatedQuestion) {
      return res.status(404).json({ 
        success: false, 
        message: 'Pitanje nije pronađeno.',
        messageEn: 'Question not found.'
      });
    }
    
    res.json({
      success: true,
      message: 'Odgovor je uspešno sačuvan!',
      messageEn: 'Answer saved successfully!',
      data: updatedQuestion.toAdmin()
    });
    
  } catch (error) {
    console.error('Answer question error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri čuvanju odgovora.',
      messageEn: 'Error saving answer.'
    });
  }
};

// PATCH /api/admin/questions/:id/toggle - Toggle visibility (PROTECTED - admin only)
exports.togglePublish = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    
    if (!question) {
      return res.status(404).json({ 
        success: false, 
        message: 'Pitanje nije pronađeno.',
        messageEn: 'Question not found.'
      });
    }
    
    question.isPublished = !question.isPublished;
    await question.save();
    
    res.json({
      success: true,
      message: question.isPublished ? 'Pitanje je objavljeno.' : 'Pitanje je skriveno.',
      messageEn: question.isPublished ? 'Question published.' : 'Question hidden.',
      data: question.toAdmin()
    });
    
  } catch (error) {
    console.error('Toggle publish error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri menjanju statusa.',
      messageEn: 'Error changing status.'
    });
  }
};

// DELETE /api/admin/questions/:id - Delete question (PROTECTED - admin only)
exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    
    if (!question) {
      return res.status(404).json({ 
        success: false, 
        message: 'Pitanje nije pronađeno.',
        messageEn: 'Question not found.'
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Pitanje je uspešno obrisano.',
      messageEn: 'Question deleted successfully.'
    });
    
  } catch (error) {
    console.error('Delete question error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Greška pri brisanju pitanja.',
      messageEn: 'Error deleting question.'
    });
  }
};
