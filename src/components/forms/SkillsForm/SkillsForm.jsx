import { useState } from 'react'
import { Input } from '../../ui/Input/Input'
import { Button } from '../../ui/Button/Button'

export function SkillsForm({ skills = [], onAdd, onRemove }) {
  const [newSkill, setNewSkill] = useState('')

  const handleAdd = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      onAdd(newSkill.trim())
      setNewSkill('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter a skill (e.g., React, JavaScript)"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={handleAdd} size="sm">
            Add Skill
          </Button>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => onRemove(index)}
                className="hover:text-blue-900 transition"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      {skills.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-4">
          No skills added yet. Add your technical and professional skills above.
        </p>
      )}
    </div>
  )
}