import { BrowserRouter } from 'react-router-dom'
import { Providers } from './providers'
import { AppRoutes } from './AppRoutes'
import { Layout } from '../components/layout/Layout'

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Providers>
  )
}