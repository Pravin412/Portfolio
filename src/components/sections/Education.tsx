import { motion } from "framer-motion";
import { GraduationCap, Award, Download } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "MET Engineering College (Anna University), Nagercoil",
    period: "2024",
    description: "CGPA: 7.61",
  },
];

const certifications: { name: string; file?: string }[] = [
  {
    name: "Claude Code 101 (Anthropic)",
    file: "/certificates/Claude_Code_101_Anthropic.pdf",
  },
  {
    name: "Introduction to Generative AI (Google Cloud · Coursera)",
    file: "/certificates/Introduction_to_Generative_AI_Coursera.pdf",
  },
  { name: "UI/UX Design Fundamentals (Coursera)" },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                        {edu.description}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  <span className="flex-1 text-zinc-700 dark:text-zinc-300 font-medium">
                    {cert.name}
                  </span>
                  {cert.file && (
                    <a
                      href={cert.file}
                      download
                      aria-label={`Download ${cert.name} certificate`}
                      title="Download certificate"
                      className="p-2 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Download size={18} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
