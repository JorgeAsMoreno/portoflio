'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-[#e9c0e9] text-[#1e2330] px-6 py-20 flex flex-col lg:flex-row gap-12 items-stretch justify-center">
      {/* Image Card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black rounded-3xl p-6 relative flex-grow flex flex-col justify-center max-w-lg"
      >
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif"
          alt="About me"
          className="rounded-2xl w-full h-auto object-cover"
          width={400}
          height={400}
          unoptimized
        />
        <div className="absolute top-6 right-6 text-white text-4xl font-extrabold">ABOUT ME</div>
        <div className="absolute bottom-6 left-6 w-10 h-10 bg-white text-[#1e2330] font-bold rounded-full flex items-center justify-center shadow-md text-lg">
          i
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow max-w-2xl flex flex-col justify-between"
      >
        <div className="text-2xl leading-relaxed font-medium mb-10">
          I&apos;m a Fullstack Developer with over 5 years of experience building modern, scalable, and user-focused web applications. I specialize in frontend development using React, Next.js, and TypeScript, while also contributing to backend solutions with Node.js, Express, and PostgreSQL.
          <br /> <br />
          I&apos;m passionate about clean, functional UI, high-performance systems, and cross-functional teamwork. I thrive in product-focused environments where tech makes a real impact.
        </div>

        <div>
          <h2 className="text-4xl font-extrabold mb-4">EDUCATION<span className="ml-1">↘</span></h2>
          <div className="bg-black text-white rounded-2xl p-8 space-y-6 shadow-xl text-lg">
            <div>
              <h3 className="font-semibold text-2xl">Universidad de Colima</h3>
              <p className="text-gray-400">Bachelor&apos;s Degree in Telematics Engineering (2015–2020)</p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl">React, Next.js & Web animations</h3>
              <p className="text-gray-400">Various Platforms (Platzi, Udemy)</p>
            </div>
            <div>
              <h3 className="font-semibold text-2xl">Bootcamps</h3>
              <p className="text-gray-400">
                Brightcoders by{' '}
                <a
                  href="https://magmaLabs.io/"
                  className="text-[#e9c0e9] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MagmaLabs
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
