import { Link } from 'react-router-dom'
import { useResumeStore } from '../../store/rootStore'
import { ResumePreview } from '../../components/resume/ResumePreview/ResumePreview'
import { getTemplateById } from '../../features/templates/data/templateRegistry'

export function Preview() {
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate)
  const resume = useResumeStore((state) => state.resume)
  const template = getTemplateById(selectedTemplate)

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header with actions */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Resume Preview</h1>
            {template && (
              <p className="text-sm text-gray-500 mt-1">
                Template: <span className="font-semibold text-blue-600">{template.name}</span>
              </p>
            )}
            {resume.personal?.fullName && (
              <p className="text-sm text-gray-400 mt-1">
                Resume for: <span className="font-medium">{resume.personal.fullName}</span>
              </p>
            )}
          </div>
          <div className="space-x-4">
            <Link
              to="/builder"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ✏️ Edit
            </Link>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              📄 Download PDF
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          <ResumePreview />
        </div>
      </div>
    </div>
  )
}