import { ExternalLink, Dumbbell, Joystick } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gym Membership Management',
      category: 'Web Development',
      desc: 'Aplikasi web berbasis Laravel untuk mengelola data member, paket keanggotaan, dan transaksi pembayaran gym.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      repo: 'https://github.com/RiffaYP/project_gym-laravel',
      icon: <Dumbbell className="w-8 h-8 text-emerald-500" />,
      glowClass: 'glow-card-emerald',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-emerald-500/10 dark:text-emerald-400/10 fill-current">
          <rect x="10" y="10" width="80" height="40" rx="4" />
          <line x1="10" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="15" r="2" />
          <circle cx="26" cy="15" r="2" />
          <circle cx="32" cy="15" r="2" />
          <rect x="18" y="26" width="30" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="52" y="26" width="30" height="18" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="22" y1="30" x2="44" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="22" y1="34" x2="38" y2="34" stroke="currentColor" strokeWidth="1" />
          <line x1="56" y1="30" x2="78" y2="30" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="38" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Dungeons & Dragons Project',
      category: 'Object-Oriented Programming',
      desc: 'Project mata kuliah Pemrograman Berorientasi Objek berbasis Java yang menerapkan konsep class, object, method, dan alur program OOP.',
      tech: ['Java', 'OOP'],
      repo: 'https://github.com/RiffaYP/DND-project',
      icon: <Joystick className="w-8 h-8 text-cyan-500" />,
      glowClass: 'glow-card-cyan',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-cyan-500/10 dark:text-cyan-400/10 fill-current">
          {/* Hexagon Outline */}
          <polygon points="50,10 75,22 75,48 50,56 25,48 25,22" stroke="currentColor" strokeWidth="1.5" fill="none" />
          {/* Inner lines of d20 */}
          <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="22" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="22" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="56" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="25" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="75" y2="48" stroke="currentColor" strokeWidth="1" />
          {/* Triangles on the edges */}
          <line x1="25" y1="22" x2="25" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="22" x2="75" y2="48" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            Projects Portfolio
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-650 dark:text-gray-400">
            Koleksi proyek perangkat lunak yang saya bangun secara mandiri maupun terstruktur untuk mengeksplorasi ilmu komputer praktis.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${project.glowClass} group cursor-pointer`}
            >
              <div>
                {/* Illustration Frame */}
                <div className="w-full rounded-2xl bg-white dark:bg-gray-850 p-4 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6">
                  {project.illustration}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-xl bg-white dark:bg-gray-850 shadow-sm">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Action and Tech Badge list */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-150 dark:border-gray-800">
                  <div className="text-sm font-semibold flex items-center gap-1.5 text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>GitHub</span>
                  </div>

                  <div className="px-4 py-2 text-xs font-bold rounded-xl bg-gray-900 group-hover:bg-emerald-600 dark:bg-gray-800 dark:group-hover:bg-cyan-600 text-white transition-colors duration-300 flex items-center gap-1">
                    View Repository
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
