/**
 * Configuration for the algorithmic particle background
 * Crimson Red Canadian theme
 */

export const PARTICLE_CONFIG = {
  // Particle counts (adaptive based on device)
  desktop: {
    particleCount: 3000,
    connectionDistance: 120,
    cursorRadius: 200,
  },
  tablet: {
    particleCount: 2000,
    connectionDistance: 100,
    cursorRadius: 150,
  },
  mobile: {
    particleCount: 1000,
    connectionDistance: 80,
    cursorRadius: 120,
  },

  // Colors (Crimson Red theme)
  colors: {
    primary: '#DC143C',      // Crimson Red
    secondary: '#B01030',    // Dark Crimson
    glow: '#E84A5F',         // Light Crimson
    background: '#0a0a0a',   // Deep Black
  },

  // Particle properties
  particle: {
    minSize: 1,
    maxSize: 3,
    minSpeed: 0.2,
    maxSpeed: 0.8,
    baseAlpha: 0.6,
    hoverAlpha: 0.9,
  },

  // Connection lines
  connections: {
    maxDistance: 120,        // Max distance to draw connection
    lineWidth: 0.5,
    alpha: 0.15,
    hoverAlpha: 0.35,
  },

  // Cursor interaction
  cursor: {
    attractionRadius: 200,
    attractionStrength: 0.03,
    repulsionStrength: 0.02,
    speedMultiplier: 1.5,
    colorShiftIntensity: 0.3,
  },

  // Animation
  animation: {
    targetFPS: 60,
    trailLength: 3,          // Frames of particle history
  },

  // Performance
  performance: {
    enableGlow: true,
    enableTrails: false,     // Disable on mobile
    enableConnections: true,
    adaptiveQuality: true,   // Reduce quality if FPS drops
  },
} as const;

/**
 * Get device-specific configuration
 */
export function getDeviceConfig() {
  if (typeof window === 'undefined') {
    return PARTICLE_CONFIG.desktop;
  }

  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  if (isMobile) return PARTICLE_CONFIG.mobile;
  if (isTablet) return PARTICLE_CONFIG.tablet;
  return PARTICLE_CONFIG.desktop;
}

/**
 * Check if device is low-end
 */
export function isLowEndDevice(): boolean {
  if (typeof navigator === 'undefined') return false;

  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 4;

  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory || 4;

  return cores <= 2 || memory <= 2;
}
