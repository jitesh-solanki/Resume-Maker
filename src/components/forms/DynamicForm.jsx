import { useState } from 'react'
import { useResumeStore } from '../../store/rootStore'
import { getTemplateFields } from '../../features/templates/data/templateRegistry'

// Available sections configuration
const AVAILABLE_SECTIONS = [
  { id: 'header', label: 'Header', icon: '👤' },
  { id: 'summary', label: 'Professional Summary', icon: '📝' },
  { id: 'skills', label: 'Technical Skills', icon: '⚡' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'certifications', label: 'Certifications', icon: '📜' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'languages', label: 'Languages', icon: '🌍' },
  { id: 'softSkills', label: 'Soft Skills', icon: '🤝' },
]

export function DynamicForm() {
  const { 
    resume, 
    selectedTemplate, 
    sections,
    toggleSection,
    updateSectionOrder,
    updatePersonalInfo, 
    addEducation, 
    updateEducation, 
    removeEducation, 
    addExperience, 
    updateExperience, 
    removeExperience, 
    addSkill, 
    removeSkill,
    // ===== PROJECTS - ADDED! =====
    addProject,
    updateProject,
    removeProject,
    // ===== CERTIFICATIONS =====
    addCertification,
    updateCertification,
    removeCertification,
    // ===== ACHIEVEMENTS =====
    addAchievement,
    updateAchievement,
    removeAchievement,
    // ===== LANGUAGES =====
    addLanguage,
    updateLanguage,
    removeLanguage,
    // ===== SOFT SKILLS =====
    addSoftSkill,
    removeSoftSkill
  } = useResumeStore()
  
  const [activeSection, setActiveSection] = useState('personal')
  const [editIndex, setEditIndex] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [showSectionManager, setShowSectionManager] = useState(false)
  
  // Get fields based on selected template
  const fields = getTemplateFields(selectedTemplate) || getTemplateFields('professional')

  const formSections = [
    { id: 'personal', name: 'Personal Info', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'experience', name: 'Work Experience', icon: '💼' },
    { id: 'skills', name: 'Skills', icon: '⚡' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'certifications', name: 'Certifications', icon: '📜' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' },
    { id: 'languages', name: 'Languages', icon: '🌍' },
    { id: 'softSkills', name: 'Soft Skills', icon: '🤝' }
  ]

  // Check if skills section exists
  const hasSkills = fields.skills && fields.skills.type === 'tags'

  // Get enabled sections for display
  const getEnabledSections = () => {
    return Object.entries(sections || {})
      .filter(([_, config]) => config?.enabled)
      .sort((a, b) => (a[1]?.order || 0) - (b[1]?.order || 0))
      .map(([id]) => id)
  }

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    updatePersonalInfo({ [name]: value })
  }

  // Education Handlers
  const handleAddEducation = () => {
    const eduFields = fields.education?.fields || []
    const newEducation = {}
    eduFields.forEach(field => {
      newEducation[field.name] = ''
    })
    addEducation(newEducation)
    setEditIndex(resume.education?.length || 0)
    setIsEditing(true)
  }

  const handleEducationChange = (index, field, value) => {
    updateEducation(index, { [field]: value })
  }

  const handleEditEducation = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveEducation = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // Experience Handlers
  const handleAddExperience = () => {
    const expFields = fields.experience?.fields || []
    const newExperience = {}
    expFields.forEach(field => {
      newExperience[field.name] = field.type === 'checkbox' ? false : ''
    })
    addExperience(newExperience)
    setEditIndex(resume.experience?.length || 0)
    setIsEditing(true)
  }

  const handleExperienceChange = (index, field, value) => {
    if (field === 'current') {
      updateExperience(index, { [field]: value, endDate: value ? '' : '' })
    } else {
      updateExperience(index, { [field]: value })
    }
  }

  const handleEditExperience = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveExperience = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // Skills Handlers
  const handleAddSkill = () => {
    const input = document.getElementById('newSkill')
    if (input && input.value.trim()) {
      addSkill(input.value.trim())
      input.value = ''
    }
  }

  const handleSkillKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill()
    }
  }

  // ===== PROJECTS - FIXED =====
  const handleAddProject = () => {
    console.log('Adding project...')
    addProject({ name: '', description: '', link: '' })
    setEditIndex(resume.projects?.length || 0)
    setIsEditing(true)
  }

  const handleProjectChange = (index, field, value) => {
    updateProject(index, { [field]: value })
  }

  const handleEditProject = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveProject = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // ===== CERTIFICATIONS =====
  const handleAddCertification = () => {
    addCertification({ name: '', issuer: '', year: '' })
    setEditIndex(resume.certifications?.length || 0)
    setIsEditing(true)
  }

  const handleCertificationChange = (index, field, value) => {
    updateCertification(index, { [field]: value })
  }

  const handleEditCertification = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveCertification = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // ===== ACHIEVEMENTS =====
  const handleAddAchievement = () => {
    addAchievement({ title: '', description: '', year: '' })
    setEditIndex(resume.achievements?.length || 0)
    setIsEditing(true)
  }

  const handleAchievementChange = (index, field, value) => {
    updateAchievement(index, { [field]: value })
  }

  const handleEditAchievement = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveAchievement = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // ===== LANGUAGES =====
  const handleAddLanguage = () => {
    addLanguage({ name: '', proficiency: '' })
    setEditIndex(resume.languages?.length || 0)
    setIsEditing(true)
  }

  const handleLanguageChange = (index, field, value) => {
    updateLanguage(index, { [field]: value })
  }

  const handleEditLanguage = (index) => {
    setEditIndex(index)
    setIsEditing(true)
  }

  const handleSaveLanguage = () => {
    setEditIndex(null)
    setIsEditing(false)
  }

  // Soft Skills Handlers
  const handleAddSoftSkill = () => {
    const input = document.getElementById('newSoftSkill')
    if (input && input.value.trim()) {
      addSoftSkill(input.value.trim())
      input.value = ''
    }
  }

  const handleSoftSkillKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSoftSkill()
    }
  }

  return (
    <div>
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {formSections.map((section) => {
          // Only show sections that are enabled in section manager
          const isEnabled = sections?.[section.id]?.enabled !== false
          if (!isEnabled) return null
          
          // Hide skills section if template doesn't have it
          if (section.id === 'skills' && !hasSkills) return null
          
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{section.icon}</span>
              <span>{section.name}</span>
            </button>
          )
        })}
      </div>

      {/* Section Manager Toggle */}
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={() => setShowSectionManager(!showSectionManager)}
          className="text-sm text-gray-600 hover:text-blue-600 transition flex items-center gap-2"
        >
          {showSectionManager ? '▼' : '▶'} {showSectionManager ? 'Hide' : 'Show'} Section Manager
        </button>
        <span className="text-xs text-gray-400">
          {getEnabledSections().length} sections enabled
        </span>
      </div>

      {/* Section Manager */}
      {showSectionManager && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Customize Resume Sections</h3>
          <p className="text-xs text-gray-500 mb-3">Toggle sections on/off and drag to reorder</p>
          
          <div className="space-y-2">
            {AVAILABLE_SECTIONS.map((section) => {
              const isEnabled = sections?.[section.id]?.enabled !== false
              return (
                <div key={section.id} className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${
                      isEnabled 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                    }`}
                  >
                    {isEnabled ? '✓' : '×'}
                  </button>
                  <span className="text-sm font-medium flex-1">
                    {section.icon} {section.label}
                  </span>
                  <span className="text-xs text-gray-400">
                    {isEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              )
            })}
          </div>
          
          <div className="mt-3 text-xs text-gray-400">
            💡 Sections you enable will appear in your resume preview
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        {/* Personal Information Section */}
        {activeSection === 'personal' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="space-y-4">
              {Object.entries(fields.personal || {}).map(([fieldName, config]) => {
                const value = resume.personal?.[fieldName] || ''
                
                if (config.type === 'textarea') {
                  return (
                    <div key={fieldName}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {config.label}
                        {config.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <textarea
                        name={fieldName}
                        value={value}
                        onChange={handlePersonalChange}
                        rows={config.rows || 4}
                        placeholder={config.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )
                } else {
                  return (
                    <div key={fieldName}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {config.label}
                        {config.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <input
                        type={config.type}
                        name={fieldName}
                        value={value}
                        onChange={handlePersonalChange}
                        placeholder={config.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )
                }
              })}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && fields.education && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{fields.education.label || 'Education'}</h2>
              <button onClick={handleAddEducation} className="text-blue-600 hover:text-blue-700">
                + Add {fields.education.label || 'Education'}
              </button>
            </div>
            <div className="space-y-4">
              {resume.education?.map((edu, index) => (
                <div key={edu.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      {fields.education.fields.map((field) => (
                        field.type === 'textarea' ? (
                          <div key={field.name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                            <textarea
                              value={edu[field.name] || ''}
                              onChange={(e) => handleEducationChange(index, field.name, e.target.value)}
                              placeholder={field.placeholder}
                              rows={3}
                              className="w-full px-3 py-2 border rounded-lg"
                            />
                          </div>
                        ) : (
                          <div key={field.name}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                            <input
                              type={field.type}
                              value={edu[field.name] || ''}
                              onChange={(e) => handleEducationChange(index, field.name, e.target.value)}
                              placeholder={field.placeholder}
                              className="w-full px-3 py-2 border rounded-lg"
                            />
                          </div>
                        )
                      ))}
                      <button onClick={handleSaveEducation} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        {fields.education.fields.map((field) => (
                          <div key={field.name}>
                            {field.name === 'institution' && <h3 className="font-semibold">{edu[field.name] || 'Untitled'}</h3>}
                            {field.name === 'degree' && <p className="text-gray-600 text-sm">{edu[field.name]}</p>}
                            {field.name === 'year' && <p className="text-gray-500 text-sm">{edu[field.name]}</p>}
                            {field.name === 'description' && edu[field.name] && <p className="text-gray-700 text-sm mt-1">{edu[field.name]}</p>}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditEducation(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeEducation(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.education || resume.education.length === 0) && (
                <p className="text-gray-500 text-center py-4">No education added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && fields.experience && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{fields.experience.label || 'Work Experience'}</h2>
              <button onClick={handleAddExperience} className="text-blue-600 hover:text-blue-700">
                + Add {fields.experience.label || 'Experience'}
              </button>
            </div>
            <div className="space-y-4">
              {resume.experience?.map((exp, index) => (
                <div key={exp.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      {fields.experience.fields.map((field) => {
                        if (field.type === 'checkbox') {
                          return (
                            <div key={field.name} className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                checked={exp[field.name] || false}
                                onChange={(e) => handleExperienceChange(index, field.name, e.target.checked)}
                                className="w-4 h-4"
                              />
                              <label className="text-sm font-medium text-gray-700">{field.label}</label>
                            </div>
                          )
                        } else if (field.type === 'textarea') {
                          return (
                            <div key={field.name}>
                              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                              <textarea
                                value={exp[field.name] || ''}
                                onChange={(e) => handleExperienceChange(index, field.name, e.target.value)}
                                placeholder={field.placeholder}
                                rows={3}
                                className="w-full px-3 py-2 border rounded-lg"
                              />
                            </div>
                          )
                        } else {
                          return (
                            <div key={field.name}>
                              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                              <input
                                type={field.type}
                                value={exp[field.name] || ''}
                                onChange={(e) => handleExperienceChange(index, field.name, e.target.value)}
                                placeholder={field.placeholder}
                                className="w-full px-3 py-2 border rounded-lg"
                              />
                            </div>
                          )
                        }
                      })}
                      <button onClick={handleSaveExperience} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        {fields.experience.fields.map((field) => (
                          <div key={field.name}>
                            {field.name === 'title' && <h3 className="font-semibold">{exp[field.name] || 'Untitled'}</h3>}
                            {field.name === 'company' && <p className="text-gray-600 text-sm">{exp[field.name]}</p>}
                            {field.name === 'startDate' && (
                              <p className="text-gray-500 text-sm">
                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                              </p>
                            )}
                            {field.name === 'description' && exp[field.name] && <p className="text-gray-700 text-sm mt-1">{exp[field.name]}</p>}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditExperience(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeExperience(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.experience || resume.experience.length === 0) && (
                <p className="text-gray-500 text-center py-4">No experience added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && hasSkills && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">{fields.skills.label || 'Skills'}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {resume.skills?.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2">
                  {skill}
                  <button onClick={() => removeSkill(index)} className="hover:text-blue-900">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                id="newSkill"
                onKeyPress={handleSkillKeyPress}
                placeholder={fields.skills.placeholder || "Add a skill..."}
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleAddSkill} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Add
              </button>
            </div>
          </div>
        )}

        {/* ===== PROJECTS SECTION ===== */}
        {activeSection === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <button onClick={handleAddProject} className="text-blue-600 hover:text-blue-700">
                + Add Project
              </button>
            </div>
            <div className="space-y-4">
              {resume.projects?.map((project, index) => (
                <div key={project.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                        <input
                          type="text"
                          value={project.name || ''}
                          onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                          placeholder="Project Name"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          value={project.description || ''}
                          onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                          placeholder="Project description..."
                          rows={3}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link (optional)</label>
                        <input
                          type="text"
                          value={project.link || ''}
                          onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                          placeholder="https://..."
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <button onClick={handleSaveProject} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{project.name || 'Untitled Project'}</h3>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                        {project.link && project.link !== '#' && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">
                            View Project →
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditProject(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeProject(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.projects || resume.projects.length === 0) && (
                <p className="text-gray-500 text-center py-4">No projects added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* ===== CERTIFICATIONS SECTION ===== */}
        {activeSection === 'certifications' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Certifications</h2>
              <button onClick={handleAddCertification} className="text-blue-600 hover:text-blue-700">
                + Add Certification
              </button>
            </div>
            <div className="space-y-4">
              {resume.certifications?.map((cert, index) => (
                <div key={cert.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Certification Name</label>
                        <input
                          type="text"
                          value={cert.name || ''}
                          onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                          placeholder="Certification Name"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
                        <input
                          type="text"
                          value={cert.issuer || ''}
                          onChange={(e) => handleCertificationChange(index, 'issuer', e.target.value)}
                          placeholder="Issuing Organization"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <input
                          type="text"
                          value={cert.year || ''}
                          onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                          placeholder="2024"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <button onClick={handleSaveCertification} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{cert.name || 'Untitled Certification'}</h3>
                        <p className="text-gray-600 text-sm">{cert.issuer}</p>
                        <p className="text-gray-500 text-sm">{cert.year}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditCertification(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeCertification(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.certifications || resume.certifications.length === 0) && (
                <p className="text-gray-500 text-center py-4">No certifications added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* ===== ACHIEVEMENTS SECTION ===== */}
        {activeSection === 'achievements' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Achievements</h2>
              <button onClick={handleAddAchievement} className="text-blue-600 hover:text-blue-700">
                + Add Achievement
              </button>
            </div>
            <div className="space-y-4">
              {resume.achievements?.map((achievement, index) => (
                <div key={achievement.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Achievement Title</label>
                        <input
                          type="text"
                          value={achievement.title || ''}
                          onChange={(e) => handleAchievementChange(index, 'title', e.target.value)}
                          placeholder="Achievement Title"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                          value={achievement.description || ''}
                          onChange={(e) => handleAchievementChange(index, 'description', e.target.value)}
                          placeholder="Describe your achievement..."
                          rows={2}
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                        <input
                          type="text"
                          value={achievement.year || ''}
                          onChange={(e) => handleAchievementChange(index, 'year', e.target.value)}
                          placeholder="2024"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <button onClick={handleSaveAchievement} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{achievement.title || 'Untitled Achievement'}</h3>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                        <p className="text-gray-500 text-sm">{achievement.year}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditAchievement(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeAchievement(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.achievements || resume.achievements.length === 0) && (
                <p className="text-gray-500 text-center py-4">No achievements added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* ===== LANGUAGES SECTION ===== */}
        {activeSection === 'languages' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Languages</h2>
              <button onClick={handleAddLanguage} className="text-blue-600 hover:text-blue-700">
                + Add Language
              </button>
            </div>
            <div className="space-y-4">
              {resume.languages?.map((lang, index) => (
                <div key={lang.id || index} className="border rounded-lg p-4">
                  {editIndex === index && isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                        <input
                          type="text"
                          value={lang.name || ''}
                          onChange={(e) => handleLanguageChange(index, 'name', e.target.value)}
                          placeholder="e.g., English, Spanish"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency</label>
                        <input
                          type="text"
                          value={lang.proficiency || ''}
                          onChange={(e) => handleLanguageChange(index, 'proficiency', e.target.value)}
                          placeholder="e.g., Native, Fluent, Intermediate"
                          className="w-full px-3 py-2 border rounded-lg"
                        />
                      </div>
                      <button onClick={handleSaveLanguage} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{lang.name || 'Untitled Language'}</h3>
                        <p className="text-gray-600 text-sm">{lang.proficiency}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditLanguage(index)} className="text-blue-600">Edit</button>
                        <button onClick={() => removeLanguage(index)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {(!resume.languages || resume.languages.length === 0) && (
                <p className="text-gray-500 text-center py-4">No languages added yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Soft Skills Section */}
        {activeSection === 'softSkills' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Soft Skills</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {resume.softSkills?.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-2">
                  {skill}
                  <button onClick={() => removeSoftSkill(index)} className="hover:text-green-900">×</button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                id="newSoftSkill"
                onKeyPress={handleSoftSkillKeyPress}
                placeholder="Add a soft skill..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleAddSoftSkill} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}