import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Builder } from '../pages/Builder/Builder'
import { Templates } from '../pages/Templates/Templates'
import { Preview } from '../pages/Preview/Preview'
import { Login } from '../pages/Login/Login'
import { NotFound } from '../pages/NotFound/NotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}