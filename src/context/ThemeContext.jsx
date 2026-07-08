import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Get saved theme or default to 'light'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    
    // Remove both classes
    root.classList.remove('light', 'dark')
    // Add current theme
    root.classList.add(theme)
    
    // Also handle body
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    
    // Save
    localStorage.setItem('theme', theme)
    
    console.log('🌓 Theme changed to:', theme) // Debug
    console.log('📋 HTML classes:', root.className) // Debug
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}