import { DynamicForm } from '../../components/forms/DynamicForm'
import { ResumePreview } from '../../components/resume/ResumePreview/ResumePreview'
import { useResumeStore } from '../../store/rootStore'
import { previewPDF, downloadPDF } from '../../services/pdf/pdfGenerator'
import { downloadDOCX } from '../../services/export/docxExport'
import { printResume } from '../../services/printService'
import { useState, useRef } from 'react'

export function Builder() {
  const loadSampleData = useResumeStore((state) => state.loadSampleData)
  const resume = useResumeStore((state) => state.resume)
  const [isPreviewing, setIsPreviewing] = useState(false)
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

  const handlePreviewPDF = () => {
    console.log('Preview PDF button clicked')
    setIsPreviewing(true)
    try {
      const element = getPreviewElement()
      if (element) {
        previewPDF(element)
      } else {
        alert('Could not find the resume preview. Please add some data first.')
      }
    } catch (error) {
      console.error('Preview failed:', error)
      alert('Failed to preview PDF. Please try again.')
    } finally {
      setIsPreviewing(false)
    }
  }

  const handleDownloadPDF = () => {
    console.log('Download PDF button clicked')
    setIsDownloading(true)
    try {
      const element = getPreviewElement()
      if (element) {
        const filename = `${resume.personal?.fullName || 'resume'}.pdf`
        downloadPDF(element, filename)
      } else {
        alert('Could not find the resume preview. Please add some data first.')
      }
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download PDF. Please try again.')
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Resume Builder</h1>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handlePreviewPDF}
              disabled={isPreviewing}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isPreviewing ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                '👁️ Preview'
              )}
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
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
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
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
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
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
            <button
              onClick={loadSampleData}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Load Sample Data
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <DynamicForm />
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👁️</span> Live Preview
              </h2>
              <div 
                id="resume-preview-content" 
                ref={previewRef}
                className="max-h-[600px] overflow-y-auto border rounded-lg p-4"
              >
                <ResumePreview />
              </div>
              <div className="mt-4 text-center text-sm text-gray-500">
                Your resume updates automatically as you type
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}