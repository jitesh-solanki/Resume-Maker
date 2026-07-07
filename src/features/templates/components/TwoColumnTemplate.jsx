import { useResumeStore } from '../../../store/rootStore'

export function TwoColumnTemplate({ enabledSections = [] }) {
  const resume = useResumeStore((state) => state.resume)

  if (!resume.personal?.fullName) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No resume data yet. Fill out the form to see your resume here.</p>
      </div>
    )
  }

  const isSectionEnabled = (sectionId) => enabledSections.includes(sectionId)

  return (
    <div className="two-column-template" style={{
      fontFamily: "'Inter', 'Arial', sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      maxWidth: '1000px',
      margin: '0 auto',
      display: 'flex',
      minHeight: '600px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      
      {/* LEFT SIDEBAR */}
      <div style={{
        width: '30%',
        backgroundColor: '#1a2a3a',
        color: '#e8e8e8',
        padding: '35px 25px',
        flexShrink: 0
      }}>
        {/* Name */}
        {isSectionEnabled('header') && (
          <>
            <h1 style={{
              fontSize: '26px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 4px 0',
              lineHeight: '1.2'
            }}>
              {resume.personal?.fullName}
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#8aa0b8',
              margin: '0 0 20px 0'
            }}>
              {resume.personal?.title || 'Professional'}
            </p>
          </>
        )}

        {/* Contact */}
        {isSectionEnabled('header') && (
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#6a8aa8',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #2a3a4a',
              paddingBottom: '6px'
            }}>Contact</h3>
            <div style={{ fontSize: '13px', lineHeight: '2' }}>
              {resume.personal?.email && <div>✉️ {resume.personal.email}</div>}
              {resume.personal?.phone && <div>📞 {resume.personal.phone}</div>}
              {resume.personal?.address && <div>📍 {resume.personal.address}</div>}
              {resume.personal?.linkedin && <div>🔗 {resume.personal.linkedin}</div>}
              {resume.personal?.github && <div>💻 {resume.personal.github}</div>}
            </div>
          </div>
        )}

        {/* Skills */}
        {isSectionEnabled('skills') && resume.skills?.length > 0 && (
          <div>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#6a8aa8',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #2a3a4a',
              paddingBottom: '6px'
            }}>Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {resume.skills.map((skill, index) => (
                <span key={index} style={{
                  fontSize: '12px',
                  backgroundColor: '#2a3a4a',
                  padding: '3px 12px',
                  borderRadius: '12px',
                  color: '#b0c8d8'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Languages in sidebar */}
        {isSectionEnabled('languages') && resume.languages?.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#6a8aa8',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              margin: '0 0 10px 0',
              borderBottom: '1px solid #2a3a4a',
              paddingBottom: '6px'
            }}>Languages</h3>
            {resume.languages.map((lang, index) => (
              <div key={lang.id || index} style={{ fontSize: '13px', marginBottom: '4px' }}>
                {lang.name} - {lang.proficiency}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div style={{
        width: '70%',
        padding: '35px 35px 35px 30px',
        backgroundColor: '#ffffff'
      }}>
        
        {/* SUMMARY */}
        {isSectionEnabled('summary') && resume.personal?.summary && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Profile</h2>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.7',
              color: '#444',
              margin: 0
            }}>
              {resume.personal.summary}
            </p>
          </div>
        )}

        {/* EDUCATION */}
        {isSectionEnabled('education') && resume.education?.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Education</h2>
            {resume.education.map((edu, index) => (
              <div key={edu.id || index} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    {edu.institution}
                  </span>
                  <span style={{ fontSize: '13px', color: '#888' }}>{edu.year}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#555', margin: '2px 0 0 0' }}>
                  {edu.degree}
                </p>
                {edu.description && (
                  <p style={{ fontSize: '13px', color: '#777', margin: '2px 0 0 0' }}>
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* EXPERIENCE */}
        {isSectionEnabled('experience') && resume.experience?.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Experience</h2>
            {resume.experience.map((exp, index) => (
              <div key={exp.id || index} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>
                    {exp.title}
                  </span>
                  <span style={{ fontSize: '13px', color: '#888' }}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#666', margin: '2px 0 4px 0' }}>
                  {exp.company}
                </p>
                {exp.description && (
                  <p style={{ fontSize: '13px', color: '#777', margin: 0 }}>
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* PROJECTS */}
        {isSectionEnabled('projects') && resume.projects?.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Projects</h2>
            {resume.projects.map((project, index) => (
              <div key={project.id || index} style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{project.name}</span>
                <p style={{ fontSize: '13px', color: '#555', margin: '2px 0 0 0' }}>
                  {project.description}
                </p>
                {project.link && project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                    fontSize: '12px',
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

        {/* CERTIFICATIONS */}
        {isSectionEnabled('certifications') && resume.certifications?.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Certifications</h2>
            {resume.certifications.map((cert, index) => (
              <div key={cert.id || index} style={{ marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{cert.name}</span>
                <span style={{ fontSize: '12px', color: '#888', marginLeft: '8px' }}>
                  {cert.issuer} • {cert.year}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ACHIEVEMENTS */}
        {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
          <div style={{ marginBottom: '25px' }}>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Achievements</h2>
            {resume.achievements.map((achievement, index) => (
              <div key={achievement.id || index} style={{ marginBottom: '6px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{achievement.title}</span>
                <p style={{ fontSize: '12px', color: '#555', margin: '2px 0 0 0' }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* SOFT SKILLS */}
        {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
          <div>
            <h2 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1a2a3a',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Soft Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {resume.softSkills.map((skill, index) => (
                <span key={index} style={{
                  fontSize: '12px',
                  backgroundColor: '#f0f0f0',
                  padding: '3px 12px',
                  borderRadius: '12px',
                  color: '#444'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}