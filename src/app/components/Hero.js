'use client'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  useScrollReveal()

  return (
    <div className="hero reveal">
      <div className="hero-photo-wrap">
        <div className="polaroid hero-polaroid">
          <img src="/IMG_2164.jpeg" alt="Erika Salvador" />
        </div>
        <div className="sticker sticker-hero">hi, it&apos;s me</div>
      </div>

      <div className="hero-text">
        <h1 className="hero-name">Erika Salvador</h1>
        <p className="hero-bio">
          CS @ UT Austin | Minor in Business | Minor in Educational Psychology | Aspiring Software Engineer
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">See my work</a>
          <a href="/ErikaResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Resume</a>
        </div>
      </div>
    </div>
  )
}
