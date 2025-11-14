"use client"

import { useEffect, useState } from "react"

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Array<{ id: number; left: string; delay: string }>>([])

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${i * 0.5}s`,
      }))
      setPetals(newPetals)
    }

    generatePetals()
    const interval = setInterval(generatePetals, 15000) // Regenerate every 15 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-2xl animate-falling"
          style={{
            left: petal.left,
            top: "-10px",
            animation: `falling-petals ${10 + Math.random() * 5}s linear ${petal.delay} infinite`,
            opacity: 0.6,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}
