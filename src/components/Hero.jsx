import { Terminal, FileText, ArrowRight, Brain, Code, Database, Cpu } from 'lucide-react';

export default function Hero() {
  const handleViewProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-cyan-500/5 dark:bg-cyan-600/5 blur-3xl" />

      {/* Floating Tech Icons in Background */}
      <div className="hidden lg:block absolute top-1/3 left-12 animate-float text-emerald-500/10 dark:text-emerald-500/5">
        <Code className="w-10 h-10" />
      </div>
      <div className="hidden lg:block absolute bottom-1/4 left-1/4 animate-float [animation-delay:2s] text-cyan-500/10 dark:text-cyan-500/5">
        <Database className="w-8 h-8" />
      </div>
      <div className="hidden lg:block absolute top-1/4 right-1/4 animate-float [animation-delay:4s] text-cyan-500/5 dark:text-cyan-500/3">
        <Brain className="w-9 h-9" />
      </div>
      <div className="hidden lg:block absolute bottom-1/3 right-12 animate-float [animation-delay:1s] text-emerald-500/5 dark:text-emerald-500/3">
        <Cpu className="w-10 h-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs uppercase tracking-wider animate-pulse-slow">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Informatics Student Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Riffa Yudika Permana
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold font-heading text-gray-700 dark:text-gray-300">
              Informatics Engineering Student
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika Universitas Lampung yang tertarik pada pemrograman, pengembangan web, basis data, dan sistem komputer. Saat ini saya terus mengembangkan kemampuan melalui praktikum, tugas kuliah, dan project mandiri sebagai persiapan untuk berkontribusi di lingkungan laboratorium.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                onClick={handleViewProjects}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Riffa Yudika Permana_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-500 dark:text-cyan-400" />
                Download CV
              </a>

              <a
                href="https://github.com/RiffaYP"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gray-900 hover:bg-gray-850 dark:bg-gray-900 dark:hover:bg-gray-950 text-white border border-gray-850 dark:border-gray-900 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Hero Right Code Visual */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none relative">
            {/* Soft Glow behind the card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 blur-xl opacity-40" />
            <div className="relative w-full rounded-2xl bg-slate-950 border border-cyan-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden animate-float">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-900">
                <div className="flex items-center space-x-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                  <span>riffa_profile.js</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
                <pre>
                  <code>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">student</span> = &#123;
                    <br />
                    &nbsp;&nbsp;name:{' '}
                    <span className="text-emerald-400">
                      'Riffa Yudika Permana'
                    </span>
                    ,<br />
                    &nbsp;&nbsp;major:{' '}
                    <span className="text-emerald-400">
                      'Informatics Engineering'
                    </span>
                    ,<br />
                    &nbsp;&nbsp;university:{' '}
                    <span className="text-emerald-400">
                      'Universitas Lampung'
                    </span>
                    ,<br />
                    &nbsp;&nbsp;expectedGrad:{' '}
                    <span className="text-cyan-400">2028</span>,<br />
                    &nbsp;&nbsp;interests: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-emerald-400">'Web Dev'</span>,{' '}
                    <span className="text-emerald-400">'Programming'</span>,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-emerald-400">'Databases'</span>,{' '}
                    <span className="text-emerald-400">'Computer Systems'</span>
                    ,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-emerald-400">'Software Development'</span>
                    <br />
                    &nbsp;&nbsp;],
                    <br />
                    &nbsp;&nbsp;skills: &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;languages: [<span className="text-yellow-400">'C++'</span>, <span className="text-yellow-400">'Java'</span>, <span className="text-yellow-400">'Python'</span>, <span className="text-yellow-400">'PHP'</span>, <span className="text-yellow-400">'JS'</span>],
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;frameworks: [<span className="text-teal-400">'Laravel'</span>, <span className="text-teal-400">'Flutter'</span>]
                    <br />
                    &nbsp;&nbsp;&#125;,
                    <br />
                    &nbsp;&nbsp;labAssistantApplicant:{' '}
                    <span className="text-orange-400">true</span>
                    <br />
                    &#125;;
                    <br />
                    <br />
                    <span className="text-gray-500">// Ready to collaborate and learn!</span>
                    <br />
                    <span className="text-purple-400">console</span>.
                    <span className="text-blue-400">log</span>(
                    <span className="text-blue-400">student</span>.
                    <span className="text-emerald-400">name</span> +{' '}
                    <span className="text-emerald-400">' is ready!'</span>);
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
