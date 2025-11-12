/**
 * Particle System - Core particle physics and rendering
 * Crimson Red Canadian Aurora theme
 */

import { PARTICLE_CONFIG } from './config';
import { distance, random, lerp, hexToRgb } from './utils';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  hue: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private cursorX: number = 0;
  private cursorY: number = 0;
  private cursorActive: boolean = false;
  private config: typeof PARTICLE_CONFIG.desktop;
  private primaryColor: { r: number; g: number; b: number };
  private secondaryColor: { r: number; g: number; b: number };
  private glowColor: { r: number; g: number; b: number };

  constructor(canvas: HTMLCanvasElement, config: typeof PARTICLE_CONFIG.desktop) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) throw new Error('Could not get 2d context');
    this.ctx = ctx;
    this.config = config;

    // Parse colors
    this.primaryColor = hexToRgb(PARTICLE_CONFIG.colors.primary) || { r: 220, g: 20, b: 60 };
    this.secondaryColor = hexToRgb(PARTICLE_CONFIG.colors.secondary) || { r: 176, g: 16, b: 48 };
    this.glowColor = hexToRgb(PARTICLE_CONFIG.colors.glow) || { r: 232, g: 74, b: 95 };

    this.width = canvas.width;
    this.height = canvas.height;

    this.init();
  }

  /**
   * Initialize particles
   */
  private init(): void {
    this.particles = [];
    const { particleCount } = this.config;

    for (let i = 0; i < particleCount; i++) {
      this.particles.push(this.createParticle());
    }
  }

  /**
   * Create a single particle
   */
  private createParticle(x?: number, y?: number): Particle {
    const { minSize, maxSize, minSpeed, maxSpeed, baseAlpha } = PARTICLE_CONFIG.particle;

    return {
      x: x ?? random(0, this.width),
      y: y ?? random(0, this.height),
      vx: random(-maxSpeed, maxSpeed),
      vy: random(-maxSpeed, maxSpeed),
      size: random(minSize, maxSize),
      baseAlpha,
      alpha: baseAlpha,
      hue: random(0, 20), // Slight color variation in reds
    };
  }

  /**
   * Update cursor position
   */
  public setCursor(x: number, y: number, active: boolean): void {
    this.cursorX = x;
    this.cursorY = y;
    this.cursorActive = active;
  }

  /**
   * Update particle positions and physics
   */
  public update(): void {
    const { cursorRadius, attractionStrength, speedMultiplier } = PARTICLE_CONFIG.cursor;
    const { hoverAlpha, baseAlpha } = PARTICLE_CONFIG.particle;

    this.particles.forEach((particle) => {
      // Apply cursor interaction if cursor is active
      if (this.cursorActive) {
        const dist = distance(particle.x, particle.y, this.cursorX, this.cursorY);

        if (dist < cursorRadius) {
          // Attraction force
          const force = (cursorRadius - dist) / cursorRadius;
          const angle = Math.atan2(this.cursorY - particle.y, this.cursorX - particle.x);

          particle.vx += Math.cos(angle) * force * attractionStrength;
          particle.vy += Math.sin(angle) * force * attractionStrength;

          // Speed multiplier
          particle.vx *= speedMultiplier;
          particle.vy *= speedMultiplier;

          // Alpha boost
          particle.alpha = lerp(particle.alpha, hoverAlpha, 0.1);
        } else {
          // Return to base alpha
          particle.alpha = lerp(particle.alpha, baseAlpha, 0.05);
        }
      } else {
        // Return to base alpha when cursor not active
        particle.alpha = lerp(particle.alpha, baseAlpha, 0.05);
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Ensure minimum speed (particles shouldn't stop completely)
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (speed < PARTICLE_CONFIG.particle.minSpeed) {
        const angle = Math.atan2(particle.vy, particle.vx);
        particle.vx = Math.cos(angle) * PARTICLE_CONFIG.particle.minSpeed;
        particle.vy = Math.sin(angle) * PARTICLE_CONFIG.particle.minSpeed;
      }

      // Wrap around edges
      if (particle.x < 0) particle.x = this.width;
      if (particle.x > this.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.height;
      if (particle.y > this.height) particle.y = 0;
    });
  }

  /**
   * Render particles and connections
   */
  public render(): void {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw connections first (behind particles)
    if (PARTICLE_CONFIG.performance.enableConnections) {
      this.drawConnections();
    }

    // Draw particles
    this.drawParticles();
  }

  /**
   * Draw connection lines between nearby particles
   */
  private drawConnections(): void {
    const { maxDistance, lineWidth, alpha, hoverAlpha } = PARTICLE_CONFIG.connections;
    const { cursorRadius } = PARTICLE_CONFIG.cursor;

    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dist = distance(p1.x, p1.y, p2.x, p2.y);

        if (dist < maxDistance) {
          // Calculate opacity based on distance
          const opacity = (1 - dist / maxDistance) * alpha;

          // Boost opacity if near cursor
          let finalOpacity = opacity;
          if (this.cursorActive) {
            const distToCursor1 = distance(p1.x, p1.y, this.cursorX, this.cursorY);
            const distToCursor2 = distance(p2.x, p2.y, this.cursorX, this.cursorY);

            if (distToCursor1 < cursorRadius || distToCursor2 < cursorRadius) {
              finalOpacity = opacity * hoverAlpha / alpha;
            }
          }

          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(${this.primaryColor.r}, ${this.primaryColor.g}, ${this.primaryColor.b}, ${finalOpacity})`;
          this.ctx.lineWidth = lineWidth;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }
  }

  /**
   * Draw individual particles
   */
  private drawParticles(): void {
    this.particles.forEach((particle) => {
      // Slight color variation
      const r = this.primaryColor.r + particle.hue;
      const g = this.primaryColor.g;
      const b = this.primaryColor.b + particle.hue;

      // Draw glow if enabled
      if (PARTICLE_CONFIG.performance.enableGlow && particle.alpha > PARTICLE_CONFIG.particle.baseAlpha) {
        const gradient = this.ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.alpha * 0.8})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Draw particle
      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  /**
   * Resize canvas and reinitialize particles
   */
  public resize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;

    // Adjust particle positions to new dimensions
    this.particles.forEach(particle => {
      particle.x = Math.min(particle.x, width);
      particle.y = Math.min(particle.y, height);
    });
  }

  /**
   * Destroy and cleanup
   */
  public destroy(): void {
    this.particles = [];
  }
}
