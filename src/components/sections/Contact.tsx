import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../../constants";

enum FormStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.LOADING);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9e14a79d-58e9-4548-8daa-fddff7c0b0b6",
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          replyto: formData.email,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus(FormStatus.SUCCESS);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(FormStatus.IDLE), 5000);
      } else {
        fallbackToMailto();
      }
    } catch (error) {
      fallbackToMailto();
    }
  };

  const fallbackToMailto = () => {
    const { name, message } = formData;
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setStatus(FormStatus.IDLE);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 transition-colors"
                  >
                    {SITE_CONFIG.email}
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
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-950 focus:ring-0 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === FormStatus.LOADING || status === FormStatus.SUCCESS}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                {status === FormStatus.LOADING ? "Sending..." : status === FormStatus.SUCCESS ? "Sent!" : "Send Message"} 
                {status !== FormStatus.LOADING && status !== FormStatus.SUCCESS && <Send size={18} />}
              </button>
              {status === FormStatus.SUCCESS && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-4 text-center">Message sent successfully!</p>
              )}
              {status === FormStatus.ERROR && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-4 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
