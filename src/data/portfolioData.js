/**
 * PORTFOLIO DATA ARCHITECTURE
 * Centralized Single Source of Truth
 * Identity: Muhammad Khoir Luqman
 * Academic Base: ITESA Muhammadiyah Semarang
 * Geo-Nodes: Semarang & Bekasi, Indonesia
 */

export const portfolioData = {
  meta: {
    fullName: "Muhammad Khoir Luqman",
    shortName: "Luqman",
    callsign: "MKL // ARCH.01",
    role: "Principal Fullstack Developer & Creative Technologist",
    subRole: "Software Engineering • Media & Creative Technologist",
    institution: {
      name: "ITESA Muhammadiyah Semarang",
      fullName: "Institut Teknologi Statistika dan Bisnis Muhammadiyah Semarang",
      status: "Undergraduate Student // Software Engineering",
      period: "2025 — Sekarang"
    },
    geoNodes: [
      {
        city: "Jakarta",
        region: "DKI Jakarta",
        country: "ID",
        type: "Tempat Lahir // Origin Node",
      },
      {
        city: "Bekasi",
        region: "Jawa Barat",
        country: "ID",
        coordinates: "6.2383° S, 106.9756° E",
        type: "Kota Tumbuh Besar // Hometown Node",
        elevation: "18m ASL"
      },
      {
        city: "Semarang",
        region: "Jawa Tengah",
        country: "ID",
        coordinates: "6.9667° S, 110.4167° E",
        type: "Pusat Pendidikan // ITESA Base",
        elevation: "82m ASL"
      }
    ],
    availability: {
      status: "Available for High-Impact Commissions & Architectural Roles",
      badge: "SYSTEM STATUS: OPERATIONAL",
      responseLatency: "< 24 Hours",
      timezone: "GMT+7 (Asia/Jakarta)"
    },
    socials: [
      { name: "GitHub", handle: "@khoirluqman07", url: "https://github.com/khoirluqman07" },
      { name: "Instagram", handle: "@khoirluqmann", url: "https://www.instagram.com/khoirluqmann/" },
      { name: "Terminal / Email", handle: "khoirluqman07@gmail.com", url: "mailto:khoirluqman07@gmail.com" },
      { name: "LinkedIn", handle: "in/khoir-luqman", url: "https://linkedin.com" }
    ]
  },

  welcome: {
    systemTag: "Introduction",
    architecturalPreamble: "Hello Guys",
    headlineLine1: "Muhammad",
    headlineLine2: "Khoir",
    headlineLine3: "Luqman.",
    leadParagraph:
      "Saya Muhammad Khoir Luqman, Seorang Principal Fullstack Developer & Creative Technologist yang berbasis di Semarang & Bekasi. Berfokus pada sintesis ruang digital bernapas — memadukan keteraturan arsitektural minimalis, prinsip gerak Google Material Expressive, dan arsitektur perangkat lunak skala tinggi.",
    telemetry: [
      { label: "ACADEMIC BASE", value: "ITESA Muhammadiyah Semarang" },
      { label: "COORDINATES", value: "6.9667° S, 110.4167° E" },
      { label: "ENGINEERING DISCIPLINE", value: "Fullstack Architecture & Creative Tech" },
      { label: "INTERFACE PHYSICS", value: "Lerp Parallax • 60 FPS Smooth Flow" }
    ]
  },

  about: {
    sectionIndex: "02",
    sectionTitle: "TENTANG SAYA // ABOUT",
    sectionSub: "JAKARTA • BEKASI • SEMARANG // SOFTWARE ENGINEERING",
    ethosTitle: "Rekayasa Perangkat Lunak, Disiplin Fisik, dan Eksplorasi Media Kreatif",
    ethosParagraphs: [
      "Saya lahir di Jakarta dan tumbuh besar di Bekasi, lalu saat ini sedang melanjutkan langkah menempuh pendidikan tinggi di Semarang. Sebagai seorang mahasiswa di ITESA Muhammadiyah Semarang dengan latar belakang Software Engineering (Rekayasa Perangkat Lunak), saya memadukan logika komputasi terstruktur dengan semangat untuk membangun karya teknologi yang bersih, modular, dan bermanfaat nyata.",
      "Keseimbangan hidup bagi saya dibangun dari aktivitas fisik dan kreativitas visual. Saya memiliki banyak hobi di bidang olahraga seperti futsal, sepak bola, lari, serta berbagai latihan fisik lainnya. Tak hanya olahraga, saya juga memiliki antusiasme mendalam pada dunia media: mendokumentasikan momen di sekitar, melakukan modifikasi serta proses editing kreatif, lalu membagikannya melalui media sosial di Instagram <a href=\"https://www.instagram.com/khoirluqmann/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"about-inline-link\" data-cursor-target>@khoirluqmann ↗</a>."
    ],
    pillars: [
      {
        code: "PIL-01",
        title: "Software Engineering",
        desc: "Mendalami rekayasa perangkat lunak, algoritma terstruktur, dan arsitektur web modern di ITESA Muhammadiyah Semarang untuk menciptakan sistem yang efisien dan handal."
      },
      {
        code: "PIL-02",
        title: "Physical Fitness & Sports",
        desc: "Menjaga stamina, fokus, dan ketahanan mental melalui olahraga rutin: futsal, sepak bola, lari, serta latihan fisik disiplin."
      },
      {
        code: "PIL-03",
        title: "Media & Creative Editing",
        desc: "Hobi mendokumentasikan visual sekitar, meracik proses editing kreatif, dan mengunggah karya dokumentasi di media sosial."
      },
      {
        code: "PIL-04",
        title: "Tri-City Roots",
        desc: "Lahir di Jakarta, bertumbuh di Bekasi, dan menimba ilmu di Semarang — membentuk kepribadian yang adaptif, tangguh, dan berpikiran terbuka."
      }
    ],
    timelineTitle: "Riwayat Pendidikan",
    timeline: [
      {
        year: "2013 — 2019",
        title: "Sekolah Dasar",
        place: "SD Negeri Wanasari 01",
        description: "Menyelesaikan pendidikan dasar formal di Cibitung, Kabupaten Bekasi, menumbuhkan rasa ingin tahu dan disiplin awal dalam belajar."
      },
      {
        year: "2019 — 2022",
        title: "Sekolah Menengah Pertama",
        place: "SMP Negeri 05 Cibitung",
        description: "Menyelesaikan pendidikan menengah pertama di Cibitung, Kabupaten Bekasi, membangun fondasi minat di bidang teknologi, sains, serta keaktifan dalam kegiatan olahraga fisik."
      },
      {
        year: "2022 — 2025",
        title: "Teknik Instalasi Tenaga Listrik (TITL)",
        place: "SMK Negeri 03 Cikarang Barat",
        description: "Sekolah Menengah Kejuruan dengan konsentrasi Teknik Instalasi Tenaga Listrik (TITL). Mendalami sistem kelistrikan, logika kontrol rangkaian, dan otomasi industri."
      },
      {
        year: "2025 — SEKARANG",
        title: "Software Engineering (S1)",
        place: "ITESA Muhammadiyah Semarang",
        description: "Institut Teknologi Statistika dan Bisnis Muhammadiyah Semarang. Menempuh studi sarjana dengan fokus pada rekayasa perangkat lunak (Software Engineering), arsitektur web modern, dan sistem komputasi terapan."
      }
    ]
  },

  skills: {
    sectionIndex: "03",
    sectionTitle: "My Skils",
    sectionSub: "Your Best Self",
    description:
      "Keahlian bukanlah titik akhir, melainkan proses yang terus ditempa. Berbekal rasa ingin tahu yang tinggi dan keberanian mencoba hal baru, saya terus memperdalam arsitektur perangkat lunak sambil mengasah kepekaan visual, narasi, dan konsistensi fisik.",
    matrixTiers: [
      {
        tierId: "TIER-01",
        layerName: "Software Engineering & Web Architecture",
        concept: "Core Systems & Web",
        colorAccent: "var(--color-botanical-sage)",
        description: "Membangun fondasi rekayasa perangkat lunak melalui pemrograman terstruktur, perancangan basis data, dan arsitektur web modern di ITESA Muhammadiyah Semarang. Berfokus pada penulisan kode yang bersih, efisiensi logika algoritma, serta pengembangan sistem dan antarmuka yang andal bagi pengguna.",
        nodes: [
          { name: "Pemrograman Terstruktur", spec: "Clean Code dan Efisiensi Algoritma", tag: "CODE" },
          { name: "Perancangan Basis Data", spec: "Pemodelan Relasional dan Optimasi Kueri", tag: "DATA" },
          { name: "Arsitektur Web Modern", spec: "Struktur Komponen Modular dan Skalabel", tag: "ARCH" },
          { name: "Sistem & Antarmuka Pengguna", spec: "Aplikasi Responsif dan Andal", tag: "SYS" }
        ]
      },
      {
        tierId: "TIER-02",
        layerName: "Media & Creative Editing",
        concept: "Visual & Narrative",
        colorAccent: "var(--color-warm-sand)",
        description: "Mengasah ketajaman visual dan estetika melalui dokumentasi lingkungan sekitar serta proses penyuntingan foto dan video. Kebiasaan meracik komposisi visual dan ritme cerita ini turut memperkuat insting desain antarmuka (UI) serta perhatian terhadap detail kecil dalam pengembangan web.",
        nodes: [
          { name: "Dokumentasi Visual", spec: "Perekaman Foto dan Video Lingkungan Sekitar", tag: "MEDIA" },
          { name: "Penyuntingan Konten", spec: "Komposisi Visual dan Ritme Cerita Kreatif", tag: "EDIT" },
          { name: "Desain Antarmuka (UI)", spec: "Insting Estetika dan Hirarki Visual", tag: "UI" },
          { name: "Perhatian Detail Web", spec: "Presisi Layout dan Interaksi Mikro", tag: "DETAIL" }
        ]
      },
      {
        tierId: "TIER-03",
        layerName: "Quotes & Reflective Writing",
        concept: "Micro-Copy & Writing",
        colorAccent: "var(--color-botanical-sage)",
        description: "Merangkai kalimat dan kutipan reflektif yang menangkap makna di balik pengalaman hidup. Latihan merumuskan pesan yang ringkas namun berkesan ini membantu saya menyusun micro-copy antarmuka yang jelas, empatik, serta dokumentasi teknis yang mudah dipahami.",
        nodes: [
          { name: "Kutipan Reflektif", spec: "Perumusan Makna Ringkas dan Berkesan", tag: "WRITE" },
          { name: "Micro-Copy Antarmuka", spec: "Teks Jelas, Empatik, dan Kontekstual", tag: "COPY" },
          { name: "Dokumentasi Teknis", spec: "Penyusunan Panduan Terstruktur dan Rapi", tag: "DOCS" },
          { name: "Komunikasi Pengguna", spec: "Interaksi Bahasa yang Mudah Dipahami", tag: "COMM" }
        ]
      },
      {
        tierId: "TIER-04",
        layerName: "Physical Fitness & Sports",
        concept: "Discipline & Athletics",
        colorAccent: "var(--color-charcoal-slate)",
        description: "Menjaga stamina, fokus jangka panjang, dan ketahanan mental melalui rutinitas olahraga disiplin, mulai dari futsal, sepak bola, hingga lari. Dinamika kerja sama tim di lapangan dan konsistensi latihan menjadi modal utama dalam menghadapi proses debugging yang kompleks dan tenggat waktu proyek.",
        nodes: [
          { name: "Futsal & Sepak Bola", spec: "Kerja Sama Tim dan Kecepatan Respon", tag: "SPORT" },
          { name: "Lari", spec: "Ketahanan Mental dan Stamina Jarak Jauh", tag: "RUN" },
          { name: "Latihan Fisik Teratur", spec: "Disiplin Rutin dan Kebugaran Tubuh", tag: "FIT" },
          { name: "Fokus & Daya Tahan", spec: "Ketelitian Menghadapi Masalah Kompleks", tag: "FOCUS" }
        ]
      }
    ]
  },

  projects: {
    sectionIndex: "04",
    sectionTitle: "My Projects",
    sectionSub: "ARCHITECTURAL PORTFOLIO 2025—2026",
    description:
      "Bagi saya setiap proyek adalah laboratorium belajar sebagai tempat mengubah konsep algoritma dan arsitektur perangkat lunak menjadi aplikasi nyata yang fungsional, teruji, dan terus disempurnakan.",
    items: [
      {
        id: "proj-01",
        code: "PRJ // 01",
        title: "KALKULATOR WEB",
        subtitle: "Aplikasi Kalkulator Web Interaktif & Presisi Aritmatika",
        year: "2025",
        client: "Independent Web Project",
        category: "Web Application / Front-End Development",
        role: "Front-End Developer & Logic Implementer",
        description:
          "Aplikasi kalkulator interaktif berbasis web yang dibangun untuk menyelesaikan operasi aritmatika dasar hingga kalkulasi bertingkat dengan cepat, akurat, dan responsif. Berfokus pada kebersihan antarmuka, penanganan error input yang andal, serta tata letak tombol yang ergonomis.",
        deliverables: [
          "Implementasi logika kalkulasi aritmatika berbasis JavaScript",
          "Antarmuka pengguna responsif dan adaptif di berbagai ukuran layar",
          "Validasi input ekspresi matematis dan penanganan error sintaks"
        ],
        techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git & GitHub"],
        metrics: {
          accuracy: "100% Akurat",
          response: "< 5ms Instan",
          bundle: "Vanilla JS Zero-Bloat"
        },
        links: {
          preview: "https://github.com/Rehanpratama/Kalkulator-Final",
          code: "https://github.com/Rehanpratama/Kalkulator-Final"
        },
        accent: "var(--color-botanical-sage)",
        blueprintSvg: "calculator",
        deepDive: {
          problem: "Pengguna sering membutuhkan alat hitung cepat berbasis web dengan antarmuka yang bersih, bebas dari beban library pihak ketiga yang memperlambat browser, serta memiliki tata letak tombol yang mudah digunakan di perangkat mobile maupun desktop.",
          solution: "Membangun aplikasi kalkulator menggunakan JavaScript murni (vanilla) dengan struktur DOM yang efisien, manipulasi string ekspresi aritmatika yang aman, serta tata letak CSS Grid yang presisi dan nyaman digunakan.",
          architectureSchema: `[ INPUT PENGGUNA: Klik Tombol / Ketikan Angka ]
                     ↓
[ EVENT HANDLER: Perekaman Karakter & Operator ]
                     ↓
[ PARSER EKSPRESI: Validasi Input & Sanitasi ]
                     ↓
[ ENGINE KALKULASI: Evaluasi Operasi Aritmatika ]
                     ↓
[ DISPLAY RENDER: Pembaruan Layar Hasil Real-Time ]`,
          benchmarks: [
            { metric: "Ukuran Bundle", target: "< 15KB", achieved: "Ringan (Zero Bloat)" },
            { metric: "Latensi Respon", target: "< 16ms", achieved: "Instan (< 5ms)" },
            { metric: "Akurasi Perhitungan", target: "100%", achieved: "100% Teruji" }
          ],
          sourceSnippet: `// Evaluasi dan Eksekusi Perhitungan Aritmatika
function calculateResult(expression) {
  try {
    // Sanitasi dan evaluasi ekspresi matematis
    const sanitized = expression.replace(/[^0-9+\\-*/.]/g, '');
    const result = Function('"use strict"; return (' + sanitized + ')')();
    return Number.isFinite(result) ? result : 'Error';
  } catch (err) {
    return 'Format Tidak Valid';
  }
}`
        }
      }
    ]
  },

  another: {
    sectionIndex: "05",
    sectionTitle: "DIGITAL GARDEN & TRANSMISSION",
    sectionSub: "LAB EXPERIMENTS // FREQUENCY SYNTH // DISPATCH",
    description:
      "Arsip pemikiran, eksperimen audio-spasial, dan saluran komunikasi langsung untuk kolaborasi arsitektural.",
    gardenNotes: [
      {
        id: "note-01",
        date: "OCT 2026",
        tag: "MONOGRAPH // 01",
        title: "Mengapa Antarmuka Modern Membutuhkan Sensasi Tektonik dan Gravitasi",
        readTime: "6 min read",
        excerpt:
          "Eksplorasi mendalam tentang kejenuhan mata pengguna terhadap gradien sintetis dan bagaimana kurva Material 3 Expressive serta tekstur batu kapur alami membangkitkan ketenangan neurologis.",
        content: `
          <h4>1. Kejenuhan Terhadap Estetika Artifisial</h4>
          <p>Selama lima tahun terakhir, antarmuka digital dikuasai oleh gradien ungu/biru neon dan efek glassmorphism yang seragam. Ini menciptakan apa yang para arsitek sebut sebagai "visual fatigue" — kelelahan kognitif akibat rangsangan spektrum warna yang tidak pernah ditemui dalam alam biologis manusia.</p>
          <h4>2. Sensasi Tektonik dan Bobot Fisik</h4>
          <p>Dengan menerapkan prinsip Biophilic Architectural Minimalism, kita mengembalikan bobot tektonik pada layar. Garis 1px bukan sekadar pembatas, melainkan balok penopang struktur. Kurva gerak cubic-bezier(0.2, 0, 0, 1) Google Material 3 memberikan inersia alami — sebuah elemen tidak berhenti seketika layaknya saklar biner, melainkan memiliki perlambatan gravitasi.</p>
          <h4>3. Ketenangan Neurologis melalui Palet Limestone</h4>
          <p>Batu kapur (Raw Limestone) dan lumut obsidian (Obsidian Moss) memantulkan spektrum cahaya yang lebih ramah bagi retina. Menggabungkannya dengan tipografi editorial menghasilkan ruang digital yang tenang, terukur, dan menghormati fokus manusia.</p>
        `
      },
      {
        id: "note-02",
        date: "AUG 2026",
        tag: "SYSTEM LAB // 02",
        title: "Arsitektur Zero-Overhead: Menyingkirkan Library Raksasa untuk Lerp Scroll Murni",
        readTime: "4 min read",
        excerpt:
          "Bagaimana kalkulasi diferensial linear interpolation 40 baris kode dapat mengungguli performa library scroll 200KB pada perangkat mobile dengan refresh rate 120Hz.",
        content: `
          <h4>1. Jebakan Bloatware Library Pihak Ketiga</h4>
          <p>Banyak pengembang mengimpor library scroll berbobot ratusan kilobyte hanya untuk mendapatkan efek gerak halus. Hal ini mengorbankan metrik INP (Interaction to Next Paint) dan membebani memori browser.</p>
          <h4>2. Matematika Lerp yang Elegan</h4>
          <p>Formula lerp(start, end, factor) = start + (end - start) * factor yang dijalankan dalam loop requestAnimationFrame dengan nilai factor antara 0.08 hingga 0.1 memberikan kehalusan 60–120 FPS tanpa overhead.</p>
          <h4>3. Linear Inertia Dampening</h4>
          <p>Dengan menghitung delta scroll secara real-time, kita menerapkan peredaman inersia subpixel yang stabil dan presisi tanpa distorsi kemiringan, memberikan umpan balik taktil yang memuaskan dan tenang.</p>
        `
      },
      {
        id: "note-03",
        date: "MAY 2026",
        tag: "ACADEMIA // 03",
        title: "Statistika Komputasional dalam Rekayasa Perangkat Lunak: Catatan dari ITESA",
        readTime: "8 min read",
        excerpt:
          "Penerapan model probabilitas stokastik untuk mendeteksi bottleneck latensi pada arsitektur microservices terdistribusi.",
        content: `
          <h4>1. Lensa Statistik dalam Pemodelan Sistem</h4>
          <p>Sebagai akademisi di ITESA Muhammadiyah Semarang, saya melihat rekayasa perangkat lunak tidak hanya sebagai seni menulis kode, melainkan sebagai sistem probabilitas terbuka. Latensi p99 bukanlah angka acak, melainkan hasil distribusi ekor panjang (heavy-tailed distribution).</p>
          <h4>2. Deteksi Bottleneck Berbasis Distribusi</h4>
          <p>Dengan menerapkan estimasi quantil dinamis menggunakan algoritma T-Digest di dalam micro-daemon, kita dapat mendeteksi degradasi performa sebelum lonjakan error 5xx terjadi pada layer aplikasi.</p>
          <h4>3. Sintesis Sains Data dan Arsitektur UI</h4>
          <p>Data metrik yang akurat memungkinkan antarmuka menyajikan informasi telemetri yang jujur, bukan angka persentase fiktif. Inilah fondasi arsitektur data terpusat kami.</p>
        `
      }
    ],
    audioSynth: {
      title: "Biophilic Resonant Tone Generator",
      tagline: "432Hz Nature Solfeggio • Interactive Web Audio Node",
      frequencies: [
        { label: "Ground (108Hz)", freq: 108, desc: "Tectonic Sub-Bass" },
        { label: "Sage Earth (216Hz)", freq: 216, desc: "Harmonic Foundation" },
        { label: "Natural Calm (432Hz)", freq: 432, desc: "Organic Resonant Tone" },
        { label: "Canopy Air (864Hz)", freq: 864, desc: "High Atmospheric Shimmer" }
      ]
    },
    colophon: {
      typography: "Syne (Display) • Instrument Serif (Editorial) • Plus Jakarta Sans (Body) • JetBrains Mono (Telemetry)",
      gridSystem: "Tectonic 12-Column Hairline Modular Grid",
      carbonEstimate: "Est. 0.09g CO2 per page view • Hosted on Edge Server",
      license: "Architectural Design & Systems © 2026 Muhammad Khoir Luqman. Crafted with precision."
    }
  }
};
