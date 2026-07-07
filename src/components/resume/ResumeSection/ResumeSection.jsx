export function ResumeSection({ title, icon, children, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h2 className="text-lg font-bold text-gray-800 border-b-2 border-blue-500 pb-1">
          {title}
        </h2>
      </div>
      <div className="pl-2">
        {children}
      </div>
    </div>
  )
}