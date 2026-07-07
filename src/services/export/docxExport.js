// Note: For full DOCX support, install: npm install docx
// This is a simplified version

export const exportToDOCX = async (resumeData) => {
  try {
    // Simple HTML to DOCX using blob
    const htmlContent = generateHTMLResume(resumeData)
    const blob = new Blob([htmlContent], { type: 'application/msword' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `resume-${Date.now()}.doc`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    return true
  } catch (error) {
    console.error('DOCX Export Error:', error)
    return false
  }
}

const generateHTMLResume = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${data.personal?.fullName || 'Resume'}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          line-height: 1.6;
        }
        h1 { color: #2563EB; }
        .header { margin-bottom: 30px; }
        .section { margin-bottom: 25px; }
        .section-title { 
          color: #2563EB;
          border-bottom: 2px solid #2563EB;
          padding-bottom: 5px;
        }
        .job, .education { margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${data.personal?.fullName || ''}</h1>
        <p>${data.personal?.email || ''} | ${data.personal?.phone || ''}</p>
        <p>${data.personal?.address || ''}</p>
      </div>
      
      ${data.personal?.summary ? `
        <div class="section">
          <h2 class="section-title">Professional Summary</h2>
          <p>${data.personal.summary}</p>
        </div>
      ` : ''}
      
      ${data.experience?.length ? `
        <div class="section">
          <h2 class="section-title">Work Experience</h2>
          ${data.experience.map(exp => `
            <div class="job">
              <strong>${exp.title}</strong> - ${exp.company}<br>
              ${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}<br>
              <p>${exp.description}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${data.education?.length ? `
        <div class="section">
          <h2 class="section-title">Education</h2>
          ${data.education.map(edu => `
            <div class="education">
              <strong>${edu.degree}</strong><br>
              ${edu.institution}<br>
              ${edu.year}
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${data.skills?.length ? `
        <div class="section">
          <h2 class="section-title">Skills</h2>
          <p>${data.skills.join(', ')}</p>
        </div>
      ` : ''}
    </body>
    </html>
  `
}