export function ResumeHeader({ personalInfo }) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {personalInfo?.fullName || 'Your Name'}
      </h1>
      <p className="text-gray-600 mb-3">
        {personalInfo?.title || 'Professional Resume'}
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        {personalInfo?.email && <span>📧 {personalInfo.email}</span>}
        {personalInfo?.phone && <span>📞 {personalInfo.phone}</span>}
        {personalInfo?.address && <span>📍 {personalInfo.address}</span>}
      </div>
      <div className="flex flex-wrap justify-center gap-3 text-sm mt-2">
        {personalInfo?.linkedin && (
          <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        )}
        {personalInfo?.github && (
          <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer"
             className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}