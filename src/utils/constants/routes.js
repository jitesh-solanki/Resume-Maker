export const ROUTES = {
  HOME: '/',
  BUILDER: '/builder',
  TEMPLATES: '/templates',
  PREVIEW: '/preview',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '/404'
}

export const NAVIGATION = [
  { name: 'Home', path: ROUTES.HOME, icon: '🏠' },
  { name: 'Builder', path: ROUTES.BUILDER, icon: '📝' },
  { name: 'Templates', path: ROUTES.TEMPLATES, icon: '🎨' },
  { name: 'Preview', path: ROUTES.PREVIEW, icon: '👁️' }
]

export const PROTECTED_ROUTES = [
  ROUTES.DASHBOARD
]

export const AUTH_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.REGISTER
]