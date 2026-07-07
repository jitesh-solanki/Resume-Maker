import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}