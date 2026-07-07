export const defaultResume = {
  personal: {
    fullName: '',
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
  certifications: []
}

export const sampleResume = {
  personal: {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: 'New York, USA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    summary: 'Passionate full-stack developer with 5+ years of experience building web applications.'
  },
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2015-2019',
      gpa: '3.8/4.0'
    }
  ],
  experience: [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'New York, NY',
      startDate: '2022-01',
      endDate: 'Present',
      current: true,
      description: 'Leading frontend development using React and Tailwind CSS.'
    },
    {
      id: 2,
      title: 'Web Developer',
      company: 'Digital Agency',
      location: 'Boston, MA',
      startDate: '2019-06',
      endDate: '2021-12',
      current: false,
      description: 'Developed responsive websites for clients.'
    }
  ],
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git'],
  projects: [
    {
      id: 1,
      name: 'Resume Builder',
      description: 'Web app for creating professional resumes',
      technologies: ['React', 'Tailwind', 'Zustand'],
      link: 'https://github.com/johndoe/resume-builder'
    }
  ],
  certifications: [
    {
      id: 1,
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023'
    }
  ]
}