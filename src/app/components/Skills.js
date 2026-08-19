'use client'
import useScrollReveal from '../hooks/useScrollReveal'
import { skills } from '../data/portfolioData'

export default function Skills() {
  useScrollReveal()

  return (
    <div className="skills-section reveal">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map(({ label, Icon }) => (
          <div key={label} className="skill-card">
            <Icon className="skill-icon" />
            <span className="skill-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
