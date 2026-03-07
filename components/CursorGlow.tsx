'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + 'px'
        cursorRef.current.style.top = e.clientY - 10 + 'px'
      }
      if (trailRef.current) {
        setTimeout(() => {
          trailRef.current!.style.left = e.clientX - 20 + 'px'
          trailRef.current!.style.top = e.clientY - 20 + 'px'
        }, 80)
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} style={{
        width: 20, height: 20,
        background: 'rgba(108,99,255,0.9)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        boxShadow: '0 0 20px rgba(108,99,255,0.8), 0 0 40px rgba(0,229,255,0.4)',
        transition: 'transform 0.1s ease',
      }} />
      <div ref={trailRef} style={{
        width: 40, height: 40,
        border: '1px solid rgba(0,229,255,0.4)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9998,
        transition: 'left 0.15s ease, top 0.15s ease',
      }} />
    </>
  )
}
