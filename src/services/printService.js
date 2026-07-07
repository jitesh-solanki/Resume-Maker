// Print service with optimized styles for printing
export const printResume = (element) => {
  if (!element) {
    console.error('Element not found for printing')
    return false
  }

  try {
    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=900,height=700')
    if (!printWindow) {
      alert('Please allow popups for this site to print.')
      return false
    }

    // Clone the element content
    const content = element.innerHTML

    // Get all styles from the main document
    const styles = document.querySelectorAll('style')
    let styleTags = ''
    styles.forEach(style => {
      // Skip any print styles that might conflict
      if (!style.textContent.includes('@media print')) {
        styleTags += style.outerHTML
      }
    })

    // Get external stylesheets
    const links = document.querySelectorAll('link[rel="stylesheet"]')
    let linkTags = ''
    links.forEach(link => {
      linkTags += link.outerHTML
    })

    // Write to print window with optimized print styles
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${linkTags}
          ${styleTags}
          <style>
            /* Reset and base styles */
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            
            body {
              font-family: 'Inter', 'Poppins', Arial, sans-serif;
              padding: 40px;
              max-width: 1000px;
              margin: 0 auto;
              background: white;
              color: #1a1a1a;
              line-height: 1.6;
            }

            /* Hide scrollbars and overflow */
            .resume-preview {
              max-width: 100%;
              overflow: visible !important;
            }

            .max-h-\\[600px\\] {
              max-height: none !important;
              overflow: visible !important;
            }

            .overflow-y-auto {
              overflow: visible !important;
            }

            .border {
              border: none !important;
            }

            .rounded-lg {
              border-radius: 0 !important;
            }

            .shadow {
              box-shadow: none !important;
            }

            .shadow-lg {
              box-shadow: none !important;
            }

            .shadow-xl {
              box-shadow: none !important;
            }

            .bg-white {
              background: white !important;
            }

            .bg-gray-50 {
              background: white !important;
            }

            .bg-gray-100 {
              background: white !important;
            }

            /* Remove any buttons or interactive elements */
            button, .no-print {
              display: none !important;
            }

            /* Template specific fixes */
            .professional-template,
            .modern-template,
            .executive-template,
            .creative-template,
            .minimal-clean-template,
            .two-column-template,
            .timeline-template,
            .compact-template {
              padding: 20px !important;
              max-width: 100% !important;
              background: white !important;
            }

            /* Two column template fixes */
            .two-column-template {
              display: block !important;
              min-height: auto !important;
            }

            .two-column-template > div:first-child {
              width: 100% !important;
              background: #1a2a3a !important;
              color: white !important;
              padding: 20px !important;
              margin-bottom: 20px !important;
            }

            .two-column-template > div:last-child {
              width: 100% !important;
              padding: 20px !important;
            }

            /* Timeline template fixes */
            .timeline-template .border-l-2 {
              border-left: 2px solid #2563EB !important;
            }

            /* Print specific styles */
            @media print {
              body {
                padding: 20px;
                margin: 0 auto;
              }

              .no-print {
                display: none !important;
              }

              .page-break {
                page-break-before: always;
              }

              /* Ensure colors print correctly */
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }

              /* Two column template print fix */
              .two-column-template {
                display: flex !important;
                flex-direction: row !important;
              }

              .two-column-template > div:first-child {
                width: 30% !important;
                min-height: 100vh !important;
              }

              .two-column-template > div:last-child {
                width: 70% !important;
              }
            }

            /* Dark background text colors for two-column */
            .two-column-template [style*="background-color: #1a2a3a"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            .two-column-template .text-white {
              color: white !important;
            }

            .two-column-template .text-\\#e8e8e8 {
              color: #e8e8e8 !important;
            }

            .two-column-template .text-\\#8aa0b8 {
              color: #8aa0b8 !important;
            }

            .two-column-template .text-\\#6a8aa8 {
              color: #6a8aa8 !important;
            }

            /* Gradients for templates */
            [style*="linear-gradient"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            /* Creative template */
            .creative-template [style*="background: linear-gradient"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          </style>
        </head>
        <body>
          ${content}
          <div style="text-align:center;padding:20px;margin-top:20px;border-top:2px solid #eee;background:#f9f9f9;page-break-inside:avoid;">
            <p style="color:#666;font-size:14px;margin-bottom:10px;">Print or Save as PDF</p>
            <button onclick="window.print()" style="padding:12px 30px;background:#2563EB;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;margin-right:10px;">
              🖨️ Print
            </button>
            <button onclick="window.close()" style="padding:12px 30px;background:#6B7280;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;">
              ✖ Close
            </button>
          </div>
          <script>
            // Auto-print when loaded
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 600);
            };
          <\/script>
        </body>
      </html>
    `)
    printWindow.document.close()
    return true
  } catch (error) {
    console.error('Print Error:', error)
    return false
  }
}

// Direct print from current page
export const printCurrentPage = () => {
  window.print()
}