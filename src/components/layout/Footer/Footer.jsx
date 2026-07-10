import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      style={{
        backgroundColor: '#111827',
        color: '#e5e7eb',
        marginTop: 'auto',
        transition: 'background-color 0.2s, color 0.2s'
      }}
      className="mt-auto"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📄</span>
              <span className="text-lg font-bold" style={{ color: '#ffffff' }}>Resume Maker</span>
            </div>
            <p className="text-sm" style={{ color: '#9ca3af' }}>
              Create professional resumes in minutes. Stand out from the crowd with our beautiful templates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: '#ffffff' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/builder" style={{ color: '#9ca3af' }} className="hover:text-white transition">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/templates" style={{ color: '#9ca3af' }} className="hover:text-white transition">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/preview" style={{ color: '#9ca3af' }} className="hover:text-white transition">
                  Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: '#ffffff' }}>Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" style={{ color: '#9ca3af' }} className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" style={{ color: '#9ca3af' }} className="hover:text-white transition">Resume Tips</a></li>
              <li><a href="#" style={{ color: '#9ca3af' }} className="hover:text-white transition">Cover Letter Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: '#ffffff' }}>Contact</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#9ca3af' }}>
              <li>📧 support@resumemaker.com</li>
              <li>🐦 Twitter: @resumemaker</li>
              <li>💻 GitHub: /resumemaker</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 text-sm text-center" style={{ borderColor: '#374151', color: '#6b7280' }}>
          <p>&copy; {currentYear} Resume Maker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}