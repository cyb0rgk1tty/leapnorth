/**
 * Configuration for the algorithmic particle background
 * Crimson Red Canadian theme
 */

export const PARTICLE_CONFIG = {
  // Particle counts (adaptive based on device)
  desktop: {
    particleCount: 100,
    connectionDistance: 150,
    cursorRadius: 400,   // Large radius for dramatic attraction
  },
  tablet: {
    particleCount: 60,
    connectionDistance: 120,
    cursorRadius: 300,
  },
  mobile: {
    particleCount: 40,
    connectionDistance: 100,
    cursorRadius: 250,
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
    minSize: 2,      // Increased from 1
    maxSize: 4,      // Increased from 3
    minSpeed: 0.3,
    maxSpeed: 1.0,
    baseAlpha: 0.7,  // Increased from 0.6
    hoverAlpha: 1.0,
  },

  // Connection lines
  connections: {
    maxDistance: 150,        // Increased from 120
    lineWidth: 1,            // Increased from 0.5
    alpha: 0.2,              // Increased from 0.15
    hoverAlpha: 0.5,         // Increased from 0.35
  },

  // Cursor interaction (repulsion-only for fluid flow effect)
  cursor: {
    attractionRadius: 200,         // Not used (no attraction)
    attractionStrength: 0,         // No attraction
    repulsionRadius: 80,           // Not used
    repulsionStrength: 0.5,        // Increased for more noticeable push
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
    enableGlow: false,       // Disabled for performance
    enableTrails: false,
    enableConnections: true,
    adaptiveQuality: true,
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

  // Disabled - let all devices run the animation (performance optimized)
  return false;
}
