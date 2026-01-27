import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "MET Engineering College",
    period: "2024",
    description:
      "Graduated with a focus on core computer science fundamentals.",
  },
];

const certifications = [
  "JavaScript Fundamentals (Great Learning)",
  "Front-End Web Development (Coursera)",
  "Responsive Web Design (Coursera)",
  "UI/UX Design Fundamentals (Coursera)",
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
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                    {cert}
                  </span>
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
