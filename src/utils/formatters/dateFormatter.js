export const formatDate = (date, format = 'MM/YYYY') => {
  if (!date) return ''
  
  const d = new Date(date)
  const month = d.toLocaleString('default', { month: 'short' })
  const year = d.getFullYear()
  
  switch (format) {
    case 'MM/YYYY':
      return `${month} ${year}`
    case 'DD/MM/YYYY':
      return `${d.getDate()}/${d.getMonth() + 1}/${year}`
    case 'YYYY-MM-DD':
      return `${year}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    default:
      return `${month} ${year}`
  }
}

export const formatDateRange = (startDate, endDate, isCurrent = false) => {
  const start = formatDate(startDate)
  const end = isCurrent ? 'Present' : formatDate(endDate)
  return `${start} - ${end}`
}

export const getYearOnly = (date) => {
  if (!date) return ''
  return new Date(date).getFullYear()
}