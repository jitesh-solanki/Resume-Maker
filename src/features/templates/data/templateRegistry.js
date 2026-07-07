export const TEMPLATES = {
  // ===== PROFESSIONAL =====
  professional: {
    id: 'professional',
    name: 'Professional Accountant',
    description: 'Clean, professional template with header, about me, education, experience, and skills sections.',
    styles: ['professional', 'accountant', 'business'],
    bestFor: ['Accountant', 'Finance', 'Business Professional'],
    colors: ['#1a1a1a', '#ffffff', '#4a4a4a'],
    previewImage: '📊',
    component: 'ProfessionalTemplate'
  },
  
  // ===== MODERN =====
  modern: {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Contemporary design with accent colors, perfect for tech and creative roles.',
    styles: ['modern', 'color-accents', 'creative'],
    bestFor: ['Tech', 'Creative', 'Startup'],
    colors: ['#2563EB', '#7C3AED', '#EC4899'],
    previewImage: '🎨',
    component: 'ModernTemplate'
  },
  
  // ===== EXECUTIVE =====
  executive: {
    id: 'executive',
    name: 'Executive Suite',
    description: 'Premium design for leadership roles with sophisticated typography.',
    styles: ['premium', 'leadership', 'elegant'],
    bestFor: ['Executive', 'Director', 'C-Level'],
    colors: ['#0F172A', '#334155', '#1E293B'],
    previewImage: '👔',
    component: 'ExecutiveTemplate'
  },
  
  // ===== CREATIVE =====
  creative: {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Bold design for creative professionals with visual hierarchy.',
    styles: ['bold', 'asymmetric', 'visual'],
    bestFor: ['Design', 'Art', 'Marketing'],
    colors: ['#F59E0B', '#EF4444', '#10B981'],
    previewImage: '✨',
    component: 'CreativeTemplate'
  },
  
  // ===== MINIMAL =====
  minimal: {
    id: 'minimal',
    name: 'Minimal Clean',
    description: 'Ultra-minimal, clean design with focus on content. No colors, no decorations.',
    styles: ['minimal', 'clean', 'simple'],
    bestFor: ['Minimalists', 'Writers', 'Academics'],
    colors: ['#fafafa', '#1a1a1a', '#999'],
    previewImage: '⬜',
    component: 'MinimalCleanTemplate'
  },
  
  // ===== TWO COLUMN =====
  twoColumn: {
    id: 'twoColumn',
    name: 'Two-Column',
    description: 'Sidebar layout with contact and skills on left, main content on right.',
    styles: ['two-column', 'sidebar', 'structured'],
    bestFor: ['Experienced Professionals', 'Managers'],
    colors: ['#1a2a3a', '#ffffff', '#8aa0b8'],
    previewImage: '📋',
    component: 'TwoColumnTemplate'
  },
  
  // ===== TIMELINE =====
  timeline: {
    id: 'timeline',
    name: 'Timeline',
    description: 'Visual timeline layout with markers for education and experience.',
    styles: ['timeline', 'visual', 'chronological'],
    bestFor: ['Career Changers', 'Freelancers', 'Designers'],
    colors: ['#2563EB', '#ffffff', '#EFF6FF'],
    previewImage: '⏳',
    component: 'TimelineTemplate'
  },
  
  // ===== COMPACT =====
  compact: {
    id: 'compact',
    name: 'Compact Professional',
    description: 'Dense, information-rich layout with grid structure for maximum content.',
    styles: ['compact', 'dense', 'grid'],
    bestFor: ['Experienced Developers', 'Engineers', 'IT Professionals'],
    colors: ['#1a1a1a', '#ffffff', '#f0f0f0'],
    previewImage: '📐',
    component: 'CompactTemplate'
  }
}

export const TEMPLATE_CATEGORIES = {
  professional: ['professional'],
  modern: ['modern'],
  executive: ['executive'],
  creative: ['creative'],
  minimal: ['minimal'],
  twoColumn: ['twoColumn'],
  timeline: ['timeline'],
  compact: ['compact'],
  all: ['professional', 'modern', 'executive', 'creative', 'minimal', 'twoColumn', 'timeline', 'compact']
}

export const getTemplateById = (id) => {
  return TEMPLATES[id] || null
}

export const getAllTemplates = () => {
  return Object.values(TEMPLATES)
}

export const getTemplatesByCategory = (category) => {
  if (category === 'all') return getAllTemplates()
  const templateIds = TEMPLATE_CATEGORIES[category] || []
  return templateIds.map(id => TEMPLATES[id]).filter(Boolean)
}

// Get template fields configuration
export const getTemplateFields = (templateId) => {
  const fields = {
    // ===== PROFESSIONAL FIELDS =====
    professional: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'SEBASTIAN BENNETT' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'Professional Accountant' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'hello@reallygreatsite.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+123-456-7890' },
        address: { type: 'text', label: 'Address', required: false, placeholder: '123 Anywhere St., Any City' },
        summary: { type: 'textarea', label: 'About Me', required: true, rows: 5, placeholder: 'Write a professional summary...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Borcelle University' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'Senior Accountant' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2026-2030' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Work Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Salford & Co.' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Senior Accountant' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: '2033' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: '2035' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your responsibilities...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== MODERN FIELDS =====
    modern: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'Sarah Johnson' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'Creative Developer' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'sarah@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 234 567 8900' },
        location: { type: 'text', label: 'Location', required: false, placeholder: 'San Francisco, CA' },
        website: { type: 'text', label: 'Portfolio URL', required: false, placeholder: 'sarahjohnson.dev' },
        summary: { type: 'textarea', label: 'Bio', required: true, rows: 4, placeholder: 'Write your bio...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Stanford University' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'BS in Computer Science' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2018-2022' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Corp' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Front-End Developer' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2023' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== EXECUTIVE FIELDS =====
    executive: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'Dr. Robert Taylor' },
        title: { type: 'text', label: 'Title', required: true, placeholder: 'Chief Technology Officer' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'robert@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 617 555 4321' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'Boston, MA' },
        linkedin: { type: 'text', label: 'LinkedIn', required: false, placeholder: 'linkedin.com/in/roberttaylor' },
        summary: { type: 'textarea', label: 'Executive Summary', required: true, rows: 5, placeholder: 'Write your executive summary...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Harvard University' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'PhD in Computer Science' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2005-2010' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Innovations Inc.' },
          { name: 'title', label: 'Position', type: 'text', placeholder: 'Chief Technology Officer' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2018' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Core Competencies',
        placeholder: 'Add a competency...'
      }
    },

    // ===== CREATIVE FIELDS =====
    creative: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'Emma Rodriguez' },
        title: { type: 'text', label: 'Title', required: true, placeholder: 'UI/UX Designer & Developer' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'emma@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 310 555 6789' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'Los Angeles, CA' },
        linkedin: { type: 'text', label: 'LinkedIn', required: false, placeholder: 'linkedin.com/in/emmarodriguez' },
        website: { type: 'text', label: 'Portfolio', required: false, placeholder: 'emmarodriguez.design' },
        summary: { type: 'textarea', label: 'About Me', required: true, rows: 4, placeholder: 'Write your creative bio...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'ArtCenter College of Design' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'BFA in Interactive Design' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2019-2023' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Creative Agency' },
          { name: 'title', label: 'Position', type: 'text', placeholder: 'UI/UX Designer' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2024' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== MINIMAL FIELDS =====
    minimal: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'James Wilson' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'Technical Writer' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'james@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 555 123 4567' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'Portland, OR' },
        summary: { type: 'textarea', label: 'About Me', required: true, rows: 4, placeholder: 'Write a professional summary...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'University of Oregon' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'BA in English' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2015-2019' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'TechDocs Inc.' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Senior Technical Writer' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2021' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== TWO COLUMN FIELDS =====
    twoColumn: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'David Park' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'Product Manager' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'david@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 312 555 8901' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'Chicago, IL' },
        linkedin: { type: 'text', label: 'LinkedIn', required: false, placeholder: 'linkedin.com/in/davidpark' },
        summary: { type: 'textarea', label: 'Profile', required: true, rows: 4, placeholder: 'Write your profile...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Northwestern University' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'MBA' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2014-2016' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'SaaS Solutions Inc.' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Senior Product Manager' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2020' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== TIMELINE FIELDS =====
    timeline: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'Maria Santos' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'UX Researcher' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'maria@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 512 555 3456' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'Austin, TX' },
        linkedin: { type: 'text', label: 'LinkedIn', required: false, placeholder: 'linkedin.com/in/mariasantos' },
        summary: { type: 'textarea', label: 'About Me', required: true, rows: 4, placeholder: 'Write your professional summary...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'University of Texas' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'MS in Human-Computer Interaction' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2018-2020' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Design Research Labs' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'UX Researcher' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jul 2020' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      }
    },

    // ===== COMPACT FIELDS =====
    compact: {
      personal: {
        fullName: { type: 'text', label: 'Full Name', required: true, placeholder: 'Alex Rivera' },
        title: { type: 'text', label: 'Job Title', required: true, placeholder: 'Full Stack Engineer' },
        email: { type: 'email', label: 'Email', required: true, placeholder: 'alex@example.com' },
        phone: { type: 'tel', label: 'Phone', required: true, placeholder: '+1 415 555 7890' },
        address: { type: 'text', label: 'Location', required: false, placeholder: 'San Francisco, CA' },
        linkedin: { type: 'text', label: 'LinkedIn', required: false, placeholder: 'linkedin.com/in/alexrivera' },
        github: { type: 'text', label: 'GitHub', required: false, placeholder: 'github.com/alexrivera' },
        summary: { type: 'textarea', label: 'Summary', required: true, rows: 3, placeholder: 'Write your professional summary...' }
      },
      education: {
        type: 'repeater',
        label: 'Education',
        fields: [
          { name: 'institution', label: 'Institution', type: 'text', placeholder: 'Stanford University' },
          { name: 'degree', label: 'Degree', type: 'text', placeholder: 'BS in Computer Science' },
          { name: 'year', label: 'Year Range', type: 'text', placeholder: '2014-2018' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your education...' }
        ]
      },
      experience: {
        type: 'repeater',
        label: 'Experience',
        fields: [
          { name: 'company', label: 'Company', type: 'text', placeholder: 'Tech Solutions Inc.' },
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Senior Full Stack Engineer' },
          { name: 'startDate', label: 'Start Date', type: 'text', placeholder: 'Jan 2021' },
          { name: 'endDate', label: 'End Date', type: 'text', placeholder: 'Present' },
          { name: 'current', label: 'I currently work here', type: 'checkbox' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your experience...' }
        ]
      },
      skills: {
        type: 'tags',
        label: 'Skills',
        placeholder: 'Add a skill...'
      },
      projects: {
        type: 'repeater',
        label: 'Projects',
        fields: [
          { name: 'name', label: 'Project Name', type: 'text', placeholder: 'Project Name' },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your project...' },
          { name: 'link', label: 'Link', type: 'text', placeholder: 'Project URL' }
        ]
      }
    }
  }
  return fields[templateId] || fields.professional
}