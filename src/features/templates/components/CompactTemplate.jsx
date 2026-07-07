import { useResumeStore } from '../../../store/rootStore'

export function CompactTemplate({ enabledSections = [] }) {
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
    <div className="compact-template" style={{
      fontFamily: "'Inter', 'Arial', sans-serif",
      color: '#1a1a1a',
      backgroundColor: '#ffffff',
      padding: '30px 35px',
      maxWidth: '950px',
      margin: '0 auto',
      lineHeight: '1.5',
      fontSize: '13px'
    }}>
      
      {/* HEADER */}
      {isSectionEnabled('header') && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          marginBottom: '15px',
          borderBottom: '2px solid #1a1a1a',
          paddingBottom: '12px'
        }}>
          <div>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0',
              letterSpacing: '-0.5px'
            }}>
              {resume.personal?.fullName}
            </h1>
            <p style={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#555',
              margin: '2px 0 0 0'
            }}>
              {resume.personal?.title || 'Professional'}
            </p>
          </div>
          <div style={{
            textAlign: 'right',
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.8'
          }}>
            {resume.personal?.email && <div>{resume.personal.email}</div>}
            {resume.personal?.phone && <div>{resume.personal.phone}</div>}
            {resume.personal?.address && <div>{resume.personal.address}</div>}
            {resume.personal?.linkedin && <div>{resume.personal.linkedin}</div>}
            {resume.personal?.github && <div>{resume.personal.github}</div>}
          </div>
        </div>
      )}

      {/* SUMMARY */}
      {isSectionEnabled('summary') && resume.personal?.summary && (
        <div style={{ marginBottom: '12px' }}>
          <p style={{
            fontSize: '13px',
            lineHeight: '1.6',
            color: '#444',
            margin: 0
          }}>
            {resume.personal.summary}
          </p>
        </div>
      )}

      {/* GRID LAYOUT */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: '20px',
        marginTop: '12px'
      }}>
        {/* LEFT COLUMN */}
        <div>
          {/* Education */}
          {isSectionEnabled('education') && resume.education?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Education</h2>
              {resume.education.map((edu, index) => (
                <div key={edu.id || index} style={{ marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>
                      {edu.institution}
                    </span>
                    <span style={{ fontSize: '11px', color: '#888' }}>{edu.year}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#555', margin: '1px 0 0 0' }}>
                    {edu.degree}
                  </p>
                  {edu.description && (
                    <p style={{ fontSize: '11px', color: '#777', margin: '1px 0 0 0' }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {isSectionEnabled('skills') && resume.skills?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Skills</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {resume.skills.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f0f0f0',
                    padding: '1px 10px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    color: '#333'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Certifications */}
          {isSectionEnabled('certifications') && resume.certifications?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Certifications</h2>
              {resume.certifications.map((cert, index) => (
                <div key={cert.id || index} style={{ fontSize: '12px', color: '#555', marginBottom: '2px' }}>
                  {cert.name} • {cert.issuer} ({cert.year})
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {isSectionEnabled('languages') && resume.languages?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Languages</h2>
              {resume.languages.map((lang, index) => (
                <div key={lang.id || index} style={{ fontSize: '12px', color: '#555' }}>
                  {lang.name} - {lang.proficiency}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Experience */}
          {isSectionEnabled('experience') && resume.experience?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Experience</h2>
              {resume.experience.map((exp, index) => (
                <div key={exp.id || index} style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '13px', fontWeight: '600' }}>
                      {exp.title}
                    </span>
                    <span style={{ fontSize: '11px', color: '#888' }}>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#666', margin: '1px 0 2px 0' }}>
                    {exp.company}
                  </p>
                  {exp.description && (
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {isSectionEnabled('projects') && resume.projects?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Projects</h2>
              {resume.projects.map((project, index) => (
                <div key={project.id || index} style={{ marginBottom: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>{project.name}</span>
                  <p style={{ fontSize: '12px', color: '#555', margin: '1px 0 0 0' }}>
                    {project.description}
                  </p>
                  {project.link && project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: '11px',
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

          {/* Achievements */}
          {isSectionEnabled('achievements') && resume.achievements?.length > 0 && (
            <div style={{ marginBottom: '12px' }}>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Achievements</h2>
              {resume.achievements.map((achievement, index) => (
                <div key={achievement.id || index} style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '500' }}>{achievement.title}</span>
                  <p style={{ fontSize: '11px', color: '#555', margin: '1px 0 0 0' }}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Soft Skills */}
          {isSectionEnabled('softSkills') && resume.softSkills?.length > 0 && (
            <div>
              <h2 style={{
                fontSize: '12px',
                fontWeight: '700',
                color: '#1a1a1a',
                margin: '0 0 5px 0',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #ddd',
                paddingBottom: '3px'
              }}>Soft Skills</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                {resume.softSkills.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f0f0f0',
                    padding: '1px 10px',
                    borderRadius: '2px',
                    fontSize: '11px',
                    color: '#333'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}