import { GraduationCap, School, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      id: 1,
      institution: 'Universitas Lampung',
      degree: 'Sarjana Komputer (S.Kom) - Teknik Informatika',
      period: '2024 - 2028 (Expected)',
      location: 'Bandar Lampung, Indonesia',
      icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
      tag: 'Pendidikan Tinggi',
      badgeClass: 'border-emerald-500/20 hover:border-emerald-500/50',
      accentColorClass: 'text-emerald-500',
      coursesLabel: 'Mata Kuliah / Fokus Utama',
      details: [
        'Fokus perkuliahan pada logika komputasi, algoritma dan pemrograman, struktur data, rekayasa perangkat lunak, sistem operasi, serta sistem basis data.',
        'Mengembangkan kemampuan pemrograman melalui praktikum, tugas kuliah, dan project mandiri.',
        'Memiliki ketertarikan pada pengembangan web, basis data, dan sistem komputer.'
      ],
      courses: [
        'Algoritma dan Pemrograman',
        'Struktur Data',
        'Sistem Basis Data',
        'Sistem Operasi',
        'Rekayasa Perangkat Lunak'
      ]
    },
    {
      id: 2,
      institution: 'SMA Al-Azhar 3 Bandar Lampung',
      degree: 'MIPA (Matematika dan Ilmu Pengetahuan Alam)',
      period: '2021 - 2024',
      location: 'Bandar Lampung, Indonesia',
      icon: <School className="w-6 h-6 text-cyan-500" />,
      tag: 'Pendidikan Menengah',
      badgeClass: 'border-cyan-500/20 hover:border-cyan-500/50',
      accentColorClass: 'text-cyan-500',
      coursesLabel: 'Mata Pelajaran / Kegiatan',
      details: [
        'Mendalami ilmu matematika peminatan, fisika, dan TIK (Teknologi Informasi dan Komunikasi).',
        'Aktif mengikuti kegiatan ekstrakurikuler Taekwondo.',
        'Lulus dengan nilai baik dan diterima di Universitas Lampung melalui jalur UTBK/SNBT.'
      ],
      courses: [
        'Matematika Peminatan',
        'Fisika',
        'Teknologi Informasi dan Komunikasi'
      ]
    }
  ];

  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            Education Pathway
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-655 dark:text-gray-400">
            Riwayat pendidikan yang membentuk cara berpikir logis dan dasar pemahaman akademis saya.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500" />
              
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white dark:bg-gray-850 rounded-2xl shadow-md text-emerald-500 dark:text-cyan-400">
                      {edu.icon}
                    </div>
                    <div>
                      <span className="text-xxs font-bold uppercase tracking-widest text-emerald-600 dark:text-cyan-400">
                        {edu.tag}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mt-0.5">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {edu.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {edu.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6 text-sm text-gray-650 dark:text-gray-400 list-disc list-outside pl-4 leading-relaxed">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Focus Badges */}
              <div className="pt-6 border-t border-gray-150 dark:border-gray-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center">
                  <BookOpen className={`w-3.5 h-3.5 mr-1 ${edu.accentColorClass}`} />
                  {edu.coursesLabel}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-900/95 dark:bg-slate-950/75 border text-slate-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 ${edu.badgeClass}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
