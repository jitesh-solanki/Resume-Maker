import { Link } from 'react-router-dom'
import { useResumeStore } from '../../store/rootStore'
import { ResumePreview } from '../../components/resume/ResumePreview/ResumePreview'
import { getTemplateById } from '../../features/templates/data/templateRegistry'
import { downloadPDF, previewPDF, printPDF } from '../../services/pdf/pdfGenerator'
import { downloadDOCX } from '../../services/export/docxExport'
import { printResume } from '../../services/printService'
import { useState, useRef } from 'react'

export function Preview() {
  const selectedTemplate = useResumeStore((state) => state.selectedTemplate)
  const resume = useResumeStore((state) => state.resume)
  const template = getTemplateById(selectedTemplate)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloadingDOCX, setIsDownloadingDOCX] = useState(false)
  const [isPrinting, setIsPrinting] = useState(false)
  const previewRef = useRef(null)

  const getPreviewElement = () => {
    let element = document.getElementById('resume-preview-content')
    if (!element && previewRef.current) {
      element = previewRef.current
    }
    if (!element) {
      element = document.querySelector('.resume-preview') || 
                document.querySelector('.professional-template') || 
                document.querySelector('[class*="Template"]')
    }
    return element
  }

  const handleDownloadPDF = async () => {
    console.log('Download PDF button clicked')
    setIsDownloading(true)
    try {
      const element = getPreviewElement()
      console.log('Element found:', element)
      
      if (element) {
        const filename = `${resume.personal?.fullName || 'resume'}.pdf`
        await downloadPDF(element, filename)
      } else {
        alert('Could not find the resume preview. Please add some data first.')
      }
    } catch (error) {
      console.error('PDF download failed:', error)
      const element = getPreviewElement()
      if (element) {
        const usePrint = confirm('PDF generation failed. Would you like to print/save as PDF using browser print?')
        if (usePrint) {
          printPDF(element)
        }
      }
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePreviewPDF = async () => {
    console.log('Preview PDF button clicked')
    setIsDownloading(true)
    try {
      const element = getPreviewElement()
      console.log('Element found:', element)
      
      if (element) {
        await previewPDF(element)
      } else {
        alert('Could not find the resume preview. Please add some data first.')
      }
    } catch (error) {
      console.error('PDF preview failed:', error)
      const element = getPreviewElement()
      if (element) {
        const usePrint = confirm('PDF preview failed. Would you like to use browser print instead?')
        if (usePrint) {
          printPDF(element)
        }
      }
    } finally {
      setIsDownloading(false)
    }
  }

  const handleDownloadDOCX = async () => {
    console.log('Download DOCX button clicked')
    setIsDownloadingDOCX(true)
    try {
      const filename = `${resume.personal?.fullName || 'resume'}.docx`
      await downloadDOCX(resume, filename)
    } catch (error) {
      console.error('DOCX download failed:', error)
      alert('Failed to download DOCX. Please try again.')
    } finally {
      setIsDownloadingDOCX(false)
    }
  }

  const handlePrint = () => {
    console.log('Print button clicked')
    setIsPrinting(true)
    try {
      const element = getPreviewElement()
      if (element) {
        printResume(element)
      } else {
        alert('Could not find the resume preview. Please add some data first.')
      }
    } catch (error) {
      console.error('Print failed:', error)
      alert('Failed to print. Please try again.')
    } finally {
      setIsPrinting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header with actions */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Resume Preview</h1>
            {template && (
              <p className="text-sm text-gray-500 mt-1">
                Template: <span className="font-semibold text-blue-600">{template.name}</span>
              </p>
            )}
            {resume.personal?.fullName && (
              <p className="text-sm text-gray-400 mt-1">
                Resume for: <span className="font-medium">{resume.personal.fullName}</span>
              </p>
            )}
          </div>
          <div className="space-x-4 flex items-center">
            <Link
              to="/builder"
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              ✏️ Edit
            </Link>
            <button
              onClick={handlePreviewPDF}
              disabled={isDownloading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              👁️ Preview PDF
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isDownloading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                '📄 PDF'
              )}
            </button>
            <button
              onClick={handleDownloadDOCX}
              disabled={isDownloadingDOCX}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isDownloadingDOCX ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                '📝 DOCX'
              )}
            </button>
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isPrinting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                '🖨️ Print'
              )}
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          <div id="resume-preview-content" ref={previewRef}>
            <ResumePreview />
          </div>
        </div>
      </div>
    </div>
  )
}