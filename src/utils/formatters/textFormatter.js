export const capitalizeWords = (str) => {
  if (!str) return ''
  return str.replace(/\b\w/g, char => char.toUpperCase())
}

export const truncateText = (text, maxLength = 100) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const formatPhoneNumber = (phone) => {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{4})$/)
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}`
  }
  return phone
}

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export const extractInitials = (fullName) => {
  if (!fullName) return ''
  return fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}