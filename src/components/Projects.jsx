import { useState } from 'react';
import { ExternalLink, Dumbbell, Joystick, Wind, BookOpen, Users, Video, Gamepad2, Swords, Crosshair } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('Semua');

  // ponytail: filter directly matches category; upgrade to tag array if multi-tagging needed.
  const categories = ['Semua', 'Web', 'Game', 'Tools'];

  const projects = [
    {
      id: 1,
      title: 'Vector Siege',
      category: 'Game',
      desc: 'Game tower defense 3D sci-fi berbasis C++17 dan raylib dengan render primitif prosedural murni tanpa aset eksternal, sintesis audio PCM real-time, dan 50 wave musuh.',
      tech: ['C++17', 'raylib', 'Procedural 3D', 'Audio Synthesis'],
      repo: 'https://github.com/RiffaYP/Vector-Siege',
      icon: <Crosshair className="w-8 h-8 text-emerald-500" />,
      glowClass: 'glow-card-emerald',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-emerald-500/10 dark:text-emerald-400/10 fill-current">
          <circle cx="50" cy="30" r="22" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" fill="none" />
          <path d="M 10 15 Q 40 15 45 30 T 90 45" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
          <rect x="44" y="24" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <circle cx="50" cy="30" r="3.5" fill="currentColor" />
          <line x1="50" y1="30" x2="68" y2="20" stroke="currentColor" strokeWidth="2" />
          <circle cx="72" cy="18" r="4" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <line x1="72" y1="12" x2="72" y2="24" stroke="currentColor" strokeWidth="0.8" />
          <line x1="66" y1="18" x2="78" y2="18" stroke="currentColor" strokeWidth="0.8" />
          <polygon points="26,13 30,15 26,17" fill="currentColor" />
          <polygon points="78,41 82,43 78,45" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Cyber Runner',
      category: 'Game',
      desc: 'Game ritme 3D bergaya Guitar Hero berbasis Three.js dan Vite dengan sinkronisasi audio-clock, deteksi beat drum otomatis, dan efek visual bloom neon.',
      tech: ['Three.js', 'Vite', 'JavaScript', 'Web Audio API'],
      repo: 'https://github.com/RiffaYP/cyber-runner',
      live: 'https://RiffaYP.github.io/cyber-runner/',
      icon: <Gamepad2 className="w-8 h-8 text-cyan-500" />,
      glowClass: 'glow-card-cyan',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-cyan-500/10 dark:text-cyan-400/10 fill-current">
          <polygon points="36,12 64,12 86,52 14,52" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <line x1="43" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="50" y1="12" x2="50" y2="52" stroke="currentColor" strokeWidth="1" />
          <line x1="57" y1="12" x2="68" y2="52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2,2" />
          <line x1="18" y1="45" x2="82" y2="45" stroke="currentColor" strokeWidth="1.5" />
          <rect x="46" y="20" width="8" height="4" rx="1" fill="currentColor" opacity="0.6" />
          <rect x="35" y="32" width="10" height="4.5" rx="1" fill="currentColor" opacity="0.8" />
          <rect x="55" y="36" width="10" height="5" rx="1" fill="currentColor" />
          <circle cx="50" cy="12" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Stickman Fighting HTML',
      category: 'Game',
      desc: 'Game tarung 2D browser (Neon Fighter) berbasis HTML5 Canvas dan JavaScript murni dengan 6 karakter petarung, sistem guard crush, combo air juggle, dan dual gamepad support.',
      tech: ['HTML5 Canvas', 'JavaScript', 'Web Audio API', 'Gamepad API'],
      repo: 'https://github.com/RiffaYP/Stickman-Fighting-HTML',
      live: 'https://RiffaYP.github.io/Stickman-Fighting-HTML/',
      icon: <Swords className="w-8 h-8 text-indigo-500" />,
      glowClass: 'glow-card-indigo',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-indigo-500/10 dark:text-indigo-400/10 fill-current">
          <rect x="15" y="8" width="30" height="4" rx="1" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <rect x="17" y="9.5" width="20" height="1.5" fill="currentColor" />
          <rect x="55" y="8" width="30" height="4" rx="1" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <rect x="63" y="9.5" width="20" height="1.5" fill="currentColor" />
          <circle cx="50" cy="10" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="34" cy="24" r="3.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="34" y1="27.5" x2="34" y2="38" stroke="currentColor" strokeWidth="1.2" />
          <line x1="34" y1="31" x2="43" y2="30" stroke="currentColor" strokeWidth="1.2" />
          <line x1="43" y1="30" x2="48" y2="24" stroke="currentColor" strokeWidth="1.2" />
          <line x1="34" y1="38" x2="28" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <line x1="34" y1="38" x2="38" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="66" cy="24" r="3.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="66" y1="27.5" x2="66" y2="38" stroke="currentColor" strokeWidth="1.2" />
          <line x1="66" y1="31" x2="57" y2="33" stroke="currentColor" strokeWidth="1.2" />
          <line x1="66" y1="38" x2="62" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <line x1="66" y1="38" x2="71" y2="50" stroke="currentColor" strokeWidth="1.2" />
          <line x1="48" y1="29" x2="52" y2="33" stroke="currentColor" strokeWidth="1" />
          <line x1="52" y1="29" x2="48" y2="33" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Gym Membership Management',
      category: 'Web',
      desc: 'Aplikasi web berbasis Laravel untuk mengelola data member, paket keanggotaan, dan transaksi pembayaran gym.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
      repo: 'https://github.com/RiffaYP/project_gym-laravel',
      live: 'https://gym-app.freedev.app/',
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
      id: 5,
      title: 'Dungeons & Dragons Project',
      category: 'Game',
      desc: 'Proyek mata kuliah Pemrograman Berorientasi Objek berbasis Java yang menerapkan konsep class, object, method, dan alur program OOP.',
      tech: ['Java', 'OOP'],
      repo: 'https://github.com/Ryper29/DND-Project',
      icon: <Joystick className="w-8 h-8 text-cyan-500" />,
      glowClass: 'glow-card-cyan',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-cyan-500/10 dark:text-cyan-400/10 fill-current">
          <polygon points="50,10 75,22 75,48 50,56 25,48 25,22" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="22" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="22" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="56" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="25" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="30" x2="75" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="25" y1="22" x2="25" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="75" y1="22" x2="75" y2="48" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'DIVA AC Company Profile Website',
      category: 'Web',
      desc: 'Proyek kelompok mata kuliah Sistem Operasi berupa instalasi dan konfigurasi website company profile berbasis WordPress untuk usaha DIVA AC menggunakan Ubuntu. Website ini menampilkan informasi usaha, layanan, dan profil bisnis secara sederhana.',
      tech: ['Ubuntu', 'WordPress', 'Linux', 'CMS', 'Web Server'],
      label: 'Proyek Kelompok',
      icon: <Wind className="w-8 h-8 text-blue-500" />,
      glowClass: 'glow-card-blue',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-blue-500/10 dark:text-blue-400/10 fill-current">
          <rect x="10" y="8" width="80" height="44" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <line x1="10" y1="18" x2="90" y2="18" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="13" r="1.5" />
          <circle cx="22" cy="13" r="1.5" />
          <circle cx="28" cy="13" r="1.5" />
          <rect x="35" y="24" width="30" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="38" y1="31" x2="62" y2="31" stroke="currentColor" strokeWidth="1" />
          <line x1="35" y1="28" x2="65" y2="28" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 40 37 Q 38 42 35 46" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M 50 37 Q 50 43 50 47" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <path d="M 60 37 Q 62 42 65 46" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="2,2" />
          <circle cx="78" cy="30" r="3.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <line x1="78" y1="25.5" x2="78" y2="34.5" stroke="currentColor" strokeWidth="0.8" />
          <line x1="73.5" y1="30" x2="82.5" y2="30" stroke="currentColor" strokeWidth="0.8" />
          <line x1="16" y1="26" x2="28" y2="26" stroke="currentColor" strokeWidth="1" />
          <line x1="16" y1="31" x2="25" y2="31" stroke="currentColor" strokeWidth="1" />
          <line x1="16" y1="36" x2="29" y2="36" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'JIPI OJS Platform',
      category: 'Tools',
      desc: 'Proyek kelompok mata kuliah Sistem Operasi berupa instalasi dan konfigurasi Open Journal Systems (OJS) menggunakan Ubuntu. Sistem ini digunakan sebagai platform jurnal JIPI (Jurnal Inovasi dan Pengembangan Informatika) yang berisi jurnal, artikel, atau referensi yang berkaitan dengan bidang informatika.',
      tech: ['Ubuntu', 'OJS', 'Linux', 'Web Server', 'Journal Management System'],
      label: 'Proyek Kelompok',
      video: 'https://youtu.be/a11Ttekbh2g',
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      glowClass: 'glow-card-indigo',
      illustration: (
        <svg viewBox="0 0 100 60" className="w-full h-32 text-indigo-500/10 dark:text-indigo-400/10 fill-current">
          <rect x="10" y="8" width="80" height="44" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <line x1="10" y1="18" x2="90" y2="18" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="16" cy="13" r="1.5" />
          <circle cx="22" cy="13" r="1.5" />
          <circle cx="28" cy="13" r="1.5" />
          <path d="M 28 26 Q 38 23 48 27 L 48 45 Q 38 41 28 44 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M 72 26 Q 62 23 52 27 L 52 45 Q 62 41 72 44 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="31" x2="44" y2="31" stroke="currentColor" strokeWidth="0.8" />
          <line x1="32" y1="35" x2="42" y2="35" stroke="currentColor" strokeWidth="0.8" />
          <line x1="32" y1="39" x2="44" y2="39" stroke="currentColor" strokeWidth="0.8" />
          <line x1="56" y1="31" x2="68" y2="31" stroke="currentColor" strokeWidth="0.8" />
          <line x1="56" y1="35" x2="66" y2="35" stroke="currentColor" strokeWidth="0.8" />
          <line x1="56" y1="39" x2="68" y2="39" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 50 17 L 55 20 L 50 23 L 45 20 Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
          <line x1="55" y1="20" x2="55" y2="24" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      )
    }
  ];

  const visibleProjects = filter === 'Semua' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
            Portofolio Proyek
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Koleksi proyek perangkat lunak yang saya bangun secara mandiri maupun terstruktur untuk mengeksplorasi ilmu komputer praktis.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
               className={`px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-surface ${
                filter === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visibleProjects.map((project) => {
            const hasRepo = !!project.repo;
            const hasVideo = !!project.video;
            const hasLive = !!project.live;
            const hasLink = hasRepo || hasVideo || hasLive;
            const CardComponent = hasLink ? 'a' : 'div';
            const cardProps = hasLink
              ? {
                  href: project.live || project.repo || project.video,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <CardComponent
                key={project.id}
                {...cardProps}
                className={`p-6 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${project.glowClass} group ${hasLink ? 'cursor-pointer' : ''}`}
              >
                <div>
                  {/* Illustration Frame */}
                  <div className="w-full rounded-2xl bg-white dark:bg-dark-card p-4 border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-6">
                    {project.illustration}
                  </div>

                  {/* Info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="max-w-[70%] px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white dark:bg-dark-card shadow-sm">
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

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                    {hasLive ? (
                      <>
                        <div className="text-sm font-semibold flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                          <ExternalLink className="w-4 h-4" />
                          <span>Demo Langsung</span>
                        </div>
                        <div className="px-4 py-2 text-xs font-bold rounded-xl bg-gray-900 group-hover:bg-emerald-600 dark:bg-gray-800 dark:group-hover:bg-cyan-600 text-white transition-colors duration-300 flex items-center gap-1">
                          Buka Website
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </>
                    ) : hasRepo ? (
                      <>
                        <div className="text-sm font-semibold flex items-center gap-1.5 text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
                          <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                          <span>GitHub</span>
                        </div>

                        <div className="px-4 py-2 text-xs font-bold rounded-xl bg-gray-900 group-hover:bg-emerald-600 dark:bg-gray-800 dark:group-hover:bg-cyan-600 text-white transition-colors duration-300 flex items-center gap-1">
                          Lihat Repositori
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </>
                    ) : hasVideo ? (
                      <>
                        <div className="text-sm font-semibold flex items-center gap-1.5 text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition-colors">
                          <Video className="w-4.5 h-4.5 text-red-500" />
                          <span>Demo Video</span>
                        </div>

                        <div className="px-4 py-2 text-xs font-bold rounded-xl bg-gray-900 group-hover:bg-indigo-600 dark:bg-gray-800 dark:group-hover:bg-indigo-650 text-white transition-colors duration-300 flex items-center gap-1">
                          Tonton Demo Proyek
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-sm font-semibold flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                          <Users className="w-4 h-4" />
                          <span>{project.label || 'Proyek Kelompok'}</span>
                        </div>

                        <div className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-gray-100 dark:bg-dark-card text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                          Tanpa Repositori
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>

      </div>
    </section>
  );
}

