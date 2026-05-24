import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-150 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-heading font-extrabold text-xl bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mb-1">
              Riffa Yudika Permana
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Informatics Engineering Student • Universitas Lampung
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold hover:text-emerald-500 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-cyan-500 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-150 dark:border-gray-850" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xxs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} Riffa Yudika Permana. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/RiffaYP"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="mailto:riffa06permana@gmail.com"
              className="hover:text-emerald-500 transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <span>Bandar Lampung, Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
