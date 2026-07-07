import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📄</span>
              <span className="text-lg font-bold text-white">Resume Maker</span>
            </div>
            <p className="text-sm">
              Create professional resumes in minutes. Stand out from the crowd with our beautiful templates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/builder" className="hover:text-white transition">Resume Builder</Link></li>
              <li><Link to="/templates" className="hover:text-white transition">Templates</Link></li>
              <li><Link to="/preview" className="hover:text-white transition">Preview</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Resume Tips</a></li>
              <li><a href="#" className="hover:text-white transition">Cover Letter Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>📧 support@resumemaker.com</li>
              <li>🐦 Twitter: @resumemaker</li>
              <li>💻 GitHub: /resumemaker</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-sm text-center">
          <p>&copy; {currentYear} Resume Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}