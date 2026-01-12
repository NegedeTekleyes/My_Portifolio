'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'Smart Farming Advisory Platform',
    description:
      'Agricultural advisory system delivering personalized farming guidance to Ethiopian farmers through SMS and AI-powered voice calls.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Twilio API', 'AI Voice'],
    features: [
      'SMS-based crop advisory system',
      'AI voice calls for illiterate farmers',
      'Weather-based recommendations',
      'Amharic language support',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'E-Learning Platform',
    description:
      'Full-featured learning management system with instructor dashboards, course creation, payments, and progress tracking.',
    tech: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe'],
    features: [
      'Instructor analytics dashboard',
      'Course creation & content upload',
      'Student progress tracking',
      'Stripe payment integration',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Amazon Clone',
    description:
      'E-commerce platform replicating Amazon’s core features including product browsing, checkout, and order tracking.',
    tech: ['React', 'Firebase', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product search & filters',
      'Shopping cart & wishlist',
      'Secure checkout flow',
      'Order history tracking',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'Online Bus Booking System',
    description:
      'Bus ticket booking system with real-time seat availability, authentication, and mobile support.',
    tech: ['React', 'Firebase', 'Firebase Auth', 'React Native'],
    features: [
      'Real-time seat selection',
      'Firebase authentication',
      'Route & schedule management',
      'Mobile-responsive UI',
    ],
    github: '#',
    demo: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Projects
          </h2>

          <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Real-world applications solving problems in agriculture, education, and e-commerce.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="rounded-xl border bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-700 mb-4">
                  {project.description}
                </p>

                <ul className="mb-4 space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate-600">
                      • {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
