/**
 * COMPONENT 05: ANOTHER SECTION
 * Digital Garden, Interactive 432Hz Audio Synth, Transmission Terminal & Colophon
 */

export function renderAnother(data) {
  const { another, meta } = data;

  return `
    <section id="another" class="architectural-section section-another" data-reveal>
      <div class="section-watermark-label">
        <span class="watermark-index">${another.sectionIndex} // ${another.sectionTitle}</span>
        <span class="watermark-meta">${another.sectionSub}</span>
      </div>

      <div class="another-intro" data-stagger>
        <h2 class="font-display">${another.gardenHeading || "Catatan & Refleksi Pengalaman"}</h2>
        <p>${another.description}</p>
      </div>

      <!-- Digital Garden Monograph Cards -->
      <div class="garden-grid">
        ${another.gardenNotes
          .map(
            (note) => `
          <div class="garden-note-card" data-inspect-note="${note.id}" data-stagger data-cursor-target>
            <div>
              <div class="note-header">
                <span>${note.tag}</span>
                <span>${note.date}</span>
              </div>
              <h3 class="note-title">${note.title}</h3>
              <p class="note-excerpt">${note.excerpt}</p>
            </div>
            <div style="margin-top: var(--space-md); display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: var(--font-mono-micro); color: var(--text-muted);">
              <span>WAKTU BACA: ${note.readTime}</span>
              <span style="color: var(--accent-primary);">BACA CATATAN ↗</span>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <!-- Interactive Web Audio Biophilic Synthesizer -->
      <div class="audio-synth-wrapper" data-stagger>
        <div class="synth-header">
          <div>
            <h3>${another.audioSynth.title}</h3>
            <p style="font-family: var(--font-mono); font-size: var(--font-mono-tag); color: var(--accent-primary);">
              ${another.audioSynth.tagline}
            </p>
          </div>
          <button id="synth-mute-toggle" class="tactile-btn" data-cursor-target>
            <span id="synth-state-icon">▶</span>
            <span id="synth-state-label">Activate Resonant Tone</span>
          </button>
        </div>

        <div class="synth-controls-cluster">
          ${another.audioSynth.frequencies
            .map(
              (freq, index) => `
            <button class="synth-freq-btn ${index === 2 ? 'active-tone' : ''}" data-frequency="${freq.freq}" data-cursor-target>
              <strong>${freq.label}</strong>
              <span class="synth-sub-desc">${freq.desc}</span>
            </button>
          `
            )
            .join('')}
        </div>

        <canvas id="synth-canvas" class="synth-visualizer-canvas"></canvas>
      </div>

      <!-- Transmission / Contact Terminal -->
      <div class="transmission-terminal" data-stagger>
        <div class="transmission-info">
          <div style="font-family: var(--font-mono); font-size: var(--font-mono-tag); color: var(--accent-primary); margin-bottom: 0.5rem;">
            DOMISILI: SEMARANG / BEKASI // INDONESIA
          </div>
          <h3 class="font-display">${another.contactTitle || "Terbuka untuk Peluang & Kolaborasi"}</h3>
          <p>
            ${another.contactSubtitle || "Punya ide proyek pengembangan web, peluang magang, atau sekadar ingin berdiskusi seputar rekayasa perangkat lunak dan eksplorasi kreatif? Jangan ragu untuk menghubungi saya, saya selalu antusias menyambut tantangan dan pengalaman baru."}
          </p>

          <button id="copy-email-btn" class="contact-quick-pill" data-email="khoirluqman07@gmail.com" data-cursor-target>
            <span>✉</span>
            <span>khoirluqman07@gmail.com</span>
            <span style="opacity: 0.5;">[COPY]</span>
            <span id="copy-toast" class="copy-feedback-toast">COPIED TO CLIPBOARD</span>
          </button>
        </div>

        <div class="transmission-socials">
          ${meta.socials
            .map(
              (item) => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="social-node-card" data-cursor-target>
              <span class="social-network-name">${item.name}</span>
              <span class="social-network-handle">${item.handle}</span>
            </a>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- Colophon -->
      <footer class="architectural-colophon">
        <div>${another.colophon.license}</div>
        <div>${another.colophon.typography}</div>
        <div>${another.colophon.carbonEstimate}</div>
      </footer>
    </section>
  `;
}
