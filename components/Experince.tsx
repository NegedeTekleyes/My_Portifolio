"use client"
import { useInView } from "framer-motion"
import { tr } from "framer-motion/client"
import { useRef } from "react"
import{motion} from 'framer-motion'
import { Briefcase, GraduationCap } from "lucide-react"

const experiences= [
    {
        type: 'education',
        title: 'Bachelor of Computer Scince',
        organization: 'Debre Berhan University, Ethiopia',
        period: '2021- 2025',
        location: 'Debre Berhan, Ethiopia',
        description: '4th-year student with focus on software engineering, web development, and database systems.',
        highlights: [
        'Basic foundation in data structures and algorithms',
        'Hands-on experience with modern web technologies',
        'Active participation in coding projects and hackathons',
        ],
    },
    {
    type: 'work',
    title: 'Full-Stack Development Internship',
    organization: 'Amazon Clone Project',
    period: '2024',
    location: 'Remote',
    description: 'Developed a full-featured e-commerce platform replicating Amazon\'s core functionality.',
    highlights: [
      'Built responsive UI with React and Tailwind CSS',
      'Implemented Firebase authentication and database',
      'Integrated Stripe payment processing',
    ],
  },
  {
    type: 'work',
    title: 'Freelance Full-Stack Developer',
    organization: 'Various Clients',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Delivering custom web applications for clients in education and agriculture sectors.',
    highlights: [
      'E-learning platform with instructor dashboards',
      'Smart farming advisory system with SMS integration',
      'Bus booking system with real-time updates',
    ],
  },
]

export default function Experince() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Experience & Education
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {exp.type === 'education' ? (
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-600 mb-3">
                      <span className="font-medium">{exp.organization}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-slate-700 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex items-start"
                        >
                          <span className="text-blue-600 mr-2 flex-shrink-0">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    )
}