import { motion } from "framer-motion";
import { Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-blue-50/50 to-white dark:from-zinc-900 dark:to-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold mb-4">
              Web Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-zinc-900 dark:text-white leading-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                D. Pravin Kumar
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
              Frontend developer passionate about crafting performant,
              user-centric web applications using React, Next.js, and
              TypeScript, with a strong focus on scalability and modern UI
              practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/Pravin_Kumar_Frontend_Developer.pdf"
                download="Pravin_Kumar_Resume.pdf"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Download Resume <Download size={20} />
              </a>
              <div className="flex gap-4 items-center">
                {/* <a
                  href="#"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-700 dark:text-zinc-300"
                >
                  <Github size={20} />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/pravin-kumar-7846a0227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-700 dark:text-zinc-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pravinkumar42001@gmail.com"
                  className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-zinc-700 dark:text-zinc-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 absolute -inset-4 blur-3xl rounded-full"></div>
            <div className="aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative border border-zinc-200 dark:border-zinc-700 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
