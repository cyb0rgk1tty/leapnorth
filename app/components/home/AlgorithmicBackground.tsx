"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ParticleSystem } from "./algorithmic/ParticleSystem";
import { CursorInteraction } from "./algorithmic/CursorInteraction";
import { getDeviceConfig, isLowEndDevice, PARTICLE_CONFIG } from "./algorithmic/config";
import { debounce } from "./algorithmic/utils";

/**
 * Algorithmic Background Component
 * Interactive crimson red particle system with cursor interaction
 * Inspired by LeftClick AI hero section
 */
export function AlgorithmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleSystemRef = useRef<ParticleSystem | null>(null);
  const cursorInteractionRef = useRef<CursorInteraction | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLowEnd, setIsLowEnd] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Check if low-end device on mount
  useEffect(() => {
    setIsLowEnd(isLowEndDevice());
  }, []);

  // Check if we should disable the effect
  const shouldDisable = prefersReducedMotion || isLowEnd;

  /**
   * Initialize canvas and particle system
   */
  useEffect(() => {
    // Wait for page to load before initializing
    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  /**
   * Set up particle system
   */
  useEffect(() => {
    if (!isLoaded || shouldDisable || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const config = getDeviceConfig();

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      // Update particle system if it exists
      if (particleSystemRef.current) {
        particleSystemRef.current.resize(rect.width, rect.height);
      }
    };

    // Initial size
    updateCanvasSize();

    // Create particle system with logical dimensions
    const rect = canvas.getBoundingClientRect();
    particleSystemRef.current = new ParticleSystem(canvas, config);
    particleSystemRef.current.resize(rect.width, rect.height);

    // Create cursor interaction handler (listen on container div)
    if (containerRef.current) {
      cursorInteractionRef.current = new CursorInteraction(containerRef.current, particleSystemRef.current, canvas);
    }

    // Animation loop
    let lastFrameTime = 0;
    const targetFPS = PARTICLE_CONFIG.animation.targetFPS;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (!isVisible || !particleSystemRef.current) {
        return;
      }

      const deltaTime = currentTime - lastFrameTime;

      if (deltaTime >= frameInterval) {
        particleSystemRef.current.update();
        particleSystemRef.current.render();
        lastFrameTime = currentTime - (deltaTime % frameInterval);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = debounce(() => {
      updateCanvasSize();
    }, 250);

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (particleSystemRef.current) {
        particleSystemRef.current.destroy();
      }
      if (cursorInteractionRef.current) {
        cursorInteractionRef.current.detachListeners();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, shouldDisable, isVisible]);

  /**
   * Set up intersection observer to pause when off-screen
   * (Performance optimization like LeftClick AI)
   */
  useEffect(() => {
    if (!canvasRef.current || shouldDisable) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(canvasRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shouldDisable]);

  // Fallback for reduced motion or low-end devices
  if (shouldDisable) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background"
        aria-hidden="true"
      />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0" style={{ zIndex: 0 }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
}
