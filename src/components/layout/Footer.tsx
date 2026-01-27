import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 py-12 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 dark:text-zinc-500 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <p className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 text-sm">
          Made with <Heart size={16} className="text-red-500 fill-red-500" />
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
