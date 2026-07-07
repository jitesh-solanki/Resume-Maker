import { DynamicForm } from '../../components/forms/DynamicForm'
import { ResumePreview } from '../../components/resume/ResumePreview/ResumePreview'
import { useResumeStore } from '../../store/rootStore'

export function Builder() {
  const loadSampleData = useResumeStore((state) => state.loadSampleData)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
          <button
            onClick={loadSampleData}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Load Sample Data
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Dynamic Forms */}
          <div>
            <DynamicForm />
          </div>

          {/* Right Side - Live Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👁️</span> Live Preview
              </h2>
              <div className="max-h-[600px] overflow-y-auto border rounded-lg p-4">
                <ResumePreview />
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                Your resume updates automatically as you type
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}