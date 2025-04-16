'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function GetInTouch() {
  return (
    <section
      className="bg-[#931515] px-6 py-24 text-[#1e2330] min-h-[60vh]"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#efeee5] rounded-2xl shadow-2xl p-10 space-y-12 text-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl text-[#1e2330] font-extrabold"
        >
          Feel free to connect with me or send me a quick message!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-10 text-4xl"
        >
          <a
            href="https://github.com/JorgeAsMoreno"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e2330] hover:text-[#931515] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jorgeasmoreno/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e2330] hover:text-[#931515] transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          action="mailto:solisamo6@gmail.com"
          method="post"
          encType="text/plain"
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="message"
            placeholder="Your message"
            className="w-full max-w-md px-5 py-3 border border-[#1e2330] rounded-lg focus:outline-none focus:ring-2 text-[#1e2330] text-lg transition-all"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#931515] text-[#fff] text-lg rounded-lg hover:text-white hover:bg-[#53000d] transition font-extrabold cursor-pointer"
          >
            Send Email
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
