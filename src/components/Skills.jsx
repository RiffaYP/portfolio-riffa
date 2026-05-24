import { Code2, Wrench, BookOpen, ChevronRight } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      colorClass: 'border-emerald-500/20 dark:border-emerald-500/10 hover:border-emerald-500/40',
      iconBgClass: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      itemBorderClass: 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/5',
      chevronColorClass: 'text-emerald-500 dark:text-emerald-400',
      skills: [
        { name: 'C++', desc: 'Pemrograman Dasar & Struktur Data' },
        { name: 'Java', desc: 'Pemrograman Berorientasi Objek (OOP)' },
        { name: 'Python', desc: 'Analisis Data & Dasar AI/Scripting' },
        { name: 'PHP', desc: 'Pengembangan Aplikasi Web Dinamis' },
        { name: 'JavaScript', desc: 'Interaktivitas Front-end & Node.js' },
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: <Wrench className="w-6 h-6 text-cyan-500" />,
      colorClass: 'border-cyan-500/20 dark:border-cyan-500/10 hover:border-cyan-500/40',
      iconBgClass: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      itemBorderClass: 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/5',
      chevronColorClass: 'text-cyan-500 dark:text-cyan-400',
      skills: [
        { name: 'Laravel', desc: 'Framework PHP Backend modern' },
        { name: 'Flutter', desc: 'Framework UI Mobile cross-platform' },
        { name: 'MySQL', desc: 'Sistem Manajemen Basis Data' },
        { name: 'GitHub', desc: 'Version Control & Kolaborasi Kode' },
        { name: 'VS Code', desc: 'Editor Kode Utama & Extensions' },
        { name: 'BlueJ', desc: 'Eksperimen OOP Java & Visualisasi Kelas' },
        { name: 'Ubuntu / Linux', desc: 'Navigasi CLI & Pengelolaan Sistem' },
      ],
    },
    {
      title: 'Course Competencies',
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      colorClass: 'border-emerald-500/20 dark:border-emerald-500/10 hover:border-emerald-500/40',
      iconBgClass: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      itemBorderClass: 'border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-emerald-500/5',
      chevronColorClass: 'text-emerald-500 dark:text-emerald-400',
      skills: [
        { name: 'Algoritma & Pemrograman', desc: 'Logika, flowchart, percabangan, perulangan, fungsi' },
        { name: 'Struktur Data', desc: 'Array, Linked List, Stack, Queue, Tree, Graph' },
        { name: 'Rekayasa Perangkat Lunak', desc: 'Metodologi SDLC, perancangan UML, analisa sistem' },
        { name: 'Sistem Operasi', desc: 'Manajemen memori, proses penjadwalan, virtualisasi' },
        { name: 'Sistem Basis Data', desc: 'Perancangan ERD, normalisasi 1NF-3NF, sintaks DDL & DML' },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            Skills & Competencies
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-650 dark:text-gray-400">
            Bahasa pemrograman, tools, dan kompetensi mata kuliah yang saya pelajari untuk menunjang kegiatan belajar di laboratorium.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`p-8 rounded-3xl bg-white/90 dark:bg-dark-card/60 backdrop-blur-md border shadow-xl transition-all duration-300 ${category.colorClass}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-2xl ${category.iconBgClass} shadow-sm`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 rounded-xl bg-slate-900/95 dark:bg-slate-950/75 border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group flex items-start space-x-3 ${category.itemBorderClass}`}
                  >
                    <div className="mt-1 flex-shrink-0">
                      <ChevronRight className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${category.chevronColorClass}`} />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">
                        {skill.name}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                        {skill.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lab Assistant Note Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 dark:border-cyan-500/20 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            💡 <strong>Kesiapan Praktikum:</strong> Pemahaman di atas mencakup materi semester awal Teknik Informatika. Saya siap membantu mendampingi, menjawab pertanyaan, dan membimbing teman-teman selama praktikum dasar berlangsung.
          </p>
        </div>

      </div>
    </section>
  );
}
