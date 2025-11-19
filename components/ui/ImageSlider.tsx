"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

type Props = {
  images: StaticImageData[]
  className?: string
  interval?: number
}

export default function ImageSlider({ images, className = '', interval = 4000 }: Props) {
  const [index, setIndex] = useState(0)
  const len = images.length
  const timerRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)

  useEffect(() => {
    if (len <= 1) return
    if (isPaused) return
    timerRef.current = window.setInterval(() => {
      setIndex(i => (i + 1) % len)
    }, interval)

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [len, interval, isPaused])

  const prev = () => setIndex(i => (i - 1 + len) % len)
  const next = () => setIndex(i => (i + 1) % len)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    setIsPaused(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }

  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current > 0) prev()
      else next()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setIsPaused(false)
  }

  return (
    <div
      className={`w-full overflow-hidden rounded-lg relative ${className}`}
      style={{ height: '100%' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ width: `${len * 100}%`, transform: `translateX(-${index * (100 / len)}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="relative w-full" style={{ width: `${100 / len}%`, height: '100%' }}>
            <Image src={img} alt={`slide-${i}`} className="object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        ))}
      </div>

      {len > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9 flex items-center justify-center"
            type="button"
          >
            ‹
          </button>

          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-9 h-9 flex items-center justify-center"
            type="button"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
