// PDF Library Configuration
export const pdfConfig = {
  // Default PDF settings
  defaults: {
    pageSize: 'A4',
    orientation: 'portrait',
    margin: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40
    }
  },
  
  // Font configurations
  fonts: {
    heading: {
      family: 'Helvetica',
      style: 'bold',
      size: 24
    },
    subheading: {
      family: 'Helvetica',
      style: 'bold',
      size: 16
    },
    body: {
      family: 'Helvetica',
      style: 'normal',
      size: 11
    },
    small: {
      family: 'Helvetica',
      style: 'normal',
      size: 9
    }
  },
  
  // Color schemes
  colors: {
    modern: {
      primary: '#2563EB',
      secondary: '#7C3AED',
      text: '#1F2937',
      textLight: '#6B7280'
    },
    professional: {
      primary: '#1E293B',
      secondary: '#475569',
      text: '#0F172A',
      textLight: '#64748B'
    },
    creative: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      text: '#1F2937',
      textLight: '#6B7280'
    }
  }
}

// Helper function to get color scheme
export const getColorScheme = (template = 'modern') => {
  return pdfConfig.colors[template] || pdfConfig.colors.modern
}

// Helper function to format date for PDF
export const formatDateForPDF = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

// Helper to check if content fits on page
export const estimateContentHeight = (contentLength, fontSize = 11) => {
  const lineHeight = fontSize * 1.5
  const linesPerPage = 750 / lineHeight
  return Math.ceil(contentLength / 50) * lineHeight // Rough estimate
}