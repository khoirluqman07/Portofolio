/**
 * GOOGLE ANTIGRAVITY PARALLAX ENGINE & ABSTRACT SMOOTH MOTION
 * Buttery-Smooth Momentum Scroll, Zero-Gravity Floating Waveforms,
 * 3D Spatial Levitation & Multi-Biome Horizon Scroller
 * Inspired by https://antigravity.google/ & Material 3 Expressive
 */

export class ParallaxEngine {
  constructor(options = {}) {
    this.viewport = document.getElementById('parallax-viewport');
    this.ease = options.ease || 0.082; // Silky Google Antigravity inertia
    this.scroll = {
      target: window.scrollY,
      current: window.scrollY,
      last: window.scrollY,
      velocity: 0,
      direction: 1
    };

    this.mouse = {
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      normX: 0,
      normY: 0
    };

    this.layers = [];
    this.horizonLayers = [];
    this.tiltCards = [];
    this.isRunning = false;
    this.rafId = null;

    // Horizon Landscape State
    this.currentHorizon = 'alps';
    this.horizonMode = 'auto'; // 'auto' | 'alps' | 'tuscany' | 'steppe' | 'poppy'
    this.horizonOrder = ['auto', 'alps', 'tuscany', 'steppe', 'poppy'];
    this.horizonLabels = {
      auto: 'Auto-Morph',
      alps: 'Alps',
      tuscany: 'Tuscany',
      steppe: 'Steppe',
      poppy: 'Poppy'
    };

    // Custom cursor elements
    this.cursorDot = document.querySelector('.custom-cursor-dot');
    this.cursorRing = document.querySelector('.custom-cursor-ring');
    this.cursorPos = {
      dotX: this.mouse.targetX,
      dotY: this.mouse.targetY,
      ringX: this.mouse.targetX,
      ringY: this.mouse.targetY
    };

    // Abstract Antigravity Waveform Canvas
    this.meshCanvas = document.getElementById('antigravity-mesh-canvas');
    this.meshCtx = this.meshCanvas ? this.meshCanvas.getContext('2d') : null;
    this.waveTime = 0;

    this.init();
  }

  init() {
    this.collectLayers();
    this.collectHorizonLayers();
    this.initMeshCanvas();
    this.bindEvents();
    this.applyHorizonState();
    this.bindCardTilt();
    this.start();
  }

  collectLayers() {
    // Parallax layers with data-speed or data-depth
    const layerElements = document.querySelectorAll('[data-parallax-speed], [data-depth]');
    this.layers = Array.from(layerElements).map((el) => {
      const speed = parseFloat(el.getAttribute('data-parallax-speed')) || parseFloat(el.getAttribute('data-depth')) || 0.1;
      const direction = el.getAttribute('data-parallax-direction') === 'horizontal' ? 'x' : 'y';
      return {
        element: el,
        speed,
        direction,
        initialY: el.getBoundingClientRect().top + window.scrollY
      };
    });
  }

  collectHorizonLayers() {
    this.horizonLayers = Array.from(document.querySelectorAll('.panoramic-horizon-layer'));
  }

  initMeshCanvas() {
    if (!this.meshCanvas) return;
    this.resizeMeshCanvas();
    window.addEventListener('resize', () => this.resizeMeshCanvas(), { passive: true });
  }

  resizeMeshCanvas() {
    if (!this.meshCanvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.meshCanvas.width = window.innerWidth * dpr;
    this.meshCanvas.height = window.innerHeight * dpr;
    if (this.meshCtx) {
      this.meshCtx.scale(dpr, dpr);
    }
  }

  bindEvents() {
    // 1. Silky-Smooth Momentum Wheel Scroll (Butter-like Physics)
    window.addEventListener('wheel', (e) => {
      // Allow native scrolling inside drawer modal or mobile overlay
      if (e.target.closest('#system-drawer, .drawer-content, .mobile-nav-overlay')) {
        return;
      }

      e.preventDefault();
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      this.scroll.target = Math.max(0, Math.min(this.scroll.target + e.deltaY * 0.94, maxScroll));
    }, { passive: false });

    // 2. Smooth Keyboard Navigation (Arrow Keys, Page Up/Down, Space)
    window.addEventListener('keydown', (e) => {
      if (document.getElementById('system-drawer')?.classList.contains('active')) return;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.scroll.target = Math.min(this.scroll.target + 110, maxScroll);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.scroll.target = Math.max(this.scroll.target - 110, 0);
      } else if (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        this.scroll.target = Math.min(this.scroll.target + window.innerHeight * 0.78, maxScroll);
      } else if (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        this.scroll.target = Math.max(this.scroll.target - window.innerHeight * 0.78, 0);
      }
    });

    // 3. Touch Momentum Support for Mobile/Tablet
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
      this.scroll.target = window.scrollY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.target.closest('#system-drawer, .drawer-content, .mobile-nav-overlay')) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      this.scroll.target = Math.max(0, Math.min(this.scroll.target + deltaY * 1.25, maxScroll));
    }, { passive: true });

    // 4. Native scroll sync (e.g. when dragging scrollbar)
    window.addEventListener('scroll', () => {
      if (Math.abs(window.scrollY - this.scroll.current) > 35) {
        this.scroll.target = window.scrollY;
      }
      this.updateProgressBar();
    }, { passive: true });

    // 5. Mouse tracking for cursor and 3D gyro-tilt
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      this.mouse.normX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.normY = (e.clientY / window.innerHeight) * 2 - 1;

      if (this.cursorDot) {
        this.cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }, { passive: true });

    // 6. Cursor hover states
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [data-cursor-target], .project-architectural-card, .pillar-card, .matrix-tier-card, .architectural-parallax-portal');
      if (target && this.cursorRing) {
        this.cursorRing.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, [data-cursor-target], .project-architectural-card, .pillar-card, .matrix-tier-card, .architectural-parallax-portal');
      if (target && this.cursorRing) {
        this.cursorRing.classList.remove('cursor-hover');
      }
    });

    // 7. Window Resize
    window.addEventListener('resize', () => {
      this.collectLayers();
      this.collectHorizonLayers();
    }, { passive: true });
  }

  bindCardTilt() {
    // 3D Antigravity Levitation Tilt for Cards
    const cards = document.querySelectorAll('.project-architectural-card, .pillar-card, .matrix-tier-card, .garden-note-card');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg
        const rotateY = ((x - centerX) / centerX) * 5;  // max 5 deg

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -6px, 12px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)`;
      });
    });
  }

  updateProgressBar() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }

  lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  scrollTo(targetY) {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    this.scroll.target = Math.max(0, Math.min(targetY, maxScroll));
  }

  render() {
    // Smooth Lerp Momentum Scroll
    this.scroll.current = this.lerp(this.scroll.current, this.scroll.target, this.ease);
    this.scroll.velocity = this.scroll.target - this.scroll.current;

    // Physically scroll the viewport with subpixel precision
    if (Math.abs(this.scroll.velocity) > 0.04 || Math.abs(window.scrollY - this.scroll.current) > 0.4) {
      window.scrollTo(0, this.scroll.current);
    }

    // Lerp Cursor Ring
    if (this.cursorRing) {
      this.cursorPos.ringX = this.lerp(this.cursorPos.ringX, this.mouse.targetX, 0.22);
      this.cursorPos.ringY = this.lerp(this.cursorPos.ringY, this.mouse.targetY, 0.22);
      this.cursorRing.style.transform = `translate3d(${this.cursorPos.ringX - 16}px, ${this.cursorPos.ringY - 16}px, 0)`;
    }

    // Parallax Layers calculation
    const windowH = window.innerHeight;
    const currentScrollY = this.scroll.current;

    this.layers.forEach((layer) => {
      const rect = layer.element.getBoundingClientRect();
      const inView = rect.top < windowH && rect.bottom > 0;
      if (inView) {
        const offset = (currentScrollY - layer.initialY) * layer.speed;
        if (layer.direction === 'y') {
          layer.element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
        } else {
          layer.element.style.transform = `translate3d(${offset.toFixed(2)}px, 0, 0)`;
        }
      }
    });

    // Mouse Parallax for elements marked with [data-mouse-parallax]
    const mouseElements = document.querySelectorAll('[data-mouse-parallax]');
    mouseElements.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-mouse-depth')) || 20;
      const moveX = this.mouse.normX * depth;
      const moveY = this.mouse.normY * depth;
      el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
    });

    // Multi-Layer Biophilic Horizon Parallax Scroller
    this.updateParallaxHorizons();

    // Render Abstract Antigravity Fluid Waveforms
    this.renderAntigravityWaveforms();

    if (this.isRunning) {
      this.rafId = requestAnimationFrame(() => this.render());
    }
  }

  updateParallaxHorizons() {
    if (this.horizonLayers.length === 0) return;

    // 1. Calculate Active Horizon based on Section Scroll if in 'auto' mode
    if (this.horizonMode === 'auto') {
      const scrollY = this.scroll.current;
      const windowH = window.innerHeight;

      const welcomeEl = document.getElementById('welcome');
      const aboutEl = document.getElementById('about');
      const skillsEl = document.getElementById('skills');
      const projectsEl = document.getElementById('projects');
      const anotherEl = document.getElementById('another');

      let targetHorizon = 'alps';

      if (anotherEl && scrollY >= anotherEl.offsetTop - windowH * 0.45) {
        targetHorizon = 'alps'; // Return to alpine sunset for conclusion
      } else if (projectsEl && scrollY >= projectsEl.offsetTop - windowH * 0.45) {
        targetHorizon = 'poppy';
      } else if (skillsEl && scrollY >= skillsEl.offsetTop - windowH * 0.45) {
        targetHorizon = 'steppe';
      } else if (aboutEl && scrollY >= aboutEl.offsetTop - windowH * 0.45) {
        targetHorizon = 'tuscany';
      } else {
        targetHorizon = 'alps';
      }

      if (this.currentHorizon !== targetHorizon) {
        this.currentHorizon = targetHorizon;
        this.applyHorizonState();
      }
    }

    // 2. Visible & Tangible Parallax Physics for Horizon Stack (Pure smooth translation without zoom in/out)
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = this.scroll.current / maxScroll;
    const horizonOffsetY = -(scrollProgress * 360); // Pure vertical translation travel
    const mouseShiftX = this.mouse.normX * 14;
    const mouseShiftY = this.mouse.normY * 14;

    this.horizonLayers.forEach((layer) => {
      layer.style.transform = `translate3d(${mouseShiftX.toFixed(1)}px, ${(horizonOffsetY + mouseShiftY).toFixed(1)}px, 0)`;
    });
  }

  /* ==========================================================================
     ABSTRACT BIOPHILIC FLUID WAVEFORMS (Google Antigravity Generative Waves)
     ========================================================================== */
  renderAntigravityWaveforms() {
    if (!this.meshCtx || !this.meshCanvas) return;
    const ctx = this.meshCtx;
    const w = window.innerWidth;
    const h = window.innerHeight;

    ctx.clearRect(0, 0, w, h);

    // Wave parameters
    this.waveTime += 0.008 + Math.min(Math.abs(this.scroll.velocity) * 0.0006, 0.025);

    // 4 Layered Organic Undulating Spline Ribbons
    const ribbons = [
      {
        baseY: h * 0.28,
        amplitude: 45 + Math.min(Math.abs(this.scroll.velocity) * 0.4, 60),
        frequency: 0.0014,
        speed: 1.1,
        color: 'rgba(74, 93, 78, 0.14)',
        fillColor: 'rgba(74, 93, 78, 0.035)'
      },
      {
        baseY: h * 0.48,
        amplitude: 58 + Math.min(Math.abs(this.scroll.velocity) * 0.5, 75),
        frequency: 0.0011,
        speed: 0.85,
        color: 'rgba(200, 182, 158, 0.16)',
        fillColor: 'rgba(200, 182, 158, 0.03)'
      },
      {
        baseY: h * 0.68,
        amplitude: 52 + Math.min(Math.abs(this.scroll.velocity) * 0.45, 65),
        frequency: 0.0016,
        speed: 1.3,
        color: 'rgba(74, 93, 78, 0.12)',
        fillColor: 'rgba(74, 93, 78, 0.025)'
      },
      {
        baseY: h * 0.88,
        amplitude: 40 + Math.min(Math.abs(this.scroll.velocity) * 0.35, 50),
        frequency: 0.0018,
        speed: 0.95,
        color: 'rgba(159, 138, 112, 0.12)',
        fillColor: 'rgba(159, 138, 112, 0.02)'
      }
    ];

    ribbons.forEach((ribbon, rIdx) => {
      ctx.beginPath();
      ctx.strokeStyle = ribbon.color;
      ctx.lineWidth = 1.25;

      const step = 24;
      const points = [];

      for (let x = -50; x <= w + 50; x += step) {
        // Multi-frequency harmonic wave
        const harmonic1 = Math.sin(x * ribbon.frequency + this.waveTime * ribbon.speed + rIdx * 1.2);
        const harmonic2 = Math.cos(x * ribbon.frequency * 0.6 - this.waveTime * 0.4);

        // Gravitational mouse deflection (Antigravity repulsion)
        const distToMouse = Math.hypot(x - this.mouse.targetX, ribbon.baseY - this.mouse.targetY);
        const mouseRepel = Math.max(0, (220 - distToMouse) * 0.22);

        const y = ribbon.baseY + (harmonic1 * 0.7 + harmonic2 * 0.3) * ribbon.amplitude - mouseRepel;
        points.push({ x, y });
      }

      // Smooth Bezier Curve through points
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2;
        const yc = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
      }
      const last = points[points.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.stroke();

      // Soft gradient fill beneath wave
      ctx.lineTo(w + 50, h);
      ctx.lineTo(-50, h);
      ctx.closePath();
      ctx.fillStyle = ribbon.fillColor;
      ctx.fill();
    });
  }

  applyHorizonState() {
    // Automatically transition the active panoramic landscape layer based on section scroll
    this.horizonLayers.forEach((layer) => {
      const horizonKey = layer.getAttribute('data-horizon');
      if (horizonKey === this.currentHorizon) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(() => this.render());
    }
  }

  stop() {
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  refresh() {
    this.collectLayers();
    this.collectHorizonLayers();
    this.resizeMeshCanvas();
  }
}
