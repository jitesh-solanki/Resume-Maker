import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resume Maker
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 opacity-90">
            Create professional resumes in minutes
          </p>
          <div className="space-x-4">
            <Link 
              to="/builder" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Build Resume
            </Link>
            <Link 
              to="/templates" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              View Templates
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
            <p className="text-white/80">Simple form interface to fill your information</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Multiple Templates</h3>
            <p className="text-white/80">Choose from 10+ professional designs</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-xl font-semibold text-white mb-2">PDF Export</h3>
            <p className="text-white/80">Download your resume as PDF instantly</p>
          </div>
        </div>
      </div>
    </div>
  )
}