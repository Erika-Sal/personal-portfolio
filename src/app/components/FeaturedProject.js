'use client'
import { FaTrophy } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'
import { featuredProject } from '../data/portfolioData'

export default function FeaturedProject() {
  useScrollReveal()

  return (
    <div className="featured-project reveal">
      <div className="sticker sticker-trophy">
        <FaTrophy /> {featuredProject.badge}
      </div>

      <p className="eyebrow featured-eyebrow">the one I&apos;m proudest of</p>
      <h2 className="featured-title">{featuredProject.title}</h2>
      <p className="featured-description">{featuredProject.description}</p>

      <div className="tech-tags">
        {featuredProject.tech.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {featuredProject.github ? (
        <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-dark">
          View code
        </a>
      ) : (
        <span className="btn-dark btn-disabled">Code coming soon</span>
      )}
    </div>
  )
}
