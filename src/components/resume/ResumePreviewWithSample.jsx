import { useState, useEffect } from 'react'
import { useResumeStore } from '../../store/rootStore'
import { getTemplateFields } from '../../utils/constants/templateFields'

export function ResumePreviewWithSample() {
  const { selectedTemplate, resume } = useResumeStore()
  const [showSample, setShowSample] = useState(false)
  const [displayData, setDisplayData] = useState(resume)
  
  const templateConfig = getTemplateFields(selectedTemplate)
  const sampleData = templateConfig?.sampleData || {}

  useEffect(() => {
    if (showSample && sampleData) {
      setDisplayData(sampleData)
    } else {
      setDisplayData(resume)
    }
  }, [showSample, resume, sampleData])

  const data = displayData

  // Modern ATS Template Renderer
  if (selectedTemplate === 'modernAts') {
    return (
      <div className="modern-ats-template" style={{
        backgroundColor: '#f5f5f5',
        fontFamily: "'Inter', 'Poppins', 'Arial', sans-serif",
        color: '#222',
        minHeight: '100vh',
        padding: '50px 20px'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#f5f5f5',
          padding: '0'
        }}>
          {/* Show Sample Data Toggle */}
          <div className="mb-4 text-right">
            <button
              onClick={() => setShowSample(!showSample)}
              className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
            >
              {showSample ? 'Show My Data' : 'Preview with Sample Data'}
            </button>
          </div>

          {/* Header Section */}
          <header style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              color: '#111',
              margin: '0 0 10px 0',
              letterSpacing: '-0.5px'
            }}>
              {data.personal?.fullName || 'Jitesh Solanki'}
            </h1>
            
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 20px 0'
            }}>
              {data.personal?.title || 'Front End Developer'}
            </h2>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '15px',
              fontSize: '14px'
            }}>
              {data.personal?.phone && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>📞</span>
                  <span>{data.personal.phone}</span>
                </div>
              )}
              {data.personal?.github && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🐙</span>
                  <span>{data.personal.github}</span>
                </div>
              )}
              {data.personal?.linkedin && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💼</span>
                  <span>{data.personal.linkedin}</span>
                </div>
              )}
              {data.personal?.email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>✉️</span>
                  <span>{data.personal.email}</span>
                </div>
              )}
            </div>
            
            <div style={{ borderBottom: '2px solid #222', marginTop: '5px' }}></div>
          </header>

          {/* About Me Section */}
          <section style={{ marginTop: '30px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              margin: '0 0 8px 0',
              letterSpacing: '0.5px'
            }}>ABOUT ME</h3>
            <div style={{ borderBottom: '2px solid #222', marginBottom: '15px' }}></div>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              textAlign: 'justify',
              margin: 0,
              color: '#333'
            }}>
              {data.personal?.summary || 'Front-End Developer (Fresher) with a solid understanding of HTML, CSS, JavaScript, and React.js, focused on building responsive and user-friendly web interfaces.'}
            </p>
          </section>

          {/* Education Section */}
          <section style={{ marginTop: '30px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              margin: '0 0 8px 0'
            }}>EDUCATION</h3>
            <div style={{ borderBottom: '2px solid #222', marginBottom: '15px' }}></div>
            
            {data.education?.map((edu, index) => (
              <div key={edu.id || index} style={{ display: 'flex', marginBottom: '30px' }}>
                <div style={{ width: '25%' }}>
                  <span style={{ fontWeight: '700', color: '#222' }}>{edu.year}</span>
                </div>
                <div style={{ width: '75%' }}>
                  <div style={{ fontWeight: '700', marginBottom: '5px' }}>{edu.institution}</div>
                  <div style={{ fontSize: '14px', color: '#444', lineHeight: '1.6' }}>
                    {edu.degree}
                    {edu.gpa && <div>{edu.gpa}</div>}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Technical & Soft Skills Section */}
          <section style={{ marginTop: '30px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              margin: '0 0 8px 0'
            }}>TECHNICAL & SOFT-SKILLS</h3>
            <div style={{ borderBottom: '2px solid #222', marginBottom: '15px' }}></div>
            
            <div style={{ display: 'flex', gap: '40px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '700', marginBottom: '10px', fontSize: '16px' }}>Technical Skills:</div>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
                  {data.skills?.slice(0, 8).map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '700', marginBottom: '10px', fontSize: '16px' }}>Soft Skills:</div>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
                  {data.softSkills?.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section style={{ marginTop: '30px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              margin: '0 0 8px 0'
            }}>PROJECTS</h3>
            <div style={{ borderBottom: '2px solid #222', marginBottom: '15px' }}></div>
            
            {data.projects?.map((project, index) => (
              <div key={project.id || index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', marginBottom: '5px' }}>{project.name}</div>
                  <div style={{ fontSize: '14px', color: '#444', lineHeight: '1.5' }}>{project.description}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <a href={project.link} style={{ color: '#222', textDecoration: 'underline', fontSize: '14px' }}>
                    Go to Website →
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Experience Section */}
          <section style={{ marginTop: '30px' }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: '800',
              textTransform: 'uppercase',
              margin: '0 0 8px 0'
            }}>EXPERIENCE</h3>
            <div style={{ borderBottom: '2px solid #222', marginBottom: '15px' }}></div>
            
            {data.experience?.map((exp, index) => (
              <div key={exp.id || index} style={{ display: 'flex', marginBottom: '30px' }}>
                <div style={{ width: '25%' }}>
                  <span style={{ fontWeight: '700' }}>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <div style={{ width: '75%' }}>
                  <div style={{ fontWeight: '700', marginBottom: '5px' }}>{exp.title}</div>
                  <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>{exp.company}</div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                    {exp.description?.split('\n').map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    )
  }

  // Default fallback
  return (
    <div className="text-center py-8">
      <div className="text-6xl mb-4">📄</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Select a template to preview</h3>
      <p className="text-gray-500 text-sm">Choose a template from the Templates page to see your resume preview here.</p>
    </div>
  )
}