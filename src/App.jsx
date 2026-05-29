import { useEffect, useMemo, useRef, useState } from 'react';

export default function Portfolio() {
  // State untuk melacak gambar sertifikat yang sedang dibuka di modal
  const [activeCertImg, setActiveCertImg] = useState(null);

  // Language toggle (ID/EN)
  const [lang, setLang] = useState('id');

  const copy = useMemo(
    () => ({
      id: {
        navHome: 'Home',
        navAbout: 'Tentang',
        navSkills: 'Skill',
        navPortfolio: 'Portofolio',
        navCertificates: 'Sertifikat',
        navContact: 'Kontak',
        heroAvailable: 'Available For Work',
        heroTitle1: 'Information Systems',
        heroTitle2: 'Specialist',
        heroDesc:
          'Mahasiswa Sistem Informasi yang berfokus pada pengembangan web dinamis, analisis data, serta konfigurasi dan administrasi infrastruktur jaringan komputer secara profesional.',
        heroCtaPortfolio: 'View Portfolio',
        heroCtaGithub: 'GitHub',
        heroProfileAlt: 'Foto profil Muhammad Hafizh Ramadhan',
        aboutTitle: 'About Me',
        aboutDesc:
          'Saya adalah mahasiswa Sistem Informasi (BSI) dengan latar belakang Teknik Komputer & Jaringan. Memiliki sertifikasi resmi BNSP sebagai Junior Network Administrator serta pengalaman magang IT Support di Kementerian Pendidikan Dasar dan Menengah. Kombinasi ini membentuk keahlian saya dalam troubleshooting perangkat keras, pemeliharaan infrastruktur jaringan, hingga pengembangan solusi website dinamis secara optimal.',
        skillsTitle: 'SKILL',
        skillsDesc:
          'Keahlian saya mencakup pengembangan aplikasi web berbasis data serta administrasi dan konfigurasi infrastruktur jaringan komputer.',
        skill1: 'React',
        skill2: 'PHP',
        skill3: 'MySQL',
        skill4: 'Networking',
        skill5: 'BNSP Certified',
        portfolioTitle: 'Portfolio',
        experienceTitle: 'Experience',
        experienceDesc:
          'Riwayat pengalaman kerja dan proyek yang mendukung kemampuan saya di bidang web development, networking, dan IT support.',
        exp1Title: 'IT Support Intern (PKL)',
        exp1Period: 'Apr — Jun 2025',
        exp1Bullets: [
          'Troubleshooting perangkat keras dan pemeliharaan jaringan kantor.',
          'Monitoring performa server dan konfigurasi dasar perangkat jaringan.',
          'Membantu administrasi IT support untuk kebutuhan operasional harian.',
        ],
        exp2Title: 'Network Administration (BNSP)',
        exp2Period: '2025 — 2028',
        exp2Bullets: [
          'Perancangan pengalamatan jaringan (subnetting) dan routing dasar.',
          'Konfigurasi switch, instalasi jaringan nirkabel, dan pengujian konektivitas.',
          'Praktik administrasi infrastruktur jaringan sesuai standar kompetensi.',
        ],
        certificatesTitle: 'Certificate',
        certificatesDesc:
          'Sertifikasi resmi dan pembuktian kompetensi praktik kerja. Klik kartu sertifikat untuk melihat gambar dokumen.',
        modalClose: 'Close [X]',
        modalTitle: 'Sertifikat Terbuka',
        modalAlt: 'Sertifikat Terbuka',
        clickToSee: 'Klik untuk melihat sertifikat →',

        contactTitle: 'Contact',
        contactInstagram: 'Instagram',
        contactTiktok: 'TikTok',
        contactLinkedin: 'LinkedIn',
      },
      en: {
        navHome: 'Home',
        navAbout: 'About',
        navSkills: 'Skills',
        navPortfolio: 'Portfolio',
        navCertificates: 'Certificates',
        navContact: 'Contact',
        heroAvailable: 'Available For Work',
        heroTitle1: 'Information Systems',
        heroTitle2: 'Specialist',
        heroDesc:
          'Information Systems student focused on dynamic web development, data analysis, and professional configuration & administration of computer networking infrastructure.',
        heroCtaPortfolio: 'View Portfolio',
        heroCtaGithub: 'GitHub',
        aboutTitle: 'About Me',
        aboutDesc:
          'I am an Information Systems student (BSI) with a background in Computer & Networking Engineering. I hold an official BNSP certification as a Junior Network Administrator and have experience as an IT Support intern at the Ministry of Primary and Secondary Education. This combination shapes my skills in hardware troubleshooting, network infrastructure maintenance, and building optimal dynamic web solutions.',
        skillsTitle: 'SKILL',
        skillsDesc:
          'My expertise covers data-driven web application development as well as administration and configuration of computer networking infrastructure.',
        skill1: 'React',
        skill2: 'PHP',
        skill3: 'MySQL',
        skill4: 'Networking',
        skill5: 'BNSP Certified',
        portfolioTitle: 'Portfolio',
        experienceTitle: 'Experience',
        experienceDesc:
          'Work and project experience that supports my skills in web development, networking, and IT support.',
        exp1Title: 'IT Support Intern (PKL)',
        exp1Period: 'Apr — Jun 2025',
        exp1Bullets: [
          'Hardware troubleshooting and maintenance of office network infrastructure.',
          'Server performance monitoring and basic configuration of network devices.',
          'Supporting daily IT operations and administrative IT support tasks.',
        ],
        exp2Title: 'Network Administration (BNSP)',
        exp2Period: '2025 — 2028',
        exp2Bullets: [
          'Designing network addressing (subnetting) and basic routing.',
          'Switch configuration, wireless network installation, and connectivity testing.',
          'Hands-on network infrastructure administration in line with competency standards.',
        ],
        certificatesTitle: 'Certificates',
        certificatesDesc:
          'Official certifications and proof of work-practice competence. Click a certificate card to view the document image.',
        modalClose: 'Close [X]',
        modalTitle: 'Certificate Viewer',
        modalAlt: 'Certificate Viewer',

        clickToSee: 'Click to view certificate →',

        contactTitle: 'Contact',
        contactInstagram: 'Instagram',
        contactTiktok: 'TikTok',
        contactLinkedin: 'LinkedIn',
      },
    }),
    []
  );

  const t = copy[lang];

  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!activeCertImg) return;

    // scroll lock
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // fokus ke tombol Close
    closeBtnRef.current?.focus();


    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCertImg(null);
        return;
      }

      // focus trap: jaga agar Tab tidak keluar modal
      if (e.key === 'Tab') {
        const focusable = Array.from(
          document.querySelectorAll(
            '[data-cert-modal="true"] button, ' +
              '[data-cert-modal="true"] [href], ' +
              '[data-cert-modal="true"] input, ' +
              '[data-cert-modal="true"] select, ' +
              '[data-cert-modal="true"] textarea, ' +
              '[data-cert-modal="true"] [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const isShift = e.shiftKey;

        if (!isShift && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (isShift && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeCertImg]);


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* PANDUAN GABUNGAN BACKGROUND TERBAIK */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pola Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '45px 45px',
          }}
        />

        {/* Bias Cahaya Bergerak */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zinc-800/30 rounded-full blur-[140px]"></div>
      </div>



      {/* Navbar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6 border-b border-white/10">
        <h1 className="text-xl font-bold tracking-widest">muhammad hafizh ramadhan</h1>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-300 items-center">
          <a href="#hero" className="hover:text-white transition">{lang === 'id' ? 'Home' : 'Home'}</a>
          <a href="#about" className="hover:text-white transition">{lang === 'id' ? 'Tentang' : 'About'}</a>

          <a href="#skills" className="hover:text-white transition">{lang === 'id' ? 'Skill' : 'Skills'}</a>
          <a href="#portfolio" className="hover:text-white transition">{lang === 'id' ? 'Portofolio' : 'Portfolio'}</a>
          <a href="#certificates" className="hover:text-white transition">{lang === 'id' ? 'Sertifikat' : 'Certificates'}</a>
          <a href="#contact" className="hover:text-white transition">{lang === 'id' ? 'Kontak' : 'Contact'}</a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang('id')}
              className={
                lang === 'id'
                  ? 'text-white font-semibold'
                  : 'hover:text-white transition text-gray-300'
              }
            >
              ID
            </button>
            <span className="text-gray-600">|</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={
                lang === 'en'
                  ? 'text-white font-semibold'
                  : 'hover:text-white transition text-gray-300'
              }
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 px-8 md:px-20 py-20 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[85vh]">
        {/* Left Content */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-[6px] text-gray-500 text-xs mb-6">
            {t.heroAvailable}
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none uppercase">
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
          </h2>

          <div className="mt-8 space-y-4 text-gray-400 leading-relaxed max-w-xl">
            <p>{t.heroDesc}</p>
          </div>

          {/* Quick Skills Highlight */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[t.skill1, t.skill2, t.skill3, t.skill4, t.skill5].map((skill) => (
              <span
                key={skill}
                className="border border-white/20 px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-white hover:text-black transition cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>


          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="#portfolio"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              {t.heroCtaPortfolio}
            </a>

            <a
              href="https://github.com/HFZ-AJA"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              {t.heroCtaGithub}
            </a>
          </div>
        </div>

        {/* Right Photo */}
        <div className="relative flex justify-center items-center">
          {/* Hanging Line */}
          <div className="absolute -top-28 w-[2px] h-28 bg-white/40"></div>

          {/* Photo Card */}
          <div className="bg-zinc-900 border-4 border-white rounded-2xl p-3 shadow-2xl rotate-[-3deg] hover:rotate-0 transition duration-500">
<img
              src="./sertifikat/foto.jpeg" // served from public (relative for GitHub Pages)
              alt={t.heroProfileAlt}
              className="w-[240px] md:w-[280px] h-[320px] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/10"
      >
        <h3 className="text-3xl font-bold mb-8 uppercase tracking-wider">{t.aboutTitle}</h3>

        <p className="text-gray-400 max-w-3xl leading-relaxed text-lg">
          {t.aboutDesc}
        </p>
      </section>

      {/* Kategori Skill */}
      <section
        id="skills"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/10 bg-zinc-950/40"
      >
        <h3 className="text-3xl font-bold mb-3 uppercase tracking-wider">{t.skillsTitle}</h3>
        <p className="text-gray-400 mb-12 max-w-xl text-sm">
          {t.skillsDesc}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Kartu 1 */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-xs font-mono text-gray-400">01</div>
            <h4 className="text-lg font-bold mb-4 tracking-wide text-white uppercase border-b border-white/10 pb-2">
              Frontend Dev
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="flex items-center gap-2">▪ HTML</li>
              <li className="flex items-center gap-2">▪ CSS</li>
              <li className="flex items-center gap-2">▪ PHP</li>
              <li className="flex items-center gap-2">▪ React</li>
            </ul>
          </div>

          {/* Kartu 2 */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-xs font-mono text-gray-400">02</div>
            <h4 className="text-lg font-bold mb-4 tracking-wide text-white uppercase border-b border-white/10 pb-2">
              Networking
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="flex items-center gap-2">▪ Network Addressing</li>
              <li className="flex items-center gap-2">▪ Routing & Switching</li>
              <li className="flex items-center gap-2">▪ Wireless Network</li>
            </ul>
          </div>

          {/* Kartu 3 */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-xs font-mono text-gray-400">03</div>
            <h4 className="text-lg font-bold mb-4 tracking-wide text-white uppercase border-b border-white/10 pb-2">
              Database & Office
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="flex items-center gap-2">▪ MySQL</li>
              <li className="flex items-center gap-2">▪ Microsoft Office</li>
            </ul>
          </div>

          {/* Kartu 4 */}
          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 text-xs font-mono text-gray-400">04</div>
            <h4 className="text-lg font-bold mb-4 tracking-wide text-white uppercase border-b border-white/10 pb-2">
              Tools & Platforms
            </h4>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li className="flex items-center gap-2">▪ GitHub</li>
              <li className="flex items-center gap-2">▪ VS Code</li>
              <li className="flex items-center gap-2">▪ Figma</li>
              <li className="flex items-center gap-2">▪ Canva</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/10"
      >
        <h3 className="text-3xl font-bold mb-12 uppercase tracking-wider">{t.portfolioTitle}</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={`https://picsum.photos/600/400?random=${item}`}
                alt="project"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">
                  {lang === 'id' ? `Project ${item}` : `Project ${item}`}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang === 'id'
                    ? 'On Going Project'
                    : 'On Going Project'}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Experience (under Portfolio) */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">{t.experienceTitle}</h3>
          <p className="text-gray-400 mb-10 max-w-2xl text-sm leading-relaxed">{t.experienceDesc}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between items-start mb-5">
                <span className="text-xs font-mono uppercase bg-white/10 text-white px-3 py-1 rounded-full tracking-wider">
                  {t.exp1Title}
                </span>
                <span className="text-xs font-mono text-gray-500">{t.exp1Period}</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                {t.exp1Bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-white/60">▪</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900/60 border border-white/10 rounded-3xl p-8">
              <div className="flex justify-between items-start mb-5">
                <span className="text-xs font-mono uppercase bg-white/10 text-white px-3 py-1 rounded-full tracking-wider">
                  {t.exp2Title}
                </span>
                <span className="text-xs font-mono text-gray-500">{t.exp2Period}</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                {t.exp2Bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-white/60">▪</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Certificates Section */}
      <section
        id="certificates"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/10 bg-zinc-950/40"
      >
        <h3 className="text-3xl font-bold mb-3 uppercase tracking-wider">{t.certificatesTitle}</h3>
        <p className="text-gray-400 mb-12 max-w-xl text-sm">
          {t.certificatesDesc}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sertifikat 1 - BNSP */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActiveCertImg("./sertifikat/sertifikat-bnsp.jpg")} // Ganti dengan path file gambar BNSP milikmu
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveCertImg("./sertifikat/sertifikat-bnsp.jpg");
              }
            }}
            className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-white/40 hover:bg-zinc-900 transition duration-300 flex flex-col justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono uppercase bg-white/10 text-white px-3 py-1 rounded-full tracking-wider">
                  Networking
                </span>
                <span className="text-xs font-mono text-gray-500">2025 — 2028</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition">
                Sertifikat Kompetensi Junior Network Administrator
              </h4>
              <p className="text-sm text-gray-400 mb-4 font-medium">
                Badan Nasional Sertifikasi Profesi (BNSP)
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Menyatakan kompetensi resmi dalam merancang pengalamatan jaringan (subnetting), konfigurasi switch, instalasi jaringan nirkabel, serta konfigurasi routing perangkat jaringan.
              </p>
              <span className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/20 pb-1 group-hover:border-white transition">
                Klik untuk melihat sertifikat →
              </span>
            </div>
          </div>

          {/* Sertifikat 2 - Magang */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setActiveCertImg("./sertifikat/sertifikat-pkl.jpg")} // Ganti dengan path file gambar Sertifikat PKL milikmu
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveCertImg("./sertifikat/sertifikat-pkl.jpg");
              }
            }}
            className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-white/40 hover:bg-zinc-900 transition duration-300 flex flex-col justify-between cursor-pointer group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono uppercase bg-white/10 text-white px-3 py-1 rounded-full tracking-wider">
                  IT Support
                </span>
                <span className="text-xs font-mono text-gray-500">APR — JUN 2025</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white group-hover:text-gray-300 transition">
                Sertifikat Praktik Kerja Lapangan (PKL)
              </h4>
              <p className="text-sm text-gray-400 mb-4 font-medium">
                Kementerian Pendidikan Dasar dan Menengah
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Diberikan atas kontribusi praktik kerja lapangan pada Bagian Umum Inspektorat Jenderal, dengan fokus penanganan troubleshooting perangkat keras, pemeliharaan jaringan kantor, dan monitoring performa server.
              </p>
              <span className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/20 pb-1 group-hover:border-white transition">
                Klik untuk melihat sertifikat →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- POP-UP MODAL VIEW SERTIFIKAT --- */}
      {activeCertImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setActiveCertImg(null)} // Klik di mana saja di luar gambar untuk menutup modal
        >
        <div
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          tabIndex={-1}
          data-cert-modal="true"
        >
            <h3 id="cert-modal-title" className="sr-only">
              {t.modalTitle}
            </h3>

            {/* Tombol Close */}
            <button 
              ref={closeBtnRef}
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm uppercase tracking-widest font-mono transition"
              onClick={() => setActiveCertImg(null)}
            >
              {t.modalClose}
            </button>
            {/* Gambar Dokumen */}
            <img 
              src={activeCertImg} 
              alt={t.modalAlt}

              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar diklik
            />
          </div>
        </div>
      )}

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 px-8 md:px-20 py-20 border-t border-white/10"
      >
        <h3 className="text-3xl font-bold mb-8 uppercase tracking-wider">{t.contactTitle}</h3>


        <div className="flex flex-wrap gap-4">
          <a
            href="https://instagram.com/hffzz____"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

          <a
            href="https://github.com/HFZ-AJA"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}