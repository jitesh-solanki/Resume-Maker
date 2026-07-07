import { useResumeStore } from '../../../store/rootStore'

export function TimelineTemplate({ enabledSections = [] }) {
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
    <div className="timeline-template" style={{
      fontFamily: "'Inter', 'Arial', sans-serif",
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
          textAlign: 'center',
          borderBottom: '3px solid #2563EB',
          paddingBottom: '20px'
        }}>
          <h1 style={{
            fontSize: '44px',
            fontWeight: '700',
            color: '#1a1a1a',
            margin: '0 0 4px 0'
          }}>
            {resume.personal?.fullName}
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#2563EB',
            margin: '0 0 10px 0'
          }}>
            {resume.personal?.title || 'Professional'}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: '#666'
          }}>
            {resume.personal?.email && <span>{resume.personal.email}</span>}
            {resume.personal?.phone && <span>{resume.personal.phone}</span>}
            {resume.personal?.address && <span>{resume.personal.address}</span>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '25px' }}>
          <p style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#444',
            margin: 0,
            textAlign: 'center',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {resume.personal.summary}
          </p>
        </div>
      )}

      {/* EDUCATION TIMELINE */}
      {isSectionEnabled('education') && resume.education?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 15px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: '#2563EB',
              borderRadius: '50%'
            }}></span>
            Education
          </h2>
          <div style={{ paddingLeft: '20px', borderLeft: '2px solid #2563EB' }}>
            {resume.education.map((edu, index) => (
              <div key={edu.id || index} style={{ 
                marginBottom: '20px',
                paddingLeft: '15px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '5px',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#2563EB',
                  borderRadius: '50%',
                  border: '2px solid #fff'
                }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>
                    {edu.institution}
                  </span>
                  <span style={{ fontSize: '13px', color: '#2563EB', fontWeight: '500' }}>
                    {edu.year}
                  </span>
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
        </div>
      )}

      {/* EXPERIENCE TIMELINE */}
      {isSectionEnabled('experience') && resume.experience?.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 15px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: '#2563EB',
              borderRadius: '50%'
            }}></span>
            Experience
          </h2>
          <div style={{ paddingLeft: '20px', borderLeft: '2px solid #2563EB' }}>
            {resume.experience.map((exp, index) => (
              <div key={exp.id || index} style={{ 
                marginBottom: '20px',
                paddingLeft: '15px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  left: '-6px',
                  top: '5px',
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#2563EB',
                  borderRadius: '50%',
                  border: '2px solid #fff'
                }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>
                    {exp.title}
                  </span>
                  <span style={{ fontSize: '13px', color: '#2563EB', fontWeight: '500' }}>
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
        </div>
      )}

      {/* PROJECTS */}
      {isSectionEnabled('projects') && resume.projects?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 15px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Projects</h2>
          {resume.projects.map((project, index) => (
            <div key={project.id || index} style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '15px', fontWeight: '600' }}>{project.name}</span>
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

      {/* SKILLS */}
      {isSectionEnabled('skills') && resume.skills?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#EFF6FF',
                color: '#1E40AF',
                padding: '4px 14px',
                borderRadius: '4px',
                fontSize: '13px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CERTIFICATIONS */}
      {isSectionEnabled('certifications') && resume.certifications?.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Certifications</h2>
          {resume.certifications.map((cert, index) => (
            <div key={cert.id || index} style={{ marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{cert.name}</span>
              <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
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
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Achievements</h2>
          {resume.achievements.map((achievement, index) => (
            <div key={achievement.id || index} style={{ marginBottom: '4px' }}>
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
        <div style={{ marginBottom: '25px' }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Languages</h2>
          {resume.languages.map((lang, index) => (
            <div key={lang.id || index} style={{ marginBottom: '4px' }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>{lang.name}</span>
              <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>
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
            fontSize: '16px',
            fontWeight: '700',
            color: '#2563EB',
            margin: '0 0 10px 0',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Soft Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {resume.softSkills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#EFF6FF',
                color: '#1E40AF',
                padding: '4px 14px',
                borderRadius: '4px',
                fontSize: '13px'
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