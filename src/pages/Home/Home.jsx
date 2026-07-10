import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-purple-700">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Resume Maker
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-12 font-light">
            Create professional resumes in minutes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/builder" 
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white"
            >
              🚀 Build Resume
            </Link>
            <Link 
              to="/templates" 
              className="inline-block bg-white backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🎨 View Templates
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
            <p className="text-white/90">Simple form interface to fill your information</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Multiple Templates</h3>
            <p className="text-white/90">Choose from 10+ professional designs</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all hover:scale-105">
            <div className="text-4xl mb-3">📄</div>
            <h3 className="text-xl font-semibold text-white mb-2">PDF Export</h3>
            <p className="text-white/90">Download your resume as PDF instantly</p>
          </div>
        </div>
      </div>
    </div>
  )
}