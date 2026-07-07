import { useResumeStore } from '../../../store/rootStore'

export function ModernTemplate({ enabledSections = [] }) {
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
    <div className="modern-template" style={{
      fontFamily: "'Inter', 'Poppins', sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>
      
      {/* HEADER */}
      {isSectionEnabled('header') && (
        <div style={{ 
          marginBottom: '30px',
          borderBottom: '4px solid #2563EB',
          paddingBottom: '20px'
        }}>
          <h1 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1a1a1a',
            margin: '0 0 5px 0',
            letterSpacing: '-1px'
          }}>
            {resume.personal?.fullName}
          </h1>
          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#2563EB',
            margin: '0 0 12px 0'
          }}>
            {resume.personal?.title || 'Professional'}
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
            {resume.personal?.linkedin && <span>🔗 {resume.personal.linkedin}</span>}
            {resume.personal?.github && <span>💻 {resume.personal.github}</span>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>About Me</h2>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#333',
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
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Education</h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', margin: 0 }}>
                  {edu.institution}
                </h3>
                <span style={{ fontSize: '14px', color: '#666' }}>{edu.year}</span>
              </div>
              <p style={{ fontSize: '15px', fontWeight: '600', margin: '4px 0' }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>
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
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '700', margin: 0 }}>
                  {exp.title}
                </h3>
                <span style={{ fontSize: '14px', color: '#666' }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p style={{ fontSize: '15px', fontWeight: '600', margin: '4px 0', color: '#444' }}>
                {exp.company}
              </p>
              {exp.description && (
                <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SKILLS */}
      {isSectionEnabled('skills') && resume.skills?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#DBEAFE',
                color: '#1E40AF',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS */}
      {isSectionEnabled('projects') && resume.projects?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Projects</h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ marginBottom: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>
                {project.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#555', margin: '4px 0 0 0' }}>
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

      {/* CERTIFICATIONS */}
      {isSectionEnabled('certifications') && resume.certifications?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Certifications</h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{cert.name}</span>
                <span style={{ fontSize: '13px', color: '#666' }}>{cert.year}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#555', margin: '2px 0 0 0' }}>
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ACHIEVEMENTS */}
      {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Achievements</h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{achievement.title}</span>
                <span style={{ fontSize: '13px', color: '#666' }}>{achievement.year}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#555', margin: '2px 0 0 0' }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* LANGUAGES */}
      {isSectionEnabled('languages') && resume.languages?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Languages</h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ marginTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{lang.name}</span>
                <span style={{ fontSize: '13px', color: '#666' }}>{lang.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SOFT SKILLS */}
      {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
        <div>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            borderBottom: '2px solid #2563EB',
            paddingBottom: '6px'
          }}>Soft Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#DBEAFE',
                color: '#1E40AF',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500'
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