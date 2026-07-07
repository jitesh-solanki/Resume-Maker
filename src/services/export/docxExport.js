import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, convertInchesToTwip } from 'docx'

// Helper to get text from resume data
const getText = (value) => value || ''

export const generateDOCX = async (resumeData) => {
  const { personal, education, experience, skills, projects, certifications, achievements, languages, softSkills } = resumeData

  // Create document sections
  const sections = []

  // ===== HEADER =====
  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: getText(personal?.fullName),
          size: 48,
          bold: true,
          font: 'Arial',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  )

  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: getText(personal?.title),
          size: 28,
          font: 'Arial',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    })
  )

  // Contact info
  const contactParts = []
  if (personal?.phone) contactParts.push(`📞 ${personal.phone}`)
  if (personal?.email) contactParts.push(`✉️ ${personal.email}`)
  if (personal?.address) contactParts.push(`📍 ${personal.address}`)
  if (personal?.linkedin) contactParts.push(`🔗 ${personal.linkedin}`)
  if (personal?.github) contactParts.push(`💻 ${personal.github}`)

  if (contactParts.length > 0) {
    sections.push(
      new Paragraph({
        children: contactParts.map((part, index) => {
          const runs = [
            new TextRun({
              text: part,
              size: 18,
              font: 'Arial',
              color: '333333',
            }),
          ]
          if (index < contactParts.length - 1) {
            runs.push(
              new TextRun({
                text: '  |  ',
                size: 18,
                font: 'Arial',
                color: '999999',
              })
            )
          }
          return runs
        }).flat(),
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      })
    )
  }

  // Separator line
  sections.push(
    new Paragraph({
      children: [
        new TextRun({
          text: '─────────────────────────────────────────────────',
          size: 18,
          font: 'Arial',
          color: '666666',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    })
  )

  // ===== SUMMARY / ABOUT ME =====
  if (personal?.summary) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'ABOUT ME',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: getText(personal.summary),
            size: 22,
            font: 'Arial',
            color: '333333',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 300 },
      })
    )
  }

  // ===== EDUCATION =====
  if (education && education.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'EDUCATION',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    education.forEach((edu) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: getText(edu.institution),
              size: 22,
              bold: true,
              font: 'Arial',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `${getText(edu.degree)}  |  ${getText(edu.year)}`,
              size: 20,
              font: 'Arial',
              color: '555555',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
      if (edu.description) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: getText(edu.description),
                size: 20,
                font: 'Arial',
                color: '444444',
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: { after: 150 },
          })
        )
      }
    })
  }

  // ===== EXPERIENCE =====
  if (experience && experience.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'WORK EXPERIENCE',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    experience.forEach((exp) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: getText(exp.title),
              size: 22,
              bold: true,
              font: 'Arial',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `${getText(exp.company)}  |  ${getText(exp.startDate)} - ${exp.current ? 'Present' : getText(exp.endDate)}`,
              size: 20,
              font: 'Arial',
              color: '555555',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
      if (exp.description) {
        const descLines = exp.description.split('\n')
        descLines.forEach((line) => {
          if (line.trim()) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: `• ${line.trim()}`,
                    size: 20,
                    font: 'Arial',
                    color: '444444',
                  }),
                ],
                alignment: AlignmentType.LEFT,
                spacing: { after: 50 },
              })
            )
          }
        })
      }
      sections.push(
        new Paragraph({
          spacing: { after: 100 },
        })
      )
    })
  }

  // ===== SKILLS =====
  if (skills && skills.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'SKILLS',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: skills.join('  •  '),
            size: 20,
            font: 'Arial',
            color: '333333',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
      })
    )
  }

  // ===== PROJECTS =====
  if (projects && projects.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'PROJECTS',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    projects.forEach((project) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: getText(project.name),
              size: 22,
              bold: true,
              font: 'Arial',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
      if (project.description) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: getText(project.description),
                size: 20,
                font: 'Arial',
                color: '444444',
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: { after: 100 },
          })
        )
      }
    })
  }

  // ===== CERTIFICATIONS =====
  if (certifications && certifications.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'CERTIFICATIONS',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    certifications.forEach((cert) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${getText(cert.name)}  |  ${getText(cert.issuer)}  (${getText(cert.year)})`,
              size: 20,
              font: 'Arial',
              color: '333333',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
    })
  }

  // ===== ACHIEVEMENTS =====
  if (achievements && achievements.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'ACHIEVEMENTS',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    achievements.forEach((achievement) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: getText(achievement.title),
              size: 22,
              bold: true,
              font: 'Arial',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
      if (achievement.description) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: getText(achievement.description),
                size: 20,
                font: 'Arial',
                color: '444444',
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: { after: 50 },
          })
        )
      }
      if (achievement.year) {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Year: ${achievement.year}`,
                size: 18,
                font: 'Arial',
                color: '666666',
              }),
            ],
            alignment: AlignmentType.LEFT,
            spacing: { after: 100 },
          })
        )
      }
    })
  }

  // ===== LANGUAGES =====
  if (languages && languages.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'LANGUAGES',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      })
    )

    languages.forEach((lang) => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${getText(lang.name)}  -  ${getText(lang.proficiency)}`,
              size: 20,
              font: 'Arial',
              color: '333333',
            }),
          ],
          alignment: AlignmentType.LEFT,
          spacing: { after: 50 },
        })
      )
    })
  }

  // ===== SOFT SKILLS =====
  if (softSkills && softSkills.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: 'SOFT SKILLS',
            size: 26,
            bold: true,
            font: 'Arial',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: softSkills.join('  •  '),
            size: 20,
            font: 'Arial',
            color: '333333',
          }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: { after: 200 },
      })
    )
  }

  // Create the document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.8),
              bottom: convertInchesToTwip(0.8),
              left: convertInchesToTwip(0.8),
              right: convertInchesToTwip(0.8),
            },
          },
        },
        children: sections,
      },
    ],
  })

  return doc
}

export const downloadDOCX = async (resumeData, filename = 'resume.docx') => {
  try {
    const doc = await generateDOCX(resumeData)
    const blob = await Packer.toBlob(doc)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    return true
  } catch (error) {
    console.error('DOCX Download Error:', error)
    throw error
  }
}