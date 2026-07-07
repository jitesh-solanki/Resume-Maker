import { useState } from 'react'
import { Input } from '../../ui/Input/Input'
import { Button } from '../../ui/Button/Button'

export function ExperienceForm({ onAdd, onUpdate, onDelete, experienceList = [] }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = () => {
    if (!formData.title || !formData.company) return
    
    if (editIndex !== null) {
      onUpdate(editIndex, formData)
    } else {
      onAdd({ ...formData, id: Date.now() })
    }
    resetForm()
  }

  const handleEdit = (index) => {
    setFormData(experienceList[index])
    setEditIndex(index)
    setIsEditing(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    })
    setEditIndex(null)
    setIsEditing(false)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-3">{isEditing ? 'Edit Experience' : 'Add Experience'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Job Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Senior Developer"
          />
          <Input
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <Input
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="New York, NY"
          />
          <Input
            label="Start Date"
            name="startDate"
            type="month"
            value={formData.startDate}
            onChange={handleChange}
          />
          <Input
            label="End Date"
            name="endDate"
            type="month"
            value={formData.endDate}
            onChange={handleChange}
            disabled={formData.current}
          />
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="current"
              checked={formData.current}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-700">I currently work here</span>
          </label>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your responsibilities and achievements..."
          />
        </div>
        <div className="flex gap-2 mt-3">
          <Button onClick={handleSubmit} size="sm">
            {isEditing ? 'Update' : 'Add'}
          </Button>
          {isEditing && (
            <Button onClick={resetForm} variant="secondary" size="sm">
              Cancel
            </Button>
          )}
        </div>
      </div>

      {experienceList.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Work Experience</h3>
          {experienceList.map((exp, index) => (
            <div key={exp.id || index} className="bg-white border rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{exp.title}</p>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                  <p className="text-sm text-gray-700 mt-1">{exp.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(index)} className="text-blue-600 hover:text-blue-700">
                    ✏️
                  </button>
                  <button onClick={() => onDelete(index)} className="text-red-600 hover:text-red-700">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}