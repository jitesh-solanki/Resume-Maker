import { useResumeStore } from '../../../store/rootStore'

export function CreativeTemplate({ enabledSections = [] }) {
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
    <div className="creative-template" style={{
      fontFamily: "'Poppins', 'Inter', sans-serif",
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
          background: 'linear-gradient(135deg, #F59E0B, #EF4444)',
          padding: '30px',
          borderRadius: '12px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '46px',
            fontWeight: '800',
            margin: '0 0 5px 0',
            letterSpacing: '-1px'
          }}>
            {resume.personal?.fullName}
          </h1>
          <p style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 12px 0',
            opacity: '0.95'
          }}>
            {resume.personal?.title || 'Creative Professional'}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '14px',
            opacity: '0.9'
          }}>
            {resume.personal?.phone && <span>📞 {resume.personal.phone}</span>}
            {resume.personal?.email && <span>✉️ {resume.personal.email}</span>}
            {resume.personal?.address && <span>📍 {resume.personal.address}</span>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#EF4444',
            margin: '0 0 8px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ About Me</h2>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.8',
            color: '#333',
            margin: 0,
            paddingLeft: '15px',
            borderLeft: '4px solid #F59E0B'
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Education</h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} style={{ 
              marginBottom: '12px',
              padding: '12px 16px',
              backgroundColor: '#FEF3C7',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>
                  {edu.institution}
                </h3>
                <span style={{ fontSize: '13px', color: '#666' }}>{edu.year}</span>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: '4px 0' }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} style={{ 
              marginBottom: '12px',
              padding: '12px 16px',
              backgroundColor: '#FCE7F3',
              borderRadius: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>
                  {exp.title}
                </h3>
                <span style={{ fontSize: '13px', color: '#666' }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: '4px 0', color: '#444' }}>
                {exp.company}
              </p>
              {exp.description && (
                <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#FDE68A',
                color: '#92400E',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600'
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Projects</h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ 
              marginBottom: '12px',
              padding: '12px 16px',
              backgroundColor: '#ECFDF5',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>
                {project.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#555', margin: '4px 0 0 0' }}>
                {project.description}
              </p>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '12px',
                  color: '#10B981',
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Certifications</h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ 
              padding: '8px 14px',
              backgroundColor: '#FEF3C7',
              borderRadius: '6px',
              marginBottom: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{cert.name}</span>
                <span style={{ fontSize: '12px', color: '#666' }}>{cert.year}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#555', margin: '2px 0 0 0' }}>
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Achievements</h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ 
              padding: '8px 14px',
              backgroundColor: '#FCE7F3',
              borderRadius: '6px',
              marginBottom: '8px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{achievement.title}</span>
                <span style={{ fontSize: '12px', color: '#666' }}>{achievement.year}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#555', margin: '2px 0 0 0' }}>
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Languages</h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ 
              padding: '8px 14px',
              backgroundColor: '#FEF3C7',
              borderRadius: '6px',
              marginBottom: '6px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', fontWeight: '600' }}>{lang.name}</span>
                <span style={{ fontSize: '12px', color: '#666' }}>{lang.proficiency}</span>
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
            color: '#EF4444',
            margin: '0 0 12px 0',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>✦ Soft Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#FDE68A',
                color: '#92400E',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600'
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