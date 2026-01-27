import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive dashboard for managing products, orders, and analytics. Built with Next.js and featured real-time data visualization.",
    tags: ["Next.js", "TypeScript", "Prisma", "TanStack Query"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "AI Chat Application",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    description: "Real-time chat interface integrating OpenAI's GPT-4 API. Features include streaming responses, history management, and code syntax highlighting.",
    tags: ["React", "OpenAI API", "Socket.io", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    description: "A Trello-style simplified task manager with drag-and-drop functionality and local storage persistence.",
    tags: ["React", "Redux Toolkit", "Beautiful DnD"],
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Health Tracking API",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    description: "RESTful API for tracking user health metrics containing authentication, rate limiting, and comprehensive documentation.",
    tags: ["Node.js", "Express", "MongoDB", "Swagger"],
    github: "#",
    live: "#"
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            A selection of projects that demonstrate my skills and passion for building.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.github} className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                      <Github size={20} className="text-zinc-900" />
                    </a>
                    <a href={project.live} className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} className="text-zinc-900" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-zinc-500 dark:text-zinc-500 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
