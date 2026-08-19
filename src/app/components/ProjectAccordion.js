'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'
import { otherProjects } from '../data/portfolioData'

export default function ProjectAccordion() {
  useScrollReveal()
  const [openIds, setOpenIds] = useState({})

  const toggle = (id) => {
    const willOpen = !openIds[id]
    setOpenIds((prev) => ({ ...prev, [id]: willOpen }))

    if (willOpen) {
      setTimeout(() => {
        const navbar = document.querySelector('.navbar')
        const navbarHeight = navbar ? navbar.offsetHeight : 0
        const details = document.getElementById(`accordion-details-${id}`)
        if (details) {
          const rect = details.getBoundingClientRect()
          const scrollPos = window.scrollY + rect.top - navbarHeight - 20
          window.scrollTo({ top: scrollPos, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="accordion reveal">
      <p className="eyebrow">a few other things I&apos;ve made (tap to expand)</p>

      {otherProjects.map((project) => {
        const isOpen = !!openIds[project.id]
        const Icon = project.icon

        return (
          <div key={project.id} className="accordion-row">
            <button className="accordion-header" onClick={() => toggle(project.id)}>
              <Icon className="accordion-icon" />
              <span className="accordion-title">{project.title}</span>
              <FaChevronDown className={`accordion-chevron ${isOpen ? 'open' : ''}`} />
            </button>

            {isOpen && (
              <div className="accordion-details" id={`accordion-details-${project.id}`}>
                <p className="accordion-subtitle">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-dark">
                    View code
                  </a>
                ) : (
                  <span className="btn-dark btn-disabled">Code coming soon</span>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
