import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Hono",
      "Prisma",
      "REST APIs",
      "WebSockets",
      "Webhooks",
      "BullMQ",
      "JWT",
      "OAuth",
      "RBAC",
    ],
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "Redis",
      "Transactions",
      "Connection Pooling",
      "Query Optimization",
    ],
  },
  {
    category: "AI & LLM",
    items: [
      "LLM & AI API Integration",
      "Prompt Engineering",
      "MCP Server Development",
      "AI Chatbots",
      "Voice AI",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
      "Cloudflare Workers",
      "Vercel",
      "Nx",
      "Turborepo",
      "Swagger",
      "Postman",
      "Claude Code",
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A curated list of technologies I use to build scalable and
            performant applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full"></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
