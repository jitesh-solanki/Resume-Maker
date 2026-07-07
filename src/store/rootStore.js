import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getAllTemplates, getTemplateFields, getTemplateById } from '../features/templates/data/templateRegistry'

// Empty default data - user starts fresh
const defaultResumeData = {
  personal: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    github: '',
    summary: ''
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certifications: [],
  achievements: [],
  languages: [],
  softSkills: []
}

// Default sections configuration
const defaultSections = {
  header: { enabled: true, order: 0 },
  summary: { enabled: true, order: 1 },
  skills: { enabled: true, order: 2 },
  experience: { enabled: true, order: 3 },
  projects: { enabled: true, order: 4 },
  education: { enabled: true, order: 5 },
  certifications: { enabled: false, order: 6 },
  achievements: { enabled: false, order: 7 },
  languages: { enabled: false, order: 8 },
  softSkills: { enabled: false, order: 9 }
}

// Sample data for each template
const templateSampleData = {
  // ===== PROFESSIONAL =====
  professional: {
    personal: {
      fullName: 'SEBASTIAN BENNETT',
      title: 'Professional Accountant',
      email: 'hello@reallygreatsite.com',
      phone: '+123-456-7890',
      address: '123 Anywhere St., Any City',
      linkedin: '',
      github: '',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    education: [
      {
        id: 1,
        institution: 'Borcelle University',
        degree: 'Senior Accountant',
        year: '2026-2030',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        institution: 'Borcelle University',
        degree: 'Senior Accountant',
        year: '2023-2026',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Salford & Co.',
        title: 'Senior Accountant',
        startDate: '2033',
        endDate: '2035',
        current: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        company: 'Salford & Co.',
        title: 'Financial Accountant',
        startDate: '2030',
        endDate: '2033',
        current: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    skills: ['Auditing', 'Financial Accounting', 'Financial Reporting'],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== MODERN =====
  modern: {
    personal: {
      fullName: 'Sarah Johnson',
      title: 'Creative Developer',
      email: 'sarah.johnson@example.com',
      phone: '+1 234 567 8900',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/sarahjohnson',
      github: 'github.com/sarahjohnson',
      summary: 'Creative Front-End Developer with 3+ years of experience building modern web applications. Passionate about creating beautiful, responsive interfaces with excellent user experiences.'
    },
    education: [
      {
        id: 1,
        institution: 'Stanford University',
        degree: 'BS in Computer Science',
        year: '2018 - 2022',
        description: 'Graduated with honors, specialized in Human-Computer Interaction.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Tech Corp',
        title: 'Front-End Developer',
        startDate: 'Jan 2023',
        endDate: 'Present',
        current: true,
        description: 'Building responsive web applications using React and Tailwind CSS. Collaborating with designers to implement pixel-perfect designs.'
      }
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'],
    projects: [
      {
        id: 1,
        name: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        link: '#'
      }
    ],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== EXECUTIVE =====
  executive: {
    personal: {
      fullName: 'Dr. Robert Taylor',
      title: 'Chief Technology Officer',
      email: 'robert.taylor@example.com',
      phone: '+1 617 555 4321',
      address: 'Boston, MA',
      linkedin: 'linkedin.com/in/roberttaylor',
      github: 'github.com/roberttaylor',
      summary: 'Visionary technology leader with 15+ years of experience driving digital transformation and building high-performing engineering teams. Expertise in cloud architecture, AI/ML strategy, and product development.'
    },
    education: [
      {
        id: 1,
        institution: 'Harvard University',
        degree: 'PhD in Computer Science',
        year: '2005 - 2010',
        description: 'Research focus on distributed systems and cloud computing.'
      },
      {
        id: 2,
        institution: 'Stanford University',
        degree: 'MBA',
        year: '2011 - 2013',
        description: 'Focus on technology management and innovation strategy.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Tech Innovations Inc.',
        title: 'Chief Technology Officer',
        startDate: 'Jan 2018',
        endDate: 'Present',
        current: true,
        description: 'Leading technology strategy and overseeing engineering teams of 100+ members. Driving innovation and digital transformation across the organization.'
      },
      {
        id: 2,
        company: 'Enterprise Solutions',
        title: 'VP of Engineering',
        startDate: 'Jun 2013',
        endDate: 'Dec 2017',
        current: false,
        description: 'Managed multiple engineering teams and delivered enterprise-scale solutions.'
      }
    ],
    skills: ['Strategic Planning', 'Team Leadership', 'Cloud Architecture', 'AI/ML Strategy', 'Product Development'],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== CREATIVE =====
  creative: {
    personal: {
      fullName: 'Emma Rodriguez',
      title: 'UI/UX Designer & Developer',
      email: 'emma.rodriguez@example.com',
      phone: '+1 310 555 6789',
      address: 'Los Angeles, CA',
      linkedin: 'linkedin.com/in/emmarodriguez',
      github: 'github.com/emmarodriguez',
      summary: 'Creative UI/UX Designer and Front-End Developer with a passion for creating beautiful, intuitive interfaces that users love. Experienced in design systems, prototyping, and user research.'
    },
    education: [
      {
        id: 1,
        institution: 'ArtCenter College of Design',
        degree: 'BFA in Interactive Design',
        year: '2019 - 2023',
        description: 'Focus on UX/UI design, interaction design, and digital product development.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Creative Agency',
        title: 'UI/UX Designer',
        startDate: 'Jan 2024',
        endDate: 'Present',
        current: true,
        description: 'Designing and developing creative web experiences for high-profile clients. Creating design systems and interactive prototypes.'
      }
    ],
    skills: ['Figma', 'Adobe XD', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js'],
    projects: [
      {
        id: 1,
        name: 'Portfolio Website',
        description: 'Award-winning portfolio with 3D animations',
        link: '#'
      },
      {
        id: 2,
        name: 'Design System',
        description: 'Comprehensive design system for enterprise applications',
        link: '#'
      }
    ],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== MINIMAL =====
  minimal: {
    personal: {
      fullName: 'James Wilson',
      title: 'Technical Writer',
      email: 'james.wilson@example.com',
      phone: '+1 555 123 4567',
      address: 'Portland, OR',
      linkedin: '',
      github: '',
      summary: 'Technical writer with 5+ years of experience creating clear, concise documentation for software products. Expert at translating complex technical concepts into accessible content.'
    },
    education: [
      {
        id: 1,
        institution: 'University of Oregon',
        degree: 'BA in English',
        year: '2015 - 2019',
        description: 'Focus on technical writing and digital communication.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'TechDocs Inc.',
        title: 'Senior Technical Writer',
        startDate: 'Jan 2021',
        endDate: 'Present',
        current: true,
        description: 'Creating API documentation, user guides, and developer tutorials for enterprise software products.'
      },
      {
        id: 2,
        company: 'DevTools Corp',
        title: 'Technical Writer',
        startDate: 'Jun 2019',
        endDate: 'Dec 2020',
        current: false,
        description: 'Documented SDKs and developer tools for a rapidly growing startup.'
      }
    ],
    skills: ['Technical Writing', 'API Documentation', 'Markdown', 'Git', 'DITA', 'HTML/CSS'],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== TWO COLUMN =====
  twoColumn: {
    personal: {
      fullName: 'David Park',
      title: 'Product Manager',
      email: 'david.park@example.com',
      phone: '+1 312 555 8901',
      address: 'Chicago, IL',
      linkedin: 'linkedin.com/in/davidpark',
      github: '',
      summary: 'Product Manager with 8+ years of experience in B2B SaaS products. Proven track record of launching successful products from concept to market, driving revenue growth and user adoption.'
    },
    education: [
      {
        id: 1,
        institution: 'Northwestern University',
        degree: 'MBA',
        year: '2014 - 2016',
        description: 'Focus on product management and marketing strategy.'
      },
      {
        id: 2,
        institution: 'University of Michigan',
        degree: 'BS in Computer Science',
        year: '2008 - 2012',
        description: 'Minor in Business Administration.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'SaaS Solutions Inc.',
        title: 'Senior Product Manager',
        startDate: 'Jan 2020',
        endDate: 'Present',
        current: true,
        description: 'Leading product strategy and roadmap for enterprise SaaS platform with 500+ clients. Increased revenue by 40% through successful product launches.'
      },
      {
        id: 2,
        company: 'TechStart',
        title: 'Product Manager',
        startDate: 'Jun 2016',
        endDate: 'Dec 2019',
        current: false,
        description: 'Managed product lifecycle for B2B analytics product from MVP to market leadership.'
      }
    ],
    skills: ['Product Strategy', 'Agile Methodology', 'User Research', 'Roadmapping', 'Data Analytics', 'Market Analysis'],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== TIMELINE =====
  timeline: {
    personal: {
      fullName: 'Maria Santos',
      title: 'UX Researcher',
      email: 'maria.santos@example.com',
      phone: '+1 512 555 3456',
      address: 'Austin, TX',
      linkedin: 'linkedin.com/in/mariasantos',
      github: '',
      summary: 'UX Researcher specializing in user-centered design and human-computer interaction. Passionate about creating accessible, inclusive digital experiences that make a meaningful impact.'
    },
    education: [
      {
        id: 1,
        institution: 'University of Texas',
        degree: 'MS in Human-Computer Interaction',
        year: '2018 - 2020',
        description: 'Research focus on accessibility and inclusive design for diverse user populations.'
      },
      {
        id: 2,
        institution: 'University of California',
        degree: 'BA in Psychology',
        year: '2014 - 2018',
        description: 'Focus on cognitive psychology and human behavior research methods.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Design Research Labs',
        title: 'UX Researcher',
        startDate: 'Jul 2020',
        endDate: 'Present',
        current: true,
        description: 'Conducting user research, usability testing, and ethnographic studies for Fortune 500 clients.'
      },
      {
        id: 2,
        company: 'UserFirst Design',
        title: 'Junior UX Researcher',
        startDate: 'Jun 2019',
        endDate: 'Jun 2020',
        current: false,
        description: 'Assisted in user research studies and contributed to design recommendations for various products.'
      }
    ],
    skills: ['User Research', 'Usability Testing', 'Qualitative Research', 'Quantitative Analysis', 'Figma', 'User Interviews'],
    projects: [],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  },

  // ===== COMPACT =====
  compact: {
    personal: {
      fullName: 'Alex Rivera',
      title: 'Full Stack Engineer',
      email: 'alex.rivera@example.com',
      phone: '+1 415 555 7890',
      address: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/alexrivera',
      github: 'github.com/alexrivera',
      summary: 'Full Stack Engineer with 6+ years of experience building scalable web applications and microservices. Expertise in React, Node.js, and cloud infrastructure with a focus on performance optimization.'
    },
    education: [
      {
        id: 1,
        institution: 'Stanford University',
        degree: 'BS in Computer Science',
        year: '2014 - 2018',
        description: 'Focus on distributed systems and web development.'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        title: 'Senior Full Stack Engineer',
        startDate: 'Jan 2021',
        endDate: 'Present',
        current: true,
        description: 'Building and maintaining microservices architecture for enterprise applications serving 1M+ users.'
      },
      {
        id: 2,
        company: 'Startup Labs',
        title: 'Full Stack Developer',
        startDate: 'Jun 2018',
        endDate: 'Dec 2020',
        current: false,
        description: 'Developed full-stack applications for early-stage startups from MVP to production.'
      }
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    projects: [
      {
        id: 1,
        name: 'Real-Time Analytics Platform',
        description: 'Built real-time analytics dashboard with WebSocket and Redis',
        link: '#'
      },
      {
        id: 2,
        name: 'E-Commerce Microservices',
        description: 'Designed and implemented microservices architecture for e-commerce',
        link: '#'
      }
    ],
    certifications: [],
    achievements: [],
    languages: [],
    softSkills: []
  }
}

// Get sample data for a specific template
const getSampleDataForTemplate = (templateId) => {
  if (templateSampleData[templateId]) {
    return templateSampleData[templateId]
  }
  return defaultResumeData
}

export const useResumeStore = create(
  persist(
    (set, get) => ({
      // Resume Data State
      resume: defaultResumeData,
      
      // Template State
      selectedTemplate: 'professional',
      
      // Section Configuration
      sections: defaultSections,
      
      // UI State
      isLoading: false,
      activeSection: 'personal',
      
      // Actions - Personal Info
      updatePersonalInfo: (data) => set((state) => ({
        resume: {
          ...state.resume,
          personal: { ...state.resume.personal, ...data }
        }
      })),
      
      // Actions - Education
      addEducation: (education) => set((state) => ({
        resume: {
          ...state.resume,
          education: [...state.resume.education, { ...education, id: Date.now() }]
        }
      })),
      
      updateEducation: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          education: state.resume.education.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeEducation: (index) => set((state) => ({
        resume: {
          ...state.resume,
          education: state.resume.education.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Experience
      addExperience: (experience) => set((state) => ({
        resume: {
          ...state.resume,
          experience: [...state.resume.experience, { ...experience, id: Date.now() }]
        }
      })),
      
      updateExperience: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          experience: state.resume.experience.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeExperience: (index) => set((state) => ({
        resume: {
          ...state.resume,
          experience: state.resume.experience.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Skills
      addSkill: (skill) => set((state) => ({
        resume: {
          ...state.resume,
          skills: [...state.resume.skills, skill]
        }
      })),
      
      removeSkill: (index) => set((state) => ({
        resume: {
          ...state.resume,
          skills: state.resume.skills.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Projects
      addProject: (project) => set((state) => ({
        resume: {
          ...state.resume,
          projects: [...state.resume.projects, { ...project, id: Date.now() }]
        }
      })),
      
      updateProject: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          projects: state.resume.projects.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeProject: (index) => set((state) => ({
        resume: {
          ...state.resume,
          projects: state.resume.projects.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Certifications - FIXED
      addCertification: (certification) => set((state) => ({
        resume: {
          ...state.resume,
          certifications: [...state.resume.certifications, { 
            ...certification, 
            id: Date.now(),
            name: certification.name || '',
            issuer: certification.issuer || '',
            year: certification.year || ''
          }]
        }
      })),
      
      updateCertification: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          certifications: state.resume.certifications.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeCertification: (index) => set((state) => ({
        resume: {
          ...state.resume,
          certifications: state.resume.certifications.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Achievements - FIXED
      addAchievement: (achievement) => set((state) => ({
        resume: {
          ...state.resume,
          achievements: [...state.resume.achievements, { 
            ...achievement, 
            id: Date.now(),
            title: achievement.title || '',
            description: achievement.description || '',
            year: achievement.year || ''
          }]
        }
      })),
      
      updateAchievement: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          achievements: state.resume.achievements.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeAchievement: (index) => set((state) => ({
        resume: {
          ...state.resume,
          achievements: state.resume.achievements.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Languages - FIXED
      addLanguage: (language) => set((state) => ({
        resume: {
          ...state.resume,
          languages: [...state.resume.languages, { 
            ...language, 
            id: Date.now(),
            name: language.name || '',
            proficiency: language.proficiency || ''
          }]
        }
      })),
      
      updateLanguage: (index, data) => set((state) => ({
        resume: {
          ...state.resume,
          languages: state.resume.languages.map((item, i) => 
            i === index ? { ...item, ...data } : item
          )
        }
      })),
      
      removeLanguage: (index) => set((state) => ({
        resume: {
          ...state.resume,
          languages: state.resume.languages.filter((_, i) => i !== index)
        }
      })),
      
      // Actions - Soft Skills
      addSoftSkill: (softSkill) => set((state) => ({
        resume: {
          ...state.resume,
          softSkills: [...state.resume.softSkills, softSkill]
        }
      })),
      
      removeSoftSkill: (index) => set((state) => ({
        resume: {
          ...state.resume,
          softSkills: state.resume.softSkills.filter((_, i) => i !== index)
        }
      })),
      
      // Section Actions
      toggleSection: (sectionId) => set((state) => ({
        sections: {
          ...state.sections,
          [sectionId]: {
            ...state.sections[sectionId],
            enabled: !state.sections[sectionId]?.enabled
          }
        }
      })),
      
      updateSectionOrder: (newOrder) => set((state) => {
        const newSections = { ...state.sections }
        newOrder.forEach((sectionId, index) => {
          if (newSections[sectionId]) {
            newSections[sectionId] = { ...newSections[sectionId], order: index }
          }
        })
        return { sections: newSections }
      }),
      
      getEnabledSections: () => {
        const state = get()
        return Object.entries(state.sections)
          .filter(([_, config]) => config.enabled)
          .sort((a, b) => a[1].order - b[1].order)
          .map(([id]) => id)
      },
      
      // Template Actions - Set template and load sample data
      setSelectedTemplate: (templateId) => {
        const sampleData = getSampleDataForTemplate(templateId)
        set({ 
          selectedTemplate: templateId,
          resume: sampleData || defaultResumeData
        })
      },
      
      // Load sample data for a specific template
      loadSampleDataForTemplate: (templateId) => {
        const sampleData = getSampleDataForTemplate(templateId)
        set({ 
          resume: sampleData || defaultResumeData,
          selectedTemplate: templateId
        })
      },
      
      // Load Sample Data for current template
      loadSampleData: () => {
        const currentTemplate = get().selectedTemplate
        const sampleData = getSampleDataForTemplate(currentTemplate)
        set({ resume: sampleData || defaultResumeData })
      },
      
      // UI Actions
      setActiveSection: (section) => set({ activeSection: section }),
      setLoading: (loading) => set({ isLoading: loading }),
      
      // Reset Resume to empty defaults
      resetResume: () => set({ 
        resume: defaultResumeData,
        sections: defaultSections
      }),
      
      // Get Full Resume
      getResume: () => get().resume,
      
      // Get Current Template
      getSelectedTemplate: () => get().selectedTemplate
    }),
    {
      name: 'resume-storage',
      getStorage: () => localStorage
    }
  )
)