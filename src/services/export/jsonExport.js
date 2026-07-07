export const exportToJSON = (resumeData) => {
  try {
    const jsonString = JSON.stringify(resumeData, null, 2)
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `resume-${Date.now()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    
    return true
  } catch (error) {
    console.error('JSON Export Error:', error)
    return false
  }
}

export const importFromJSON = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = (event) => {
      try {
        const resumeData = JSON.parse(event.target.result)
        resolve(resumeData)
      } catch (error) {
        reject(new Error('Invalid JSON file'))
      }
    }
    
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}

export const validateJSONStructure = (data) => {
  const requiredSections = ['personal', 'education', 'experience', 'skills']
  const hasRequiredSections = requiredSections.every(section => data.hasOwnProperty(section))
  
  if (!hasRequiredSections) {
    return {
      valid: false,
      error: 'Missing required sections: personal, education, experience, skills'
    }
  }
  
  return { valid: true, error: null }
}