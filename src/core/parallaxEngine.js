/**
 * MULTI-LAYER PARALLAX ENGINE & MOTION PHYSICS
 * Linear Interpolation (Lerp), Multi-layer Z-Depth, Velocity Skew & Cursor Physics
 * Based on Google Material 3 Expressive motion principles
 */

export class ParallaxEngine {
  constructor(options = {}) {
    this.viewport = document.getElementById('parallax-viewport');
    this.ease = options.ease || 0.085;
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
    this.skewElements = [];
    this.isRunning = false;
    this.rafId = null;

    // Custom cursor elements
    this.cursorDot = document.querySelector('.custom-cursor-dot');
    this.cursorRing = document.querySelector('.custom-cursor-ring');
    this.cursorPos = {
      dotX: this.mouse.targetX,
      dotY: this.mouse.targetY,
      ringX: this.mouse.targetX,
      ringY: this.mouse.targetY
    };

    this.init();
  }

  init() {
    this.collectLayers();
    this.bindEvents();
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

    // Velocity skew elements
    this.skewElements = Array.from(document.querySelectorAll('[data-velocity-skew]'));
  }

  bindEvents() {
    // Wheel / Scroll event tracking
    window.addEventListener('scroll', () => {
      this.scroll.target = window.scrollY;
      this.updateProgressBar();
    }, { passive: true });

    // Mouse movement tracking for cursor and mouse-parallax
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      this.mouse.normX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.normY = (e.clientY / window.innerHeight) * 2 - 1;

      if (this.cursorDot) {
        this.cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    }, { passive: true });

    // Cursor magnetic and hover interactions
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, [data-cursor-target], .project-architectural-card, .pillar-card, .matrix-tier-card');
      if (target && this.cursorRing) {
        this.cursorRing.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, [data-cursor-target], .project-architectural-card, .pillar-card, .matrix-tier-card');
      if (target && this.cursorRing) {
        this.cursorRing.classList.remove('cursor-hover');
      }
    });

    // Resize recalculation
    window.addEventListener('resize', () => {
      this.collectLayers();
    }, { passive: true });
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

  render() {
    // Smooth Lerp for scroll velocity calculation
    this.scroll.current = this.lerp(this.scroll.current, this.scroll.target, this.ease);
    this.scroll.velocity = this.scroll.target - this.scroll.current;

    // Lerp Cursor Ring
    if (this.cursorRing) {
      this.cursorPos.ringX = this.lerp(this.cursorPos.ringX, this.mouse.targetX, 0.22);
      this.cursorPos.ringY = this.lerp(this.cursorPos.ringY, this.mouse.targetY, 0.22);
      this.cursorRing.style.transform = `translate3d(${this.cursorPos.ringX - 16}px, ${this.cursorPos.ringY - 16}px, 0)`;
    }

    // Velocity Skew (Material Expressive organic elasticity)
    const rawSkew = this.scroll.velocity * 0.04;
    const clampedSkew = Math.max(-2.5, Math.min(2.5, rawSkew));
    if (this.skewElements.length > 0 && Math.abs(clampedSkew) > 0.01) {
      this.skewElements.forEach((el) => {
        el.style.transform = `skewY(${clampedSkew}deg)`;
      });
    } else if (this.skewElements.length > 0) {
      this.skewElements.forEach((el) => {
        el.style.transform = 'skewY(0deg)';
      });
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

    if (this.isRunning) {
      this.rafId = requestAnimationFrame(() => this.render());
    }
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
  }
}
