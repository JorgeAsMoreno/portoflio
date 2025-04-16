'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Movies App',
    description: 'Movie search engine with public API, login system and responsive UI.',
    image: '/movies.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/frontend_challenge',
    demoUrl: 'https://frontend-challenge-gold.vercel.app/',
    tags: ['Next', 'Next Auth', 'Styled Components', 'Typescript']
  },
  {
    title: 'Netflix Clone',
    description: 'Full Netflix clone with authentication, categories, and API integration.',
    image: '/netflix.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/Netflix-Clone',
    demoUrl: 'https://clone-netflix-teal.vercel.app/',
    tags: ['React', 'Firebase', 'CSS']
  },
  {
    title: 'Airbnb Clone',
    description: 'Airbnb-inspired platform with booking system, filters and user auth.',
    image: '/airbnb.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/Airbnb',
    demoUrl: 'https://clone-airbnb-vkg4.vercel.app/',
    tags: ['React', 'Firebase', 'CSS']
  },
  {
    title: 'Market Coins',
    description: 'Crypto tracker with charts, coin details and historical price data.',
    image: '/market.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/dinametria',
    demoUrl: 'https://dinametria.vercel.app/',
    tags: ['React', 'Typescript', 'Chart.js', 'Next', 'Styled Components']
  },
  {
    title: 'Mercado Libre Search',
    description: 'Product searcher using Mercado Libre API with fast response and clean UI.',
    image: '/meli.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/challenge-meli',
    demoUrl: '/',
    tags: ['React', 'SCSS']
  },
  {
    title: 'GitHub Repo Search',
    description: 'Find GitHub repositories by keyword, including pagination and details.',
    image: '/github.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/technical-challenge/tree/development/frontend',
    demoUrl: '/',
    tags: ['React', 'Typescript', 'Styled Components', 'Node.js']
  },
  {
    title: 'Wordle Game',
    description: 'Word guessing game with timer, feedback system and keyboard UI.',
    image: '/wordle.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/dd360',
    demoUrl: 'https://dd360.vercel.app/',
    tags: ['Typescript', 'React', 'SCSS']
  },
  {
    title: 'Reservamos Weather App',
    description: 'Weather forecast app with city search, current and extended forecast.',
    image: '/reservamos.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/reservamos',
    demoUrl: 'https://reservamos-delta.vercel.app/',
    tags: ['Typescript', 'React', 'Styled Components']
  },
  {
    title: 'Memory Cards Game',
    description: 'Interactive memory card game with timer and score tracking.',
    image: '/memoria.png',
    codeUrl: 'https://github.com/JorgeAsMoreno/memoria-challenge',
    demoUrl: 'https://memoria-challenge.vercel.app/',
    tags: ['Typescript', 'React', 'Styled Components']
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#efeee5] px-6 py-20 text-[#1e2330]" id="projects">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-extrabold">PROJECTS <span className="ml-1">↘</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-[#1e2330] rounded-2xl overflow-hidden shadow-md flex flex-col"
              style={{ gridRow: `span ${index % 3 === 0 ? 2 : 1} / span ${index % 3 === 0 ? 2 : 1}` }}
            >
              <div className="h-48 overflow-hidden p-2">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl border-4 border-white"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-xl mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-md bg-[#eff0ec] text-[#1e2330] font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-lg text-center px-3 py-2 border-2 border-[#1e2330] rounded-lg font-extrabold hover:bg-[#1e2330] hover:text-white transition"
                  >
                    Code
                  </a>
                  {project.demoUrl !== '/' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-lg text-center font-extrabold px-3 py-2 border-2 border-[#1e2330] rounded-lg hover:bg-[#1e2330] hover:text-white transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
