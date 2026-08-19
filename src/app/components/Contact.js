'use client'
import useScrollReveal from '../hooks/useScrollReveal'
import { contactLinks } from '../data/portfolioData'

export default function Contact() {
  useScrollReveal()

  return (
    <div className="contact-section reveal">
      <h2 className="contact-heading">Say hi!</h2>
      <div className="contact-links">
        {contactLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="contact-icon-link"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  )
}
