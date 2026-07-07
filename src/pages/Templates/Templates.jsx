import { useState } from 'react'
import { useResumeStore } from '../../store/rootStore'
import { getAllTemplates, getTemplateFields } from '../../features/templates/data/templateRegistry'

export function Templates() {
  const { selectedTemplate, setSelectedTemplate, loadSampleDataForTemplate } = useResumeStore()
  const [showConfirm, setShowConfirm] = useState(null)

  const templates = getAllTemplates()

  const handleTemplateClick = (templateId) => {
    if (selectedTemplate === templateId) return
    setShowConfirm(templateId)
  }

  const confirmSelection = () => {
    if (showConfirm) {
      setSelectedTemplate(showConfirm)
      setShowConfirm(null)
    }
  }

  const handlePreviewWithSample = (templateId) => {
    // Load sample data for this template
    loadSampleDataForTemplate(templateId)
    // Set the template
    setSelectedTemplate(templateId)
    // Navigate to preview page
    window.location.href = '/preview'
  }

  const getTemplateName = (id) => {
    const template = templates.find(t => t.id === id)
    return template ? template.name : ''
  }

  if (templates.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Templates Available</h2>
          <p className="text-gray-500">Please add templates to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Template</h1>
          <p className="text-xl text-gray-600">Select a professional design for your resume</p>
          <p className="text-sm text-blue-600 mt-3 flex items-center justify-center gap-2">
            <span>💡</span> Click "Preview" to see how each template looks with sample data!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 cursor-pointer ${
                selectedTemplate === template.id ? 'ring-4 ring-blue-500 shadow-xl' : ''
              }`}
            >
              <div className="h-32 bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                <span className="text-5xl">{template.previewImage || '📄'}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{template.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{template.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTemplateClick(template.id)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition ${
                      selectedTemplate === template.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {selectedTemplate === template.id ? '✓ Selected' : 'Select'}
                  </button>
                  <button
                    onClick={() => handlePreviewWithSample(template.id)}
                    className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm"
                    title="Preview with sample data"
                  >
                    👁️ Preview
                  </button>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {template.styles?.slice(0, 3).map((style, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTemplate && (
          <div className="text-center mt-10">
            <button
              onClick={() => window.location.href = '/builder'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Continue to Builder →
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="text-center mb-4">
              <div className="text-5xl mb-3">⚠️</div>
              <h3 className="text-xl font-bold text-gray-800">Change Template?</h3>
            </div>
            
            <p className="text-gray-600 mb-4 text-center">
              Switch to <strong className="text-blue-600">{getTemplateName(showConfirm)}</strong>?
            </p>
            
            <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg mb-6">
              This will replace your current data with sample content for this template.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(null)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmSelection}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Confirm Change
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}