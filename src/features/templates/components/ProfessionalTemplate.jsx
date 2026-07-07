import { useResumeStore } from '../../../store/rootStore'

export function ProfessionalTemplate({ enabledSections = [] }) {
  const resume = useResumeStore((state) => state.resume)

  if (!resume.personal?.fullName) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No resume data yet. Fill out the form to see your resume here.</p>
      </div>
    )
  }

  // Check if a section is enabled
  const isSectionEnabled = (sectionId) => {
    return enabledSections.includes(sectionId)
  }

  return (
    <div className="professional-template" style={{
      fontFamily: "'Inter', 'Poppins', 'Arial', sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      
      {/* HEADER SECTION - Always shown */}
      {isSectionEnabled('header') && (
        <div style={{ marginBottom: '30px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '800',
            color: '#1a1a1a',
            margin: '0 0 5px 0',
            letterSpacing: '1px'
          }}>
            {resume.personal?.fullName || 'SEBASTIAN BENNETT'}
          </h1>
          
          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2d2d2d',
            margin: '0 0 15px 0'
          }}>
            {resume.personal?.title || 'Professional Accountant'}
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '14px',
            color: '#4a4a4a'
          }}>
            {resume.personal?.phone && <span>📞 {resume.personal.phone}</span>}
            {resume.personal?.email && <span>✉️ {resume.personal.email}</span>}
            {resume.personal?.address && <span>📍 {resume.personal.address}</span>}
          </div>
        </div>
      )}

      {/* ABOUT ME / SUMMARY SECTION */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            ABOUT ME
          </h2>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#333',
            margin: '15px 0 0 0',
            textAlign: 'justify'
          }}>
            {resume.personal.summary}
          </p>
        </div>
      )}

      {/* EDUCATION SECTION */}
      {isSectionEnabled('education') && resume.education?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            EDUCATION
          </h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} style={{ marginTop: '15px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  {edu.institution}
                </h3>
                <span style={{
                  fontSize: '14px',
                  color: '#4a4a4a',
                  fontWeight: '500'
                }}>
                  {edu.year}
                </span>
              </div>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#2d2d2d',
                margin: '5px 0 8px 0'
              }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#444',
                  margin: 0
                }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* EXPERIENCE SECTION */}
      {isSectionEnabled('experience') && resume.experience?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            WORK EXPERIENCE
          </h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} style={{ marginTop: '15px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  {exp.company}
                </h3>
                <span style={{
                  fontSize: '14px',
                  color: '#4a4a4a',
                  fontWeight: '500'
                }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#2d2d2d',
                margin: '5px 0 8px 0'
              }}>
                {exp.title}
              </p>
              {exp.description && (
                <p style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#444',
                  margin: 0
                }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SKILLS SECTION */}
      {isSectionEnabled('skills') && resume.skills?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            SKILLS
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '10px'
          }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                fontSize: '14px',
                color: '#333',
                padding: '4px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS SECTION */}
      {isSectionEnabled('projects') && resume.projects?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            PROJECTS
          </h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ marginTop: '15px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: 0
              }}>
                {project.name}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#444',
                margin: '5px 0 0 0'
              }}>
                {project.description}
              </p>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '13px',
                  color: '#2563EB',
                  textDecoration: 'underline'
                }}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CERTIFICATIONS SECTION */}
      {isSectionEnabled('certifications') && resume.certifications?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            CERTIFICATIONS
          </h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ marginTop: '10px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  {cert.name}
                </h3>
                <span style={{
                  fontSize: '13px',
                  color: '#4a4a4a'
                }}>
                  {cert.year}
                </span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#444',
                margin: '2px 0 0 0'
              }}>
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ACHIEVEMENTS SECTION */}
      {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            ACHIEVEMENTS
          </h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ marginTop: '10px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  {achievement.title}
                </h3>
                <span style={{
                  fontSize: '13px',
                  color: '#4a4a4a'
                }}>
                  {achievement.year}
                </span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#444',
                margin: '2px 0 0 0'
              }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* LANGUAGES SECTION */}
      {isSectionEnabled('languages') && resume.languages?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            LANGUAGES
          </h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ marginTop: '10px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1a1a1a'
                }}>
                  {lang.name}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: '#4a4a4a'
                }}>
                  {lang.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SOFT SKILLS SECTION */}
      {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
        <div>
          <h2 style={{
            fontSize: '22px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 10px 0',
            borderBottom: '2px solid #1a1a1a',
            paddingBottom: '6px'
          }}>
            SOFT SKILLS
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '10px'
          }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                fontSize: '14px',
                color: '#333',
                padding: '4px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}