import { GraduationCap, Code2, ShieldAlert, Cpu, Database, Brain } from 'lucide-react';

export default function About() {
  const interests = [
    {
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      title: 'Pemrograman & Software',
      desc: 'Sangat tertarik memecahkan masalah menggunakan algoritma efisien di C++, Java, Python, PHP, dan JavaScript.',
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      title: 'Basis Data (DBMS)',
      desc: 'Memiliki pemahaman dalam perancangan skema relasional, normalisasi data, dan manajemen query menggunakan MySQL/MariaDB.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: 'Sistem Operasi & Komputer',
      desc: 'Terbiasa menggunakan Linux (Ubuntu), mengelola file system, memahami proses, threading, memori, dan otomasi shell script.',
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'Kecerdasan Buatan (AI)',
      desc: 'Tertarik mempelajari dasar-dasar machine learning, pemrosesan logika komputasi, dan simulasi otomata.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-dark-surface text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-650 dark:text-gray-400">
            Mengenal lebih dekat latar belakang akademis, minat bidang, dan motivasi saya untuk berkontribusi.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-500/10 blur-xl" />
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3.5 bg-emerald-100 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                    Riffa Yudika Permana
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Teknik Informatika UNILA • Angkatan 2024
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Saya adalah mahasiswa program studi <strong>Teknik Informatika di Universitas Lampung (UNILA)</strong>. Sejak awal perkuliahan, saya fokus mendalami konsep dasar ilmu komputer, mulai dari logika pemrograman, struktur data, arsitektur sistem, hingga rekayasa perangkat lunak.
                </p>
                <p>
                  Bagi saya, laboratorium komputer adalah tempat belajar bersama dan berbagi ilmu yang sangat penting. Saya ingin menjadi <strong>Asisten Laboratorium</strong> untuk membantu teman-teman memahami praktikum dengan baik, sekaligus mengasah kemampuan komunikasi dan kepemimpinan saya.
                </p>
                <p>
                  Saya selalu berkomitmen untuk terus belajar, disiplin, dan senang berbagi pengetahuan melalui diskusi maupun proyek kolaborasi.
                </p>
              </div>
            </div>
          </div>

          {/* Right Core Interests */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white text-center lg:text-left">
              Fokus & Bidang Minat
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-white dark:bg-gray-850 shadow-sm">
                    {interest.icon}
                  </div>
                  <h4 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {interest.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
