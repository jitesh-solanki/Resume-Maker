export function FormSection({ title, icon, children, onSave, onCancel, isEditing = false }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
      </div>
      
      <div className="p-6">
        {children}
        
        {(onSave || onCancel) && (
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
            {onCancel && (
              <button
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
              >
                Cancel
              </button>
            )}
            {onSave && (
              <button
                onClick={onSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {isEditing ? 'Update' : 'Save'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}