import { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('riffa06permana@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    const emailTo = 'riffa06permana@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject || 'Pesan dari Portofolio');
    
    const emailBody = encodeURIComponent(
      `Nama Lengkap: ${formData.name}\n` +
      `Alamat Email: ${formData.email}\n\n` +
      `Pesan:\n${formData.message}`
    );

    // Buka email client menggunakan mailto
    window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    // Tampilkan notifikasi sukses simulasi pengalihan
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2 h-1.5 w-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mx-auto" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Silakan hubungi saya untuk berdiskusi tentang proyek kolaborasi, pertanyaan seputar praktikum, atau informasi lainnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">
              Informasi Kontak
            </h3>
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-lg flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 select-all">
                    riffa06permana@gmail.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-900/95 dark:bg-slate-950/75 border border-emerald-500/20 hover:border-emerald-500/50 backdrop-blur-md text-emerald-400 hover:text-emerald-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-pointer flex items-center justify-center"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                ) : (
                  <Copy className="w-4 h-4 text-cyan-400 hover:text-cyan-300" />
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/RiffaYP"
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-lg flex items-center space-x-4 hover:border-emerald-500/40 dark:hover:border-cyan-500/40 transition-colors group block"
            >
              <div className="p-3.5 bg-gray-900 dark:bg-gray-850 rounded-2xl text-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">GitHub</h4>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-cyan-400 transition-colors">
                  github.com/RiffaYP
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-lg flex items-center space-x-4">
              <div className="p-3.5 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-cyan-600 dark:text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Lokasi</h4>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Bandar Lampung, Indonesia
                </p>
              </div>
            </div>

            {/* Map Placeholder Design */}
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 border border-gray-150 dark:border-gray-800 text-center text-xs text-gray-500">
              📍 Bandar Lampung, Lampung, Indonesia. <br />
              Universitas Lampung, Jalan Prof. Dr. Ir. Sumantri Brojonegoro No. 1.
            </div>

          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-gray-150 dark:border-gray-800 shadow-xl relative">
              <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-6">
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-950/60 border border-slate-700/50 dark:border-slate-800/80 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:shadow-[0_0_15px_rgba(2,132,199,0.15)] transition-all duration-300 outline-none"
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-950/60 border border-slate-700/50 dark:border-slate-800/80 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:shadow-[0_0_15px_rgba(2,132,199,0.15)] transition-all duration-300 outline-none"
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-950/60 border border-slate-700/50 dark:border-slate-800/80 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:shadow-[0_0_15px_rgba(2,132,199,0.15)] transition-all duration-300 outline-none"
                    placeholder="Wawancara Asisten Lab / Kolaborasi / Lainnya"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-950/60 border border-slate-700/50 dark:border-slate-800/80 text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/20 focus:shadow-[0_0_15px_rgba(2,132,199,0.15)] transition-all duration-300 outline-none resize-none"
                    placeholder="Tuliskan pesan Anda di sini..."
                    required
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-450 text-xs sm:text-sm font-semibold">
                    ✅ Terima kasih! Pesan Anda telah terkirim (simulasi). Saya akan segera membalas email Anda.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs sm:text-sm font-semibold">
                    ❌ Harap lengkapi semua kolom formulir yang wajib diisi.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/15 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
