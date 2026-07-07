import { useResumeStore } from '../../../store/rootStore'
import { ProfessionalTemplate } from '../../../features/templates/components/ProfessionalTemplate'
import { ModernTemplate } from '../../../features/templates/components/ModernTemplate'
import { ExecutiveTemplate } from '../../../features/templates/components/ExecutiveTemplate'
import { CreativeTemplate } from '../../../features/templates/components/CreativeTemplate'
import { MinimalCleanTemplate } from '../../../features/templates/components/MinimalCleanTemplate'
import { TwoColumnTemplate } from '../../../features/templates/components/TwoColumnTemplate'
import { TimelineTemplate } from '../../../features/templates/components/TimelineTemplate'
import { CompactTemplate } from '../../../features/templates/components/CompactTemplate'

// Wrapper component that passes enabled sections to templates
const TemplateWrapper = ({ TemplateComponent }) => {
  const resume = useResumeStore((state) => state.resume)
  const sections = useResumeStore((state) => state.sections)
  
  // Get enabled sections sorted by order
  const getEnabledSections = () => {
    return Object.entries(sections || {})
      .filter(([_, config]) => config?.enabled)
      .sort((a, b) => (a[1]?.order || 0) - (b[1]?.order || 0))
      .map(([id]) => id)
  }

  const enabledSections = getEnabledSections()

  // If no sections enabled, show message
  if (enabledSections.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">No Sections Selected</h3>
        <p className="text-gray-500 text-sm">
          Please enable at least one section in the Section Manager above.
        </p>
      </div>
    )
  }

  // Render the template with enabled sections
  return <TemplateComponent enabledSections={enabledSections} />
}

export function ResumePreview() {
  const resume = useResumeStore((state) => state.resume)
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate)

  // Check if there's any data at all
  const hasData = resume.personal?.fullName || 
                  resume.education?.length > 0 || 
                  resume.experience?.length > 0 || 
                  resume.skills?.length > 0 ||
                  resume.projects?.length > 0 ||
                  resume.certifications?.length > 0 ||
                  resume.achievements?.length > 0 ||
                  resume.languages?.length > 0 ||
                  resume.softSkills?.length > 0

  if (!hasData) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📄</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">No Resume Data Yet</h3>
        <p className="text-gray-500 text-sm">
          Fill out the form on the left to see your resume preview here.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Selected Template: {selectedTemplate}
        </p>
      </div>
    )
  }

  const renderTemplate = () => {
    switch(selectedTemplate) {
      case 'professional':
        return <TemplateWrapper TemplateComponent={ProfessionalTemplate} />
      case 'modern':
        return <TemplateWrapper TemplateComponent={ModernTemplate} />
      case 'executive':
        return <TemplateWrapper TemplateComponent={ExecutiveTemplate} />
      case 'creative':
        return <TemplateWrapper TemplateComponent={CreativeTemplate} />
      case 'minimal':
        return <TemplateWrapper TemplateComponent={MinimalCleanTemplate} />
      case 'twoColumn':
        return <TemplateWrapper TemplateComponent={TwoColumnTemplate} />
      case 'timeline':
        return <TemplateWrapper TemplateComponent={TimelineTemplate} />
      case 'compact':
        return <TemplateWrapper TemplateComponent={CompactTemplate} />
      default:
        return <TemplateWrapper TemplateComponent={ProfessionalTemplate} />
    }
  }

  return (
    <div>
      <div className="text-xs text-gray-400 text-right mb-2">
        Template: {selectedTemplate}
      </div>
      {renderTemplate()}
    </div>
  )
}