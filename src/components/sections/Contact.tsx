import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            I am currently open to freelance projects and full-time
            opportunities. Let's discuss how I can contribute to your team or
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-medium">Email Me</p>
                  <a
                    href="mailto:pravinkumar42001@gmail.com"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
                  >
                    pravinkumar42001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-medium">Call Me</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    +91 77362 88003
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    Available: 10 AM – 10 PM IST (India)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Nagercoil, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                <p className="text-zinc-600 dark:text-zinc-400 italic">
                  "Dedicated to delivering exceptional web experiences through
                  clean code and user-centric design."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-lg border border-zinc-100 dark:border-zinc-800"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors"
                  placeholder="Enter your name  "
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors"
                  placeholder="Enter your email "
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
