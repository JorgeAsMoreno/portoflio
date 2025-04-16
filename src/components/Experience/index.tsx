'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaShopify, FaJsSquare, FaGitAlt, FaVuejs, FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiRubyonrails } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

type Experience = {
  company: string;
  role: string;
  date: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    company: 'HOMIE',
    role: 'Software Developer',
    date: 'Feb 2022 — Now',
    description: [
      'Developed and optimized the company\'s homepage using Next.js, React, TypeScript, and Styled-Components, improving load times by 25%.',
      'Created and maintained an internal UI component library using Storybook, enhancing development efficiency across teams.',
      'Refactored and maintained legacy codebases using Ruby on Rails, React (class/function components), Vue.js, and SCSS.',
      'Developed a dynamic landing page generator using Strapi CMS, TypeScript, Node and React, reducing dependency on developers for marketing campaigns.',
      'Built an internal ABM tool to manage contracts and reduce company costs, using React, TypeScript, Express, and PostgreSQL. The application was designed serverless to optimize costs on AWS Lambda.',
      'Migrated the tech stack for business units, implementing a new architecture to improve load times and unify infrastructure across companies. Integrated authentication and data-fetching services developed in Java (Spring) and Python into the frontend using React and TypeScript, transitioning from serverful to serverless to reduce costs.'
    ]
  },
  {
    company: 'Corebiz',
    role: 'Frontend Developer',
    date: 'Nov 2020 — Feb 2022',
    description: [
      'Developed e-commerce websites using VTEX IO, React, and SCSS, implementing key features such as login, cart, product detail, shipping, and checkout.',
      'Trained and mentored junior developers by assisting with technical questions, conducting code reviews, creating career development paths, and providing regular feedback.',
      'Managed projects from inception to completion, collaborating closely with product managers, designers, and occasionally clients.',
      'Contributed to the development of international e-commerce platforms, including Walmart Costa Rica, Elektra MX, and Famsa.',
    ]
  },
  {
    company: 'Atoms eCommerce',
    role: 'Frontend Developer',
    date: 'Apr 2020 — Nov 2020',
    description: [
      'Built Shopify-based e-commerce solutions using Liquid, HTML, JavaScript, SCSS.',
      'Customized Shopify themes, managed product listings, and integrated third-party applications to enhance store functionality.',
      'Led projects from inception to completion, being involved in the entire application lifecycle.',
      'Applied design patterns such as mobile-first for responsive design, ensuring accessibility best practices.'
    ]
  },
];

export default function ExperienceAndSkills() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen bg-[#f9f3e8] px-6 py-20 text-[#1e2330] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl font-extrabold">EXPERIENCE<span className="ml-1">↘</span></h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="cursor-pointer flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="text-left sm:text-right w-full sm:w-[100px] text-xl font-bold leading-tight">
                  {exp.date.split('—').map((line, i) => (
                    <div key={i}>{line.trim()}</div>
                  ))}
                </div>
                <div className="border-l-4 pl-4 sm:pl-6 border-black w-full">
                  <p className="text-2xl font-extrabold">{exp.company}</p>
                  <p className="text-xl font-semibold">{exp.role}</p>
                  <p className="text-lg text-gray-600 line-clamp-2 max-w-full">
                    {exp.description[0]}
                  </p>
                  {/* Alternativa si no usas line-clamp:
                  <p className="text-lg text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                    {exp.description[0]}
                  </p> 
                  */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Software Skills */}
          <div className="bg-black text-[#f9f3e8] rounded-3xl p-10 space-y-6 flex flex-col justify-between min-h-[250px] text-xl">
            <h3 className="text-4xl font-bold">SOFTWARE SKILLS ↘</h3>
            <div className="grid grid-cols-5 gap-4 text-5xl justify-items-center items-center">
              <FaReact />
              <SiTypescript />
              <RiNextjsFill />
              <FaNodeJs />
              <FaVuejs />
              <FaAws />
              <FaGitAlt />
              <SiRubyonrails />
              <FaShopify />
              <FaJsSquare />
            </div>
          </div>

          {/* Personal Skills */}
          <div className="bg-[#fff] rounded-3xl p-10 space-y-6 flex flex-col justify-between min-h-[250px] text-xl">
            <h3 className="text-4xl font-bold text-[#1e2330]">PERSONAL SKILLS ↘</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Team Management',
                'Communication',
                'Creative',
                'Design Thinking',
                'Sprint',
                'Proactive',
                'Quick-adapt'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-[#1e2330] border-black border-2 rounded-lg text-2lg font-extrabold hover:bg-black hover:text-white transition-all cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
  className="relative bg-white/90 rounded-3xl p-10 max-w-2xl w-full text-[#1e2330] space-y-6 shadow-2xl border border-white/40 backdrop-blur-lg max-h-[90vh] overflow-y-auto"
  initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-[#1e2330] hover:bg-[#3a3f4b] transition-colors p-2 rounded-full text-xl shadow-md cursor-pointer"
                onClick={() => setSelectedExperience(null)}
              >
                <IoCloseSharp />
              </button>

              <div className="space-y-3">
                <h3 className="text-3xl font-bold">{selectedExperience.company}</h3>
                <p className="text-xl font-semibold text-[#5c6475]">{selectedExperience.role}</p>
                <p className="text-sm font-medium text-gray-500">{selectedExperience.date}</p>
              </div>

              <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-[#2e3241]">
                {selectedExperience.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
