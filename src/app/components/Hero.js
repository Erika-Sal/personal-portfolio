'use client'
import { useRef, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const PHOTOS = [
  { src: '/erika_photos/hero-headshot.jpg', alt: 'Erika Salvador smiling on the UT Austin campus' },
  { src: '/erika_photos/hero-lake.jpg', alt: 'Erika Salvador sitting on a tree branch by a lake' },
  { src: '/erika_photos/hero-market.jpg', alt: 'Erika Salvador browsing snacks at an Asian grocery store' },
]

const SWIPE_RATIO = 0.28
const STACK_TRANSFORMS = [
  '',
  'translate(0.5rem, 0.9rem) rotate(4deg) scale(0.95)',
  'translate(0.9rem, 1.6rem) rotate(-6deg) scale(0.9)',
]

export default function Hero() {
  useScrollReveal()

  const [order, setOrder] = useState(PHOTOS.map((_, i) => i))
  const [phase, setPhase] = useState('idle') // 'idle' | 'dragging' | 'exiting'
  const [dragX, setDragX] = useState(0)

  const stackRef = useRef(null)
  const pointerStartX = useRef(0)
  const exitDir = useRef(1)

  function handlePointerDown(e) {
    if (phase !== 'idle') return
    pointerStartX.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
    setPhase('dragging')
  }

  function handlePointerMove(e) {
    if (phase !== 'dragging') return
    setDragX(e.clientX - pointerStartX.current)
  }

  function handlePointerUp() {
    if (phase !== 'dragging') return
    const width = stackRef.current?.getBoundingClientRect().width ?? 280
    if (dragX < -width * SWIPE_RATIO) {
      exitDir.current = -1
      setPhase('exiting')
    } else {
      setPhase('idle')
      setDragX(0)
    }
  }

  function handleTransformEnd(e) {
    if (phase !== 'exiting' || e.propertyName !== 'transform') return
    setOrder((prev) => [...prev.slice(1), prev[0]])
    setPhase('idle')
    setDragX(0)
  }

  function frontTransform() {
    const width = stackRef.current?.getBoundingClientRect().width ?? 280
    if (phase === 'dragging') {
      return `translate(${dragX}px, 0) rotate(${dragX / 18 - 4}deg)`
    }
    if (phase === 'exiting') {
      return `translate(${exitDir.current * width * 1.4}px, -1.5rem) rotate(-40deg)`
    }
    return 'rotate(-4deg)'
  }

  return (
    <div className="hero reveal">
      <div className="hero-photo-wrap">
        <div className="hero-stack" ref={stackRef}>
          {order.map((photoIndex, position) => {
            const photo = PHOTOS[photoIndex]
            const isFront = position === 0
            const isSettling = isFront ? phase !== 'dragging' : true
            return (
              <div
                key={photo.src}
                className={`hero-stack-card${isSettling ? ' is-settling' : ''}`}
                style={{
                  zIndex: PHOTOS.length - position,
                  transform: isFront ? frontTransform() : STACK_TRANSFORMS[position],
                  opacity: isFront && phase === 'exiting' ? 0 : 1,
                }}
                onPointerDown={isFront ? handlePointerDown : undefined}
                onPointerMove={isFront ? handlePointerMove : undefined}
                onPointerUp={isFront ? handlePointerUp : undefined}
                onPointerCancel={isFront ? handlePointerUp : undefined}
                onTransitionEnd={isFront ? handleTransformEnd : undefined}
              >
                <img src={photo.src} alt={photo.alt} draggable={false} />
              </div>
            )
          })}
        </div>
        <div className="sticker sticker-hero">hi, it&apos;s me</div>
      </div>

      <div className="hero-text">
        <h1 className="hero-name">Erika Salvador</h1>
        <p className="hero-bio">
          CS @ UT Austin · Minor in Business · Minor in Educational Psychology
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn-primary">See my work</a>
          <a href="/ErikaResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">Resume</a>
        </div>
      </div>
    </div>
  )
}
