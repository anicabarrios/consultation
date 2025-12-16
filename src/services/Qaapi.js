const API_BASE_URL = '/api';

/**
 * Custom fetch wrapper with error handling
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || 'Došlo je do greške',
        messageEn: data.messageEn || 'An error occurred',
        data
      };
    }

    return data;
  } catch (error) {
    if (error.status) {
      throw error;
    }
    throw {
      status: 0,
      message: 'Greška pri povezivanju sa serverom',
      messageEn: 'Error connecting to server',
      originalError: error
    };
  }
};


/**
 * Submit a new question (Public - anyone can ask)
 */
export const submitQuestion = async (questionData) => {
  return apiRequest('/questions', {
    method: 'POST',
    body: JSON.stringify(questionData),
  });
};

/**
 * Get all published questions (Public - anyone can view)
 * @param {string} lang - Language code ('sr' or 'en')
 */
export const getQuestions = async (lang = 'sr') => {
  return apiRequest(`/questions?lang=${lang}`);
};

/**
 * Get a single question by ID (Public)
 * @param {string} id - Question ID
 * @param {string} lang - Language code
 */
export const getQuestion = async (id, lang = 'sr') => {
  return apiRequest(`/questions/${id}?lang=${lang}`);
};

// ==================== AUTH API ====================

/**
 * Admin login
 */
export const login = async (email, password) => {
  const response = await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  
  if (response.success && response.data?.token) {
    localStorage.setItem('adminToken', response.data.token);
    localStorage.setItem('adminName', response.data.admin?.name || 'Admin');
  }
  
  return response;
};

/**
 * Admin logout
 */
export const logout = async () => {
  try {
    await apiRequest('/auth/logout', { method: 'POST' });
  } finally {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
  }
};

/**
 * Get current admin info
 */
export const getMe = async () => {
  return apiRequest('/auth/me');
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('adminToken');
};

/**
 * Get stored admin name
 */
export const getAdminName = () => {
  return localStorage.getItem('adminName') || 'Admin';
};

// ==================== ADMIN API ====================

/**
 * Get all questions for admin (including unpublished)
 */
export const getAdminQuestions = async () => {
  return apiRequest('/admin/questions');
};

/**
 * Answer a question (Admin only)
 */
export const answerQuestion = async (id, answerData) => {
  return apiRequest(`/admin/questions/${id}/answer`, {
    method: 'PATCH',
    body: JSON.stringify(answerData),
  });
};

/**
 * Toggle question visibility (Admin only)
 */
export const toggleQuestionPublish = async (id) => {
  return apiRequest(`/admin/questions/${id}/toggle`, {
    method: 'PATCH',
  });
};

/**
 * Delete a question (Admin only)
 */
export const deleteQuestion = async (id) => {
  return apiRequest(`/admin/questions/${id}`, {
    method: 'DELETE',
  });
};

// ==================== UTILITY ====================

/**
 * Check API health
 */
export const checkHealth = async () => {
  try {
    const response = await fetch('/api/health');
    return response.ok;
  } catch {
    return false;
  }
};

export default {
  // Public
  submitQuestion,
  getQuestions,
  getQuestion,
  // Auth
  login,
  logout,
  getMe,
  isAuthenticated,
  getAdminName,
  // Admin
  getAdminQuestions,
  answerQuestion,
  toggleQuestionPublish,
  deleteQuestion,
  // Utility
  checkHealth,
  API_BASE_URL,
};
