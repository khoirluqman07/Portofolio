/**
 * INTERSECTION OBSERVER ORCHESTRATOR
 * Expressive Entrance Physics, Telemetry Reveal & Active Section Tracker
 */

export class ArchitecturalObserver {
  constructor() {
    this.sectionObserver = null;
    this.revealObserver = null;
    this.init();
  }

  init() {
    this.setupRevealObserver();
    this.setupSectionObserver();
  }

  setupRevealObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12
    };

    this.revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          
          // If the element has stagger items
          const staggerItems = entry.target.querySelectorAll('[data-stagger]');
          staggerItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 85}ms`;
            item.classList.add('is-stagger-revealed');
          });

          // Unobserve once revealed for clean performance
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const revealTargets = document.querySelectorAll(
      '.architectural-section, .pillar-card, .matrix-tier-card, .project-architectural-card, .garden-note-card, [data-reveal]'
    );

    revealTargets.forEach((target) => {
      target.classList.add('reveal-init');
      this.revealObserver.observe(target);
    });
  }

  setupSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const watermarkCurrent = document.querySelector('.current-section-marker');

    const options = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0
    };

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          if (watermarkCurrent) {
            watermarkCurrent.textContent = id.toUpperCase();
          }
        }
      });
    }, options);

    sections.forEach((section) => {
      this.sectionObserver.observe(section);
    });
  }

  refresh() {
    if (this.revealObserver) this.revealObserver.disconnect();
    if (this.sectionObserver) this.sectionObserver.disconnect();
    this.init();
  }
}
