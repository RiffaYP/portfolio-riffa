import { ClipboardList, Award, Calendar, CircleDot } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Panitia Divisi Kesekretariatan',
      organization: 'Musyawarah Besar (MUBES) Himpunan Mahasiswa',
      period: '2025',
      type: 'Kepanitiaan',
      icon: <ClipboardList className="w-5 h-5" />,
      bullets: [
        'Mengelola surat-menyurat resmi internal dan eksternal organisasi.',
        'Menyusun proposal dan laporan pertanggungjawaban (LPJ) kegiatan MUBES.',
        'Mendokumentasikan presensi peserta sidang secara digital dan mencatat notulensi jalannya rapat pleno.'
      ],
      alignment: 'Melatih saya dalam mengelola berkas secara rapi dan terstruktur, yang sangat berguna untuk mengurus administrasi praktikan di laboratorium.'
    },
    {
      id: 2,
      role: 'Panitia Divisi Kesekretariatan',
      organization: 'Pemilihan Raya (PEMIRA) Himpunan Mahasiswa',
      period: '2024',
      type: 'Kepanitiaan',
      icon: <ClipboardList className="w-5 h-5" />,
      bullets: [
        'Mengorganisasi formulir pendaftaran dan memverifikasi kelengkapan dokumen administratif para calon ketua.',
        'Mengarsipkan berkas berita acara rekapitulasi perolehan suara secara teratur.',
        'Berkoordinasi dengan seluruh divisi kepanitiaan untuk memastikan timeline kegiatan berjalan tepat waktu.'
      ],
      alignment: 'Mengasah ketelitian dan manajemen waktu dalam menangani dokumen serta jadwal kegiatan.'
    },
    {
      id: 3,
      role: 'Peserta Pelatihan Flutter',
      organization: 'Pelatihan Pengembangan Aplikasi Mobile',
      period: '2024',
      type: 'Pelatihan & Sertifikasi',
      icon: <Award className="w-5 h-5 animate-pulse-slow" />,
      bullets: [
        'Mempelajari arsitektur dasar mobile development berbasis Flutter dan bahasa pemrograman Dart.',
        'Membangun interface UI yang responsif menggunakan widget-widget Flutter.',
        'Menerapkan konsep state management dasar dan penanganan input user.'
      ],
      alignment: 'Menunjukkan inisiatif belajar mandiri untuk menguasai teknologi baru di luar kelas perkuliahan.'
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            Organizational Experience
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Pengalaman kepanitiaan dan pelatihan yang melatih kemampuan organisasi, administrasi, serta keahlian teknis saya.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge (Circle) */}
                  <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-card border-2 border-emerald-500 dark:border-cyan-400 flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    <span className="text-emerald-500 dark:text-cyan-400">{exp.icon}</span>
                  </div>

                  {/* Empty spacer for desktop layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Experience Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 p-6 rounded-3xl bg-white dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-xl transition-transform hover:-translate-y-1 duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-medium">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-cyan-400/90 mb-4">
                      {exp.organization}
                    </h4>

                    {/* Bullet Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs sm:text-sm text-gray-650 dark:text-gray-400 flex items-start space-x-1.5 leading-relaxed">
                          <CircleDot className="w-3 h-3 text-cyan-500 mt-1 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Lab Assistant Alignment Callout */}
                    <div className="pt-3.5 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-xs italic text-gray-500 dark:text-gray-400 leading-normal">
                        🎯 <strong>Korelasi Keasistenan:</strong> {exp.alignment}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
