import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    
    // Remove all theme classes
    root.classList.remove('light', 'dark')
    document.body.classList.remove('light', 'dark')
    
    // Add the current theme
    root.classList.add(theme)
    document.body.classList.add(theme)
    
    localStorage.setItem('theme', theme)
    
    console.log('🌓 Theme changed to:', theme)
    console.log('📋 HTML classes:', root.className)
    console.log('📋 Body classes:', document.body.className)
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