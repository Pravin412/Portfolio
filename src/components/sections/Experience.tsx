import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Corp",
    period: "2023 - Present",
    description: "Leading the frontend team in building a next-gen SaaS platform. Improved performance by 40% and established a new design system."
  },
  {
    role: "Full Stack Developer",
    company: "StartUp Inc",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client-facing applications using React and Node.js. Implemented real-time features using WebSockets."
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "2020 - 2021",
    description: "Collaborated with designers to translate high-fidelity mockups into responsive web pages. Optimized legacy sites for better SEO."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            My professional journey and career highlights.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2"></div>
              
              <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-zinc-950 flex items-center justify-center -translate-x-1/2 z-10">
                  <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />
                </div>

                <div className="md:w-1/2">
                  <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/30 transition-colors">
                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mb-1 text-zinc-900 dark:text-white">{exp.role}</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-3">{exp.company}</p>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
