'use client'
import useScrollReveal from '../hooks/useScrollReveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  useScrollReveal()

  return (
    <div className="experience-section">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <div key={`${job.company}-${job.dates}`} className="timeline-entry reveal">
            <h3 className="timeline-role">{job.role}</h3>
            <p className="timeline-company">{job.company} · {job.location}</p>
            <p className="timeline-dates">{job.dates}</p>
            <p className="timeline-impact">{job.impact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
