const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  // From visitor
  name: {
    type: String,
    required: [true, 'Ime je obavezno'],
    trim: true,
    maxlength: [100, 'Ime ne može biti duže od 100 karaktera']
  },
  email: {
    type: String,
    required: [true, 'Email je obavezan'],
    trim: true,
    lowercase: true
  },
  
  // Question in both languages
  question: {
    sr: { 
      type: String, 
      required: [true, 'Pitanje je obavezno'],
      trim: true 
    },
    en: { 
      type: String, 
      trim: true,
      default: '' 
    }
  },
  
  // Answer from admin (in both languages)
  answer: {
    sr: { type: String, trim: true, default: '' },
    en: { type: String, trim: true, default: '' }
  },
  
  // Category (in both languages)
  category: {
    sr: { type: String, trim: true, default: '' },
    en: { type: String, trim: true, default: '' }
  },
  
  // Status
  isAnswered: {
    type: Boolean,
    default: false
  },
  isPublished: {
    type: Boolean,
    default: true  
  },
  answeredAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Format for frontend - PUBLIC view (all users)
questionSchema.methods.toPublic = function(lang = 'sr') {
  return {
    id: this._id,
    name: this.name,
    question: this.question[lang] || this.question.sr,
    answer: this.isAnswered ? (this.answer[lang] || this.answer.sr) : null,
    category: this.isAnswered ? (this.category[lang] || this.category.sr) : null,
    isAnswered: this.isAnswered,
    status: this.isAnswered ? 'answered' : 'pending',
    date: this.createdAt.toISOString().split('T')[0],
    answeredAt: this.answeredAt ? this.answeredAt.toISOString().split('T')[0] : null
  };
};

// Format for admin 
questionSchema.methods.toAdmin = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    question: this.question,
    answer: this.answer,
    category: this.category,
    isAnswered: this.isAnswered,
    isPublished: this.isPublished,
    createdAt: this.createdAt,
    answeredAt: this.answeredAt
  };
};

module.exports = mongoose.model('Question', questionSchema);