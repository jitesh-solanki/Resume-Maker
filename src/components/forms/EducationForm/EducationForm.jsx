import { useState } from 'react'
import { Input } from '../../ui/Input/Input'
import { Button } from '../../ui/Button/Button'

export function EducationForm({ onAdd, onUpdate, onDelete, educationList = [] }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editIndex, setEditIndex] = useState(null)
  const [formData, setFormData] = useState({
    degree: '',
    institution: '',
    year: '',
    gpa: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    if (!formData.degree || !formData.institution) return
    
    if (editIndex !== null) {
      onUpdate(editIndex, formData)
    } else {
      onAdd({ ...formData, id: Date.now() })
    }
    resetForm()
  }

  const handleEdit = (index) => {
    setFormData(educationList[index])
    setEditIndex(index)
    setIsEditing(true)
  }

  const resetForm = () => {
    setFormData({ degree: '', institution: '', year: '', gpa: '' })
    setEditIndex(null)
    setIsEditing(false)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold mb-3">{isEditing ? 'Edit Education' : 'Add Education'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="B.Sc. Computer Science"
          />
          <Input
            label="Institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            placeholder="University Name"
          />
          <Input
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="2020-2024"
          />
          <Input
            label="GPA (Optional)"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            placeholder="3.8/4.0"
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

      {educationList.length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold">Education History</h3>
          {educationList.map((edu, index) => (
            <div key={edu.id || index} className="bg-white border rounded-lg p-3 flex justify-between items-start">
              <div>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.year}</p>
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
          ))}
        </div>
      )}
    </div>
  )
}