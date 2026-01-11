"use client"
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
export default function Hero() {
    const scrollToProject = () => {
        document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
            <div
                className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6'>
                        Hi, I'm{' '}
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'>
                            Negede Tekleyes
                        </span>
                    </h1>

                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl sm:text-2xl md:text-3xl text-slate-700 mb-4 font-medium"
                >
                    Full-Stack Developer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto"
                >
                    Building scalable web & mobile applications with React, Next.js, and NestJS
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <button
                        onClick={scrollToProject}
                        className='group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg
                font-semibold hover:bg-blue-700 transition-all hover:scale-105'
                    >
                        View Projects
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 justify-center"
                >
                    <a
                        href="https://github.com/negedetekleyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/negedetekleyes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:negede.tekleyes@example.com"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>


            </div>
        </section>
    )
}