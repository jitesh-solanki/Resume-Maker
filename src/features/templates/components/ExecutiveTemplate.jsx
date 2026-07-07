import { useResumeStore } from '../../../store/rootStore'

export function ExecutiveTemplate({ enabledSections = [] }) {
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
    <div className="executive-template" style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: '#0F172A',
      backgroundColor: '#ffffff',
      padding: '50px',
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.7'
    }}>
      
      {/* HEADER */}
      {isSectionEnabled('header') && (
        <div style={{ 
          marginBottom: '35px',
          borderBottom: '3px solid #0F172A',
          paddingBottom: '25px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 5px 0',
            letterSpacing: '1px'
          }}>
            {resume.personal?.fullName}
          </h1>
          <p style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#334155',
            margin: '0 0 15px 0',
            letterSpacing: '2px'
          }}>
            {resume.personal?.title || 'Executive'}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '25px',
            fontSize: '15px',
            color: '#475569'
          }}>
            {resume.personal?.phone && <span>📞 {resume.personal.phone}</span>}
            {resume.personal?.email && <span>✉️ {resume.personal.email}</span>}
            {resume.personal?.address && <span>📍 {resume.personal.address}</span>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Executive Summary</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#334155',
            margin: 0,
            textAlign: 'justify'
          }}>
            {resume.personal.summary}
          </p>
        </div>
      )}

      {/* EDUCATION */}
      {isSectionEnabled('education') && resume.education?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Education</h2>
          {resume.education.map((edu, index) => (
            <div key={edu.id || index} style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>
                  {edu.institution}
                </h3>
                <span style={{ fontSize: '15px', color: '#64748B', fontStyle: 'italic' }}>
                  {edu.year}
                </span>
              </div>
              <p style={{ fontSize: '16px', fontWeight: '600', margin: '4px 0', color: '#475569' }}>
                {edu.degree}
              </p>
              {edu.description && (
                <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* EXPERIENCE */}
      {isSectionEnabled('experience') && resume.experience?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Professional Experience</h2>
          {resume.experience.map((exp, index) => (
            <div key={exp.id || index} style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>
                  {exp.title}
                </h3>
                <span style={{ fontSize: '15px', color: '#64748B', fontStyle: 'italic' }}>
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p style={{ fontSize: '16px', fontWeight: '600', margin: '4px 0', color: '#475569' }}>
                {exp.company}
              </p>
              {exp.description && (
                <p style={{ fontSize: '15px', color: '#64748B', margin: 0, lineHeight: '1.6' }}>
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* SKILLS */}
      {isSectionEnabled('skills') && resume.skills?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Core Competencies</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '10px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#F1F5F9',
                color: '#1E293B',
                padding: '8px 18px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* PROJECTS */}
      {isSectionEnabled('projects') && resume.projects?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Projects</h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>
                {project.name}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '4px 0 0 0' }}>
                {project.description}
              </p>
              {project.link && project.link !== '#' && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '13px',
                  color: '#0F172A',
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
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Certifications</h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>{cert.name}</span>
                <span style={{ fontSize: '14px', color: '#64748B' }}>{cert.year}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '2px 0 0 0' }}>
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ACHIEVEMENTS */}
      {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Achievements</h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ marginTop: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>{achievement.title}</span>
                <span style={{ fontSize: '14px', color: '#64748B' }}>{achievement.year}</span>
              </div>
              <p style={{ fontSize: '14px', color: '#64748B', margin: '2px 0 0 0' }}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* LANGUAGES */}
      {isSectionEnabled('languages') && resume.languages?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Languages</h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ marginTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '16px', fontWeight: '600' }}>{lang.name}</span>
                <span style={{ fontSize: '14px', color: '#64748B' }}>{lang.proficiency}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SOFT SKILLS */}
      {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#0F172A',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            borderBottom: '2px solid #0F172A',
            paddingBottom: '8px'
          }}>Soft Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '10px' }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#F1F5F9',
                color: '#1E293B',
                padding: '8px 18px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.5px'
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