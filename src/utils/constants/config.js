export const APP_CONFIG = {
  name: 'Resume Maker',
  version: '1.0.0',
  description: 'Create professional resumes online',
  author: 'Resume Maker Team',
  email: 'support@resumemaker.com',
  website: 'https://resumemaker.com'
}

export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const PDF_CONFIG = {
  pageSize: 'A4',
  orientation: 'portrait',
  margins: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  },
  fonts: {
    heading: 'Helvetica-Bold',
    body: 'Helvetica'
  }
}

export const STORAGE_KEYS = {
  RESUME_DATA: 'resume-storage',
  USER_TOKEN: 'auth-token',
  USER_DATA: 'user-data',
  THEME: 'app-theme',
  SETTINGS: 'app-settings'
}

export const FORM_VALIDATION = {
  maxNameLength: 100,
  maxEmailLength: 100,
  maxPhoneLength: 20,
  maxAddressLength: 200,
  maxSummaryLength: 500,
  maxSkillLength: 50,
  maxSkillsCount: 20,
  maxExperienceCount: 10,
  maxEducationCount: 10
}

export const TEMPLATE_STYLES = {
  modern: {
    id: 'modern',
    name: 'Modern',
    primaryColor: '#3B82F6',
    secondaryColor: '#1E293B',
    fontFamily: 'Inter, sans-serif'
  },
  professional: {
    id: 'professional',
    name: 'Professional',
    primaryColor: '#1E293B',
    secondaryColor: '#475569',
    fontFamily: 'Georgia, serif'
  },
  creative: {
    id: 'creative',
    name: 'Creative',
    primaryColor: '#8B5CF6',
    secondaryColor: '#EC4899',
    fontFamily: 'Poppins, sans-serif'
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    primaryColor: '#000000',
    secondaryColor: '#4B5563',
    fontFamily: 'Arial, sans-serif'
  }
}