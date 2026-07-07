// Preview PDF - Opens in new tab without auto-print
export const previewPDF = (element) => {
  if (!element) {
    console.error('Element not found for preview')
    return false
  }
  
  try {
    const previewWindow = window.open('', '_blank', 'width=900,height=700')
    if (!previewWindow) {
      alert('Please allow popups for this site to preview.')
      return false
    }
    
    const content = element.innerHTML
    
    const styles = document.querySelectorAll('style')
    let styleTags = ''
    styles.forEach(style => {
      styleTags += style.outerHTML
    })
    
    const links = document.querySelectorAll('link[rel="stylesheet"]')
    let linkTags = ''
    links.forEach(link => {
      linkTags += link.outerHTML
    })
    
    previewWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume Preview</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${linkTags}
          ${styleTags}
          <style>
            body { 
              padding: 40px; 
              max-width: 1000px; 
              margin: 0 auto;
              background: white;
            }
            * { box-sizing: border-box; }
            .resume-preview { max-width: 100%; }
            .max-h-\\[600px\\] {
              max-height: none !important;
              overflow: visible !important;
            }
            .overflow-y-auto { overflow: visible !important; }
            .border { border: none !important; }
            .no-print { display: none !important; }
          </style>
        </head>
        <body>
          ${content}
          <div style="text-align:center;padding:20px;margin-top:20px;border-top:2px solid #eee;background:#f9f9f9;">
            <button onclick="window.print()" style="padding:12px 30px;background:#2563EB;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;margin-right:10px;">
              🖨️ Print / Save as PDF
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
              }, 800);
            };
          <\/script>
        </body>
      </html>
    `)
    previewWindow.document.close()
    return true
  } catch (error) {
    console.error('Preview Error:', error)
    return false
  }
}

// Download PDF - Opens print dialog (same as before)
export const downloadPDF = (element, filename = 'resume.pdf') => {
  if (!element) {
    console.error('Element not found for download')
    return false
  }
  
  try {
    const printWindow = window.open('', '_blank', 'width=900,height=700')
    if (!printWindow) {
      alert('Please allow popups for this site to download PDF.')
      return false
    }
    
    const content = element.innerHTML
    
    const styles = document.querySelectorAll('style')
    let styleTags = ''
    styles.forEach(style => {
      styleTags += style.outerHTML
    })
    
    const links = document.querySelectorAll('link[rel="stylesheet"]')
    let linkTags = ''
    links.forEach(link => {
      linkTags += link.outerHTML
    })
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${filename}</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          ${linkTags}
          ${styleTags}
          <style>
            body { 
              padding: 40px; 
              max-width: 1000px; 
              margin: 0 auto;
              background: white;
            }
            * { box-sizing: border-box; }
            .resume-preview { max-width: 100%; }
            .max-h-\\[600px\\] {
              max-height: none !important;
              overflow: visible !important;
            }
            .overflow-y-auto { overflow: visible !important; }
            .border { border: none !important; }
            .no-print { display: none !important; }
          </style>
        </head>
        <body>
          ${content}
          <div style="text-align:center;padding:20px;margin-top:20px;border-top:2px solid #eee;background:#f9f9f9;">
            <p style="color:#666;font-size:14px;">Click "Print" and select "Save as PDF" to download</p>
            <button onclick="window.print()" style="padding:12px 30px;background:#22C55E;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;margin-right:10px;">
              🖨️ Print / Save as PDF
            </button>
            <button onclick="window.close()" style="padding:12px 30px;background:#6B7280;color:white;border:none;border-radius:8px;font-size:16px;cursor:pointer;">
              ✖ Close
            </button>
          </div>
          <script>
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
    console.error('Download Error:', error)
    return false
  }
}

export const printPDF = downloadPDF