import html2pdf from 'html2pdf.js'

export const generatePDF = async (element, options = {}) => {
  const defaultOptions = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, letterRendering: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }

  const config = { ...defaultOptions, ...options }
  
  try {
    const pdf = await html2pdf().set(config).from(element).save()
    return pdf
  } catch (error) {
    console.error('PDF Generation Error:', error)
    throw new Error('Failed to generate PDF')
  }
}

export const generatePDFBlob = async (element, options = {}) => {
  const defaultOptions = {
    margin: [0.5, 0.5, 0.5, 0.5],
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, letterRendering: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }

  const config = { ...defaultOptions, ...options }
  
  try {
    const pdf = await html2pdf().set(config).from(element).output('blob')
    return pdf
  } catch (error) {
    console.error('PDF Generation Error:', error)
    throw new Error('Failed to generate PDF blob')
  }
}

export const downloadPDF = async (element, filename = 'resume.pdf') => {
  try {
    await generatePDF(element, { filename })
    return true
  } catch (error) {
    console.error('Download Error:', error)
    return false
  }
}

export const previewPDF = async (element) => {
  try {
    const pdfBlob = await generatePDFBlob(element)
    const pdfUrl = URL.createObjectURL(pdfBlob)
    window.open(pdfUrl, '_blank')
    setTimeout(() => URL.revokeObjectURL(pdfUrl), 1000)
    return true
  } catch (error) {
    console.error('Preview Error:', error)
    return false
  }
}