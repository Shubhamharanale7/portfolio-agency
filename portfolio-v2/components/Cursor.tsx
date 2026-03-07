'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rx = 0, ry = 0
    const move = (e: MouseEvent) => {
      const x = e.clientX, y = e.clientY
      if (dot.current) { dot.current.style.left = x + 'px'; dot.current.style.top = y + 'px' }
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      if (ring.current) { ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px' }
    }
    const raf = () => {
      if (ring.current) {
        const x = parseFloat(ring.current.style.left || '0')
        const y = parseFloat(ring.current.style.top || '0')
      }
      requestAnimationFrame(raf)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', width: 6, height: 6, borderRadius: '50%',
        background: '#3b82f6', pointerEvents: 'none', zIndex: 99999,
        transform: 'translate(-50%,-50%)',
        boxShadow: '0 0 10px #3b82f6, 0 0 20px rgba(59,130,246,0.5)',
        transition: 'transform 0.1s',
      }} />
      <div ref={ring} style={{
        position: 'fixed', width: 32, height: 32, borderRadius: '50%',
        border: '1px solid rgba(59,130,246,0.5)', pointerEvents: 'none', zIndex: 99998,
        transform: 'translate(-50%,-50%)',
        transition: 'left 0.12s ease, top 0.12s ease',
      }} />
    </>
  )
}
