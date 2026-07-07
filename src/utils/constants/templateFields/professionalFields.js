export const professionalFields = {
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
}

export const professionalSampleData = {
  personal: {
    fullName: 'SEBASTIAN BENNETT',
    title: 'Professional Accountant',
    email: 'hello@reallygreatsite.com',
    phone: '+123-456-7890',
    address: '123 Anywhere St., Any City',
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
  skills: ['Auditing', 'Financial Accounting', 'Financial Reporting']
}