import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import './styles/globals.css'
import './styles/variables.css'
import './styles/typography.css'
import { ThemeProvider } from './context/ThemeContext'

// Remove all service workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('Service worker unregistered');
    }
  });
}

// Clear caches
if ('caches' in window) {
  caches.keys().then(function(names) {
    for(let name of names) {
      caches.delete(name);
      console.log('Cache deleted:', name);
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)