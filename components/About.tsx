"use client"
import {motion} from 'framer-motion'
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px'})

    return (
        <section id = "about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className='max-w-4xl mx-auto'>
                <motion.div
                ref={ref}
                initial={{opacity: 0, y:50}}
                animate={isInView ? {opacity:1, y:0}:{opacity:0, y:50}}
                transition={{duration: 0.6}}
                >
             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
                About Me
            </h2>
             <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a 4th-year Computer Science student at Debre Berhan University with hands-on experience
              building full-stack web and mobile applications. I specialize in creating scalable,
              user-focused solutions using modern technologies like React, Next.js, and NestJS.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              My work focuses on solving real-world problems through technology. I've developed e-learning
              platforms that empower instructors and students, smart farming systems that bring agricultural
              advisory services to Ethiopian farmers via SMS and AI voice calls, and various web applications
              that prioritize performance and user experience.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              I'm driven by the challenge of turning complex requirements into clean, maintainable code.
              Whether it's building responsive frontends, designing RESTful APIs, or optimizing database
              queries, I approach each project with attention to detail and a commitment to delivering
              quality software.
            </p>
          </div>
                </motion.div>
            </div>

        </section>
    )
}