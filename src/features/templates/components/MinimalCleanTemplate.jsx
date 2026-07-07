import { useResumeStore } from '../../../store/rootStore'

export function MinimalCleanTemplate({ enabledSections = [] }) {
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
    <div className="minimal-clean-template" style={{
      fontFamily: "'Inter', 'SF Pro Display', sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#fafafa',
      padding: '50px 40px',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.7'
    }}>
      
      {/* HEADER */}
      {isSectionEnabled('header') && (
        <div style={{ marginBottom: '35px' }}>
          <h1 style={{
            fontSize: '40px',
            fontWeight: '300',
            color: '#1a1a1a',
            margin: '0 0 4px 0',
            letterSpacing: '-0.5px'
          }}>
            {resume.personal?.fullName}
          </h1>
          <p style={{
            fontSize: '17px',
            fontWeight: '400',
            color: '#666',
            margin: '0 0 12px 0'
          }}>
            {resume.personal?.title || 'Professional'}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: '#888',
            borderTop: '1px solid #e0e0e0',
            paddingTop: '12px'
          }}>
            {resume.personal?.email && <span>{resume.personal.email}</span>}
            {resume.personal?.phone && <span>{resume.personal.phone}</span>}
            {resume.personal?.address && <span>{resume.personal.address}</span>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '28px' }}>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.8',
            color: '#444',
            margin: 0
          }}>
            {resume.personal.summary}
          </p>
        </div>
      )}

      {/* EDUCATION */}
      {isSectionEnabled('education') && resume.education?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Education</h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>
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
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '500' }}>
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

      {/* SKILLS */}
      {isSectionEnabled('skills') && resume.skills?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                fontSize: '12px',
                color: '#555',
                padding: '2px 0',
                borderBottom: '1px solid #e0e0e0',
                marginRight: '12px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS */}
      {isSectionEnabled('projects') && resume.projects?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Projects</h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{project.name}</span>
              <p style={{ fontSize: '13px', color: '#555', margin: '2px 0 0 0' }}>
                {project.description}
              </p>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '12px',
                  color: '#888',
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
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Certifications</h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{cert.name}</span>
              <p style={{ fontSize: '12px', color: '#555', margin: '2px 0 0 0' }}>
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ACHIEVEMENTS */}
      {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Achievements</h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{achievement.title}</span>
              <p style={{ fontSize: '12px', color: '#555', margin: '2px 0 0 0' }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* LANGUAGES */}
      {isSectionEnabled('languages') && resume.languages?.length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Languages</h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{lang.name}</span>
              <span style={{ fontSize: '12px', color: '#888', marginLeft: '10px' }}>
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* SOFT SKILLS */}
      {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
        <div>
          <h2 style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#999',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Soft Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                fontSize: '12px',
                color: '#555',
                padding: '2px 0',
                borderBottom: '1px solid #e0e0e0',
                marginRight: '12px'
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