export const validatePersonalInfo = (data) => {
  const errors = {}
  
  if (!data.fullName?.trim()) {
    errors.fullName = 'Full name is required'
  } else if (data.fullName.length < 2) {
    errors.fullName = 'Name must be at least 2 characters'
  }
  
  if (!data.email?.trim()) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email is invalid'
  }
  
  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(data.phone)) {
    errors.phone = 'Phone number is invalid'
  }
  
  return errors
}

export const validateEducation = (data) => {
  const errors = {}
  
  if (!data.degree?.trim()) {
    errors.degree = 'Degree is required'
  }
  
  if (!data.institution?.trim()) {
    errors.institution = 'Institution is required'
  }
  
  if (!data.year?.trim()) {
    errors.year = 'Year is required'
  }
  
  return errors
}

export const validateExperience = (data) => {
  const errors = {}
  
  if (!data.title?.trim()) {
    errors.title = 'Job title is required'
  }
  
  if (!data.company?.trim()) {
    errors.company = 'Company name is required'
  }
  
  if (!data.startDate) {
    errors.startDate = 'Start date is required'
  }
  
  if (!data.current && !data.endDate) {
    errors.endDate = 'End date is required'
  }
  
  return errors
}

export const validateResumeComplete = (resume) => {
  const sections = []
  
  if (!resume.personal?.fullName || !resume.personal?.email || !resume.personal?.phone) {
    sections.push('Personal Information')
  }
  
  if (!resume.education?.length) {
    sections.push('Education')
  }
  
  if (!resume.experience?.length) {
    sections.push('Work Experience')
  }
  
  if (!resume.skills?.length) {
    sections.push('Skills')
  }
  
  return {
    isComplete: sections.length === 0,
    missingSections: sections,
    message: sections.length 
      ? `Complete these sections: ${sections.join(', ')}`
      : 'Your resume is complete!'
  }
}

export const formatValidationErrors = (errors) => {
  return Object.values(errors).filter(Boolean).join(', ')
}