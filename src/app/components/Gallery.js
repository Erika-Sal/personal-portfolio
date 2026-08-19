'use client'
import useScrollReveal from '../hooks/useScrollReveal'
import { galleryPhotos } from '../data/portfolioData'

export default function Gallery() {
  useScrollReveal()

  return (
    <div className="gallery-section reveal">
      <h2 className="section-heading">Life outside the IDE</h2>
      <div className="gallery-grid">
        {galleryPhotos.map((photo) => (
          <div
            key={photo.src}
            className="polaroid gallery-photo"
            style={{ '--rotate': `${photo.rotate}deg` }}
          >
            <img src={photo.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
