/**
 * COMPONENT 01: WELCOME SECTION
 * Biophilic Architectural Minimalism × Material Expressive
 */

export function renderWelcome(data) {
  const { welcome, meta } = data;

  return `
    <section id="welcome" class="architectural-section section-welcome" data-reveal>
      <div class="welcome-preamble-bar" data-stagger>
        <span class="preamble-line"></span>
        <span>${welcome.systemTag}</span>
        <span>//</span>
        <span>${welcome.architecturalPreamble}</span>
      </div>

      <h1 class="welcome-headline font-display">
        <span class="line-break">${welcome.headlineLine1}</span>
        <span class="line-break"><span class="editorial-word">${welcome.headlineLine2}</span></span>
        <span class="line-break">${welcome.headlineLine3}</span>
      </h1>

      <div class="welcome-grid-content">
        <div class="welcome-narrative-wrap" data-stagger>
          <p class="welcome-lead-text">
            ${welcome.leadParagraph}
          </p>
        </div>

        <div class="welcome-telemetry-cluster" data-stagger>
          ${welcome.telemetry
            .map(
              (item) => `
            <div class="telemetry-cell">
              <div class="telemetry-cell-label">${item.label}</div>
              <div class="telemetry-cell-value">${item.value}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
