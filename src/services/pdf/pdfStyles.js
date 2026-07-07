export const pdfStyles = `
  .resume-pdf {
    font-family: 'Inter', Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    color: #1a1a1a;
  }
  
  .resume-header {
    background: linear-gradient(135deg, #2563EB, #7C3AED);
    color: white;
    padding: 30px;
    border-radius: 8px 8px 0 0;
  }
  
  .resume-name {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .resume-title {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 16px;
  }
  
  .resume-contact {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 12px;
    opacity: 0.85;
  }
  
  .resume-section {
    padding: 20px 30px;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .resume-section-title {
    font-size: 20px;
    font-weight: bold;
    color: #2563EB;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid #2563EB;
  }
  
  .resume-item {
    margin-bottom: 20px;
  }
  
  .resume-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
  }
  
  .resume-item-title {
    font-size: 16px;
    font-weight: bold;
    color: #1a1a1a;
  }
  
  .resume-item-subtitle {
    font-size: 14px;
    color: #4b5563;
    margin-bottom: 4px;
  }
  
  .resume-item-date {
    font-size: 12px;
    color: #6b7280;
  }
  
  .resume-item-description {
    font-size: 13px;
    color: #4b5563;
    line-height: 1.5;
    margin-top: 8px;
  }
  
  .resume-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .resume-skill {
    background: #dbeafe;
    color: #1e40af;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
  }
  
  @media print {
    body {
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
    }
    
    .resume-header {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  }
`

export const modernTemplateStyles = {
  header: {
    background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
    color: '#ffffff',
    padding: '30px'
  },
  sectionTitle: {
    color: '#2563EB',
    borderBottom: '2px solid #2563EB'
  },
  skillBadge: {
    background: '#DBEAFE',
    color: '#1E40AF'
  }
}

export const professionalTemplateStyles = {
  header: {
    background: '#1E293B',
    color: '#ffffff',
    padding: '30px'
  },
  sectionTitle: {
    color: '#1E293B',
    borderBottom: '2px solid #475569'
  },
  skillBadge: {
    background: '#F1F5F9',
    color: '#1E293B'
  }
}

export const creativeTemplateStyles = {
  header: {
    background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
    color: '#ffffff',
    padding: '30px'
  },
  sectionTitle: {
    color: '#EC4899',
    borderBottom: '2px solid #EC4899'
  },
  skillBadge: {
    background: '#FCE7F3',
    color: '#BE185D'
  }
}

export const getTemplateStyles = (templateId) => {
  const templates = {
    modern: modernTemplateStyles,
    professional: professionalTemplateStyles,
    creative: creativeTemplateStyles
  }
  return templates[templateId] || modernTemplateStyles
}