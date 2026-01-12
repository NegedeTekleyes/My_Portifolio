'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart Farming Advisory Platform',
    description:
      'Agricultural advisory system delivering personalized farming guidance to Ethiopian farmers through SMS and AI-powered voice calls, making agricultural expertise accessible to remote communities.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Twilio API', 'AI Voice'],
    features: [
      'SMS-based crop advisory system',
      'AI voice call integration for illiterate farmers',
      'Weather-based recommendations',
      'Multi-language support (Amharic)',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Learning Platform',
    description:
      'Comprehensive learning management system with instructor dashboards, course creation tools, student enrollment, progress tracking, and integrated payment processing.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe'],
    features: [
      'Instructor dashboard with analytics',
      'Course management & content upload',
      'Student progress tracking',
      'Payment integration with Stripe',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Amazon Clone',
    description:
      'Full-featured e-commerce platform replicating Amazon\'s core functionality, including product browsing, cart management, checkout flow, and order tracking.',
    tech: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product catalog with search & filters',
      'Shopping cart & wishlist',
      'Secure payment processing',
      'Order history & tracking',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Online Bus Booking System',
    description:
      'Web application for booking bus tickets online with real-time seat availability, route management, and secure payment integration.',
    tech: ['React', 'Firebase', 'Firebase Auth', 'React Native'],
    features: [
      'Real-time seat selection',
      'Firebase authentication',
      'Route & schedule management',
      'Mobile-responsive design',
    ],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Real-world applications solving problems in education, agriculture, and e-commerce
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-slate-600 flex items-start"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
