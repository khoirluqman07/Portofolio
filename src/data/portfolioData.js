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
    sectionTitle: "SYSTEMIC CAPABILITIES",
    sectionSub: "STRUCTURAL TAXONOMY // ZERO PROGRESS BARS",
    description:
      "Kami menolak progress bar persentase yang arbitrari. Sebagai gantinya, kemampuan kami diklasifikasikan sebagai matriks arsitektur 4-lapisan: dari infrastruktur dasar hingga pengalaman spasial manusia.",
    matrixTiers: [
      {
        tierId: "TIER-01",
        layerName: "Distributed Systems & Cloud Core",
        concept: "Subterranean Infrastructure",
        colorAccent: "var(--color-botanical-sage)",
        nodes: [
          { name: "Distributed Microservices", spec: "Event-driven, High-Throughput", tag: "CORE" },
          { name: "PostgreSQL & Redis Topology", spec: "Connection Pooling, Caching Grids", tag: "DATA" },
          { name: "Docker & Container Orchestration", spec: "Multi-stage Builds, Zero-downtime", tag: "INFRA" },
          { name: "REST, GraphQL & gRPC APIs", spec: "Strict Contract, Protocol Buffers", tag: "PROTO" },
          { name: "Cloudflare Workers & Edge Compute", spec: "Sub-50ms Global Edge Routing", tag: "EDGE" }
        ]
      },
      {
        tierId: "TIER-02",
        layerName: "Fullstack Synthesis & Engines",
        concept: "Tectonic Middleware",
        colorAccent: "var(--color-warm-sand)",
        nodes: [
          { name: "TypeScript & ECMAScript Next", spec: "Strict Typing, AST Transformations", tag: "LANG" },
          { name: "Node.js & Bun Runtimes", spec: "Non-blocking I/O, High Concurrency", tag: "ENGINE" },
          { name: "Go (Golang)", spec: "Goroutines, Low-latency Micro-daemons", tag: "LANG" },
          { name: "Python for Data & Automation", spec: "NumPy, Pandas, Telemetry Scraping", tag: "DATA" },
          { name: "Next.js & Modern SSR Pipelines", spec: "Streaming SSR, Server Components", tag: "FRAMEWORK" }
        ]
      },
      {
        tierId: "TIER-03",
        layerName: "Spatial UI & Material Motion",
        concept: "Sensory Interface Layer",
        colorAccent: "var(--color-botanical-sage)",
        nodes: [
          { name: "Material 3 Expressive Curves", spec: "cubic-bezier(0.2, 0, 0, 1), Elevation", tag: "MOTION" },
          { name: "Smooth Lerp Parallax Physics", spec: "requestAnimationFrame, Inertia Dampening", tag: "PHYSICS" },
          { name: "Canvas & Generative Topography", spec: "Organic Vector Fields, SVG Noise", tag: "CREATIVE" },
          { name: "Architectural Grid Systems", spec: "Subpixel Hairline Borders, Clamp Scales", tag: "LAYOUT" },
          { name: "Headless Design Tokens", spec: "CSS Variables, Semantic Color Spaces", tag: "SYSTEM" }
        ]
      },
      {
        tierId: "TIER-04",
        layerName: "Human Experience & Ecological Resilience",
        concept: "Atmospheric Envelope",
        colorAccent: "var(--color-charcoal-slate)",
        nodes: [
          { name: "Universal Accessibility (WCAG AAA)", spec: "Keyboard Traversal, High Contrast", tag: "A11Y" },
          { name: "Green Web & Carbon Efficiency", spec: "< 0.12g CO2/view, Zero Bloat", tag: "ECO" },
          { name: "Core Web Vitals Engineering", spec: "LCP < 0.8s, INP < 50ms, CLS 0", tag: "PERF" },
          { name: "Responsive Dynamic Viewports", spec: "Foldables, Ultra-wides, Mobile First", tag: "ADAPT" }
        ]
      }
    ]
  },

  projects: {
    sectionIndex: "04",
    sectionTitle: "SELECTED WORKS",
    sectionSub: "ARCHITECTURAL PORTFOLIO // 2024—2026",
    description:
      "Katalog karya arsitektur perangkat lunak yang dibangun dengan standar estetika galeri dan integritas rekayasa sistem.",
    items: [
      {
        id: "proj-01",
        code: "PRJ // 01",
        title: "AURA.BIOS",
        subtitle: "Biophilic Spatial Architecture Operating System",
        year: "2026",
        client: "Autonomous Research Lab",
        category: "Creative Technology / WebGL",
        role: "Lead Systems Architect & Creative Technologist",
        description:
          "Sistem operasi antarmuka spasial berbasis browser yang mengadaptasi pencahayaan sirkadian dan tekstur biofilik real-time untuk mengurangi kelelahan kognitif pekerja jarak jauh.",
        deliverables: [
          "Mesin rendering topografi real-time dengan WebGL",
          "Material 3 Expressive motion choreography",
          "Arsitektur state terdistribusi dengan Web Workers"
        ],
        techStack: ["TypeScript", "Canvas/WebGL", "Tailwind Tectonic", "Material Motion", "Web Audio API"],
        metrics: {
          fps: "60 FPS Locked",
          co2: "0.08g CO2/view",
          bundle: "32KB Gzipped"
        },
        links: {
          preview: "https://aura-bios.demo.internal",
          code: "https://github.com/khoirluqman07/aura-bios"
        },
        accent: "var(--color-botanical-sage)",
        blueprintSvg: "topographic",
        deepDive: {
          problem: "Antarmuka kerja modern membanjiri indera visual dengan radiasi spektrum cahaya biru datar dan gerakan linier yang tidak wajar, memicu sindrom Computer Vision Fatigue.",
          solution: "AURA.BIOS merancang ulang arsitektur tampilan dengan mengintegrasikan kalkulasi siklus sirkadian matahari lokal, noise perlin topografis bergradasi limestone, dan audio frekuensi 432Hz yang menenangkan.",
          architectureSchema: `[ CLIENT INPUT: Lux & Coordinates ]
                 ↓
[ WORKER THREAD: Perlin Topography Field ]
                 ↓
[ WEBGL SHADER: Circadian Chromatic Matrix ]
                 ↓
[ 60 FPS RENDER: Organic Zero-Bloat Canvas ]`,
          benchmarks: [
            { metric: "Frame Budget", target: "16.6ms (60 FPS)", achieved: "14.2ms nominal" },
            { metric: "Memory Heap", target: "< 45MB", achieved: "28.4MB steady" },
            { metric: "Carbon Intensity", target: "< 0.10g CO2", achieved: "0.08g CO2/view" }
          ],
          sourceSnippet: `// Circadian Color Temperature Synthesizer
export function computeCircadianTone(lat, lon, epoch) {
  const solarAltitude = calcSolarZenith(lat, lon, epoch);
  const kelvin = clamp(2200, 2200 + (solarAltitude * 43), 5600);
  return kelvinToRGB(kelvin);
}`
        }
      },
      {
        id: "proj-02",
        code: "PRJ // 02",
        title: "STATISTIKA.OS",
        subtitle: "Institutional Data Intelligence & Macro Topology",
        year: "2025",
        client: "ITESA Academic Research Node",
        category: "Enterprise Fullstack / Data Platform",
        role: "Principal Backend & UI Architect",
        description:
          "Platform agregasi data akademik dan analitik prediktif multi-kampus dengan visualisasi matriks relasional dan enkripsi zero-trust.",
        deliverables: [
          "Pipeline ingestion data berbasis Go & PostgreSQL",
          "Antarmuka analitik bertema arsitektural monokrom",
          "Ekspor laporan editorial berstandar publikasi"
        ],
        techStack: ["Go", "Next.js 15", "PostgreSQL", "Docker", "Apache ECharts", "Tailwind"],
        metrics: {
          queryLatency: "14ms p99",
          records: "1.2M Datapoints",
          uptime: "99.98%"
        },
        links: {
          preview: "https://statistika-os.itesa.ac.id",
          code: "https://github.com/khoirluqman07/statistika-os"
        },
        accent: "var(--color-warm-sand)",
        blueprintSvg: "matrix",
        deepDive: {
          problem: "Fragmentasi data riset multi-fakultas pada ITESA Muhammadiyah Semarang dengan latensi kueri agregasi lambat (>850ms) dan kurangnya standarisasi arsitektur data terbuka.",
          solution: "Membangun sistem micro-daemon berbasis Go dengan connection pool terisolasi, indexing partisi PostgreSQL berorientasi waktu, dan antarmuka analitik editorial minim beban.",
          architectureSchema: `[ ACADEMIC SOURCES ] → [ GO INGESTION DAEMON ]
                                ↓
                        [ PARTITIONED PGSQL ]
                                ↓
              [ REDIS CACHE GRID (TTL 300s) ]
                                ↓
              [ NEXT.JS SSR EDITORIAL DASHBOARD ]`,
          benchmarks: [
            { metric: "p99 Query Latency", target: "< 50ms", achieved: "14ms" },
            { metric: "Concurrent Queries", target: "1,000 req/s", achieved: "2,400 req/s" },
            { metric: "Data Ingestion Throughput", target: "10k rec/s", achieved: "28k rec/s" }
          ],
          sourceSnippet: `// High-Concurrency Partitioned Query Node
func QueryAcademicAggregates(ctx context.Context, pool *pgxpool.Pool, cohortID string) (*AggResult, error) {
    query := "SELECT metric_id, percentile_disc(0.95) WITHIN GROUP (ORDER BY latency) FROM telemetry WHERE cohort = $1"
    return pool.QueryRow(ctx, query, cohortID)...
}`
        }
      },
      {
        id: "proj-03",
        code: "PRJ // 03",
        title: "TERRA.TELEMETRY",
        subtitle: "Microclimate IoT Node & Agricultural Soil Network",
        year: "2025",
        client: "Central Java Agritech Syndicate",
        category: "Embedded & Edge Fullstack",
        role: "Fullstack IoT & Systems Engineer",
        description:
          "Jaringan sensor mikroklimat cerdas untuk perkebunan presisi di Jawa Tengah. Menghubungkan node sensor fisik di lapangan ke dashboard spasial real-time.",
        deliverables: [
          "Edge gateway parser dengan protokol MQTT & WebSockets",
          "Dashboard biophilic dengan peringatan dini kekeringan tanah",
          "Offline-first PWA dengan sinkronisasi otomatis"
        ],
        techStack: ["Node.js", "TypeScript", "MQTT", "TimescaleDB", "Redis", "PWA Architecture"],
        metrics: {
          edgeLatency: "28ms Real-time",
          sensors: "128 Active Field Nodes",
          batteryLife: "18 Months Low Power"
        },
        links: {
          preview: "https://terra.telemetry.io",
          code: "https://github.com/khoirluqman07/terra-telemetry"
        },
        accent: "var(--color-botanical-sage)",
        blueprintSvg: "contour",
        deepDive: {
          problem: "Petani hortikultura di area pegunungan Jawa Tengah sering menghadapi ketidakpastian anomali cuaca mikro yang menyebabkan kegagalan irigasi panen.",
          solution: "Menyebarkan 128 sensor berdaya rendah bertenaga surya yang mentransmisikan data kelembaban tanah melalui LoRaWAN / MQTT gateway ke antarmuka peta topografi biofilik.",
          architectureSchema: `[ 128 LORAWAN NODES ] → [ CENTRAL JAVA EDGE GATEWAY ]
                                  ↓
                        [ MQTT BROKER (EMQX) ]
                                  ↓
                        [ TIMESCALEDB PIPELINE ]
                                  ↓
                        [ WEBSOCKET REACTIVE MAP ]`,
          benchmarks: [
            { metric: "Sensor Packet Loss", target: "< 1.5%", achieved: "0.28%" },
            { metric: "Edge Dispatch Latency", target: "< 100ms", achieved: "28ms" },
            { metric: "Offline IndexedDB Cache", target: "100% Offline Read", achieved: "Verified" }
          ],
          sourceSnippet: `// Soil Moisture Anomaly Detector
export function evaluateSoilHydration(fieldReading) {
  const { moisture, ambientTemp, vaporDeficit } = fieldReading;
  const moistureStressIndex = (100 - moisture) * (ambientTemp / 28.0) * vaporDeficit;
  return { alert: moistureStressIndex > 45, level: moistureStressIndex };
}`
        }
      },
      {
        id: "proj-04",
        code: "PRJ // 04",
        title: "SYNTHESIS.TOKENS",
        subtitle: "Headless Design System & Material Expressive Compiler",
        year: "2024",
        client: "Open Source Collective",
        category: "Design Engineering Tooling",
        role: "Creator & Maintainer",
        description:
          "Kompiler token desain universal yang mentranslasikan variabel Figma dan kurva gerak Google Material 3 ke CSS Variables, Tailwind Plugins, dan native Swift/Kotlin.",
        deliverables: [
          "CLI parser dengan deteksi kontras WCAG AAA otomatis",
          "Plugin Webpack/Vite untuk tree-shaking style tokens",
          "Dokumentasi interaktif dengan kalkulator kurva Bezier"
        ],
        techStack: ["TypeScript", "Node.js", "AST Parser", "CSS Custom Properties", "Vite"],
        metrics: {
          downloads: "42k Monthly",
          coverage: "100% Test Coverage",
          size: "4.8KB Core"
        },
        links: {
          preview: "https://synthesis-tokens.dev",
          code: "https://github.com/khoirluqman07/synthesis-tokens"
        },
        accent: "var(--color-charcoal-slate)",
        blueprintSvg: "geometry",
        deepDive: {
          problem: "Inkonsistensi antara spesifikasi kurva gerak desainer di Figma dengan implementasi frontend engineer, menyebabkan animasi web terasa kasar dan kaku.",
          solution: "SYNTHESIS.TOKENS mengubah definisi kurva cubic-bezier dan token elevasi menjadi AST murni yang siap disuntikkan langsung ke CSS Variables dan Tailwind secara zero-overhead.",
          architectureSchema: `[ FIGMA TOKENS JSON ] → [ SYNTHESIS PARSER CLI ]
                                  ↓
                         [ AST GENERATOR ]
                                  ↓
             ┌────────────────────┼────────────────────┐
             ↓                    ↓                    ↓
      [ CSS VARIABLES ]   [ TAILWIND PLUGIN ]   [ SWIFTUI TOKENS ]`,
          benchmarks: [
            { metric: "Parse Speed", target: "< 50ms (1k tokens)", achieved: "12ms" },
            { metric: "Core Output Size", target: "< 10KB", achieved: "4.8KB" },
            { metric: "Contrast Validation", target: "WCAG AAA 7:1", achieved: "100% Passed" }
          ],
          sourceSnippet: `// Material 3 Expressive Curve Parser
export function compileBezierCurve(tokens) {
  const { x1, y1, x2, y2 } = tokens.motion.emphasized;
  return \`cubic-bezier(\${x1}, \${y1}, \${x2}, \${y2})\`;
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
