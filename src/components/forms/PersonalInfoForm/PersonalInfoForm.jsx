import { useState, useEffect } from 'react'
import { Input } from '../../ui/Input/Input'

export function PersonalInfoForm({ initialData, onSave }) {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    address: initialData?.address || '',
    linkedin: initialData?.linkedin || '',
    github: initialData?.github || '',
    summary: initialData?.summary || ''
  })

  // Auto-save when data changes
  useEffect(() => {
    const timer = setTimeout(() => {
      onSave(formData)
    }, 500)

    return () => clearTimeout(timer)
  }, [formData, onSave])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
      <div className="space-y-4">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 234 567 8900"
        />
        <Input
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="New York, USA"
        />
        <Input
          label="LinkedIn"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="linkedin.com/in/johndoe"
        />
        <Input
          label="GitHub"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="github.com/johndoe"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Professional Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a brief summary of your professional background..."
          />
        </div>
      </div>
      <div className="mt-4 text-right text-sm text-green-600">
        ✓ Auto-saved
      </div>
    </div>
  )
}