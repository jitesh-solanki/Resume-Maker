import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ThemeToggle } from '../../ui/ThemeToggle'

export function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/builder', label: 'Builder', icon: '📝' },
    { path: '/templates', label: 'Templates', icon: '🎨' },
    { path: '/preview', label: 'Preview', icon: '👁️' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform">
            <span className="text-2xl">📄</span>
            <span className="hidden sm:inline">Resume Maker</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white hover:scale-105'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:scale-105 transition-all"
            >
              Login
            </Link>
            <Link
              to="/builder"
              className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg hover:scale-105 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>

            {/* Theme Toggle - Mobile */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <span className="text-2xl dark:text-white">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition ${
                  isActive(item.path)
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="border-t dark:border-gray-700 mt-2 pt-2">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white rounded-lg"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}