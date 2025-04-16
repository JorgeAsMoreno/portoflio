'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Particles from '../Particles'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx';

const colors = [
  'bg-[#a39081]/30',
  'bg-[#d6a692]/30',
  'bg-[#efd9b4]/30',
  'bg-[#4d6160]/30',
  'bg-[#292522]/30',
]

const Hero = () => {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentColor = colors[colorIndex]

  return (
    <section className='relative min-h-screen flex flex-col items-center justify-start px-6 md:px-12 bg-[#254f1b] text-white overflow-hidden'>
      {/* NAVBAR estilo Linktree */}
      <nav className='sticky top-6 w-full max-w-6xl mx-auto flex items-center justify-between py-4 px-6 bg-[#fff] rounded-full mt-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)] z-30'>
        {/* Logo JM */}
        <div className='text-2xl font-extrabold text-[#1e2330] tracking-widest'>
          JM
        </div>

        {/* Enlaces redes */}
        <div className='flex gap-3'>
          <a
            href='https://github.com/JorgeAsMoreno'
            target='_blank'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-[#1e2330] transition'
          >
            <RxGithubLogo />
          </a>
          <a
            href='https://www.linkedin.com/in/jorgeasmoreno/'
            target='_blank'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-[#1e2330] transition'
          >
            <RxLinkedinLogo />
          </a>
        </div>
      </nav>

      {/* FONDO visual */}
      <div className='absolute inset-0 z-0'>
        {['top-[30%] right-[-10%]', 'bottom-[-10%] left-[-15%]', 'top-[-10%] left-[30%]'].map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute ${pos} w-[350px] h-[350px] blur-[140px] rounded-full animate-blob`}
            animate={{ backgroundColor: currentColor }}
            transition={{ duration: 6 }}
          />
        ))}
        <motion.div
          className='absolute right-[5%] top-[50%] w-[500px] h-[500px] rounded-full blur-3xl opacity-30 z-0'
          animate={{ backgroundColor: currentColor, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        />
        <Particles count={40} />
      </div>

      {/* CONTENIDO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-28 md:mt-20'
      >
        {/* TEXTO */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-7xl md:text-8xl font-extrabold mb-6 leading-tight text-[#d2e823]'
          >
            Hey! I,m Jorge Moreno
          </motion.h1>

          <motion.p
            className='text-lg md:text-3xl text-[#d2e823] max-w-xl'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Fullstack Developer | {' '}
            <TechText text='React' color='#e9c0e9' />,{' '}
            <TechText text='Next.js' color='#e9c0e9' /> and{' '}
            <TechText text='Typescript' color='#e9c0e9' /> {' '}
            Specialist | 5+ Years Building Scalable Web Applications
          </motion.p>

          <p className='mt-4 italic text-[#a39081]'>
            'Turning complex ideas into clean, delightful interfaces.'
          </p>

          <motion.a
            href='#projects'
            className='inline-block mt-8 px-6 py-3 bg-[#e9c0e9] text-[#292522] text-2xl font-extrabold rounded-xl shadow transition-all hover:bg-[#d2e823] hover:text-[#1e2330] hover:shadow-lg'
          >
            See My Work ↓
          </motion.a>
        </div>

        {/* AVATAR */}
        <div className='hidden md:flex justify-center md:justify-end relative z-10'>
          <Image
            src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXowaXhmY3I2bGNzbGtwM3p3cHIwcmY5cDd6anV3Mzl2OTFqZHB1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v3JSLHw6YTE2CK8kzR/giphy.gif'
            alt='Jorge Avatar'
            width={460}
            height={460}
            unoptimized
          />
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#efd9b4] text-2xl'
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓
      </motion.div>
    </section>
  )
}

export default Hero

const TechText = ({ text, color }: { text: string; color: string }) => (
  <span className='font-semibold' style={{ color }}>
    {text}
  </span>
)
