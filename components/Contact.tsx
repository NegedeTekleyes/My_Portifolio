'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'negede1921@gmail.com',
      href: 'mailto:negede1921@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/negedetekleyes',
      href: 'https://github.com/negedetekleyes',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/negedetekleyes',
      href: 'https://linkedin.com/in/negedetekleyes',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Debre Berhan, Ethiopia',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            Get In Touch
          </h2>

          <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Open to internships, freelance work, and junior developer roles.
            Let's build something great together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <contact.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {contact.label}
                      </p>
                      <p className="text-slate-900 font-medium break-all">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <contact.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600">
                        {contact.label}
                      </p>
                      <p className="text-slate-900 font-medium">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="mailto:negede.tekleyes@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </motion.div>
        </motion.div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-200">
        <p className="text-center text-slate-600">
          © {new Date().getFullYear()} Negede Tekleyes. Built with Next.js and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}
