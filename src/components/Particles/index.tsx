'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Particles = ({ count = 25 }: { count?: number }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  if (!mounted) return null

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] rounded-full opacity-60"
          style={{
            top: `${random(0, 100)}%`,
            left: `${random(0, 100)}%`,
            backgroundColor: '#fff', // Plata brillante
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: random(5, 10),
            repeat: Infinity,
            delay: i * 0.3,
            repeatType: 'mirror',
          }}
        />
      ))}
    </>
  )
}

export default Particles
