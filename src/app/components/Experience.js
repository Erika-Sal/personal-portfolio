'use client'
import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  useScrollReveal()
  const [selected, setSelected] = useState(0)
  const active = experience[selected]

  return (
    <div className="experience-section reveal">
      <h2 className="section-heading">Where I've Worked</h2>
      <div className="logo-tabs">
        {experience.map((job, index) => (
          <button
            key={job.company}
            type="button"
            className={`logo-card ${index === selected ? 'logo-card-selected' : ''}`}
            onClick={() => setSelected(index)}
            aria-pressed={index === selected}
          >
            <img src={job.logo} alt={`${job.company} logo`} className="logo-card-img" />
          </button>
        ))}
      </div>
      <div className="experience-panel">
        <h3 className="experience-panel-role">{active.role}</h3>
        <p className="experience-panel-company">
          {active.company} · {active.location} · {active.dates}
        </p>
        <p className="experience-panel-impact">{active.impact}</p>
      </div>
    </div>
  )
}
