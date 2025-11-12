/**
 * Cursor Interaction Handler
 * Manages mouse and touch events for particle system
 */

import { ParticleSystem } from './ParticleSystem';
import { throttle } from './utils';

export class CursorInteraction {
  private canvas: HTMLCanvasElement;
  private particleSystem: ParticleSystem;
  private cursorX: number = 0;
  private cursorY: number = 0;
  private isActive: boolean = false;
  private isTouchDevice: boolean = false;

  // Bound event handlers (for cleanup)
  private boundHandleMouseMove: (e: MouseEvent) => void;
  private boundHandleMouseEnter: (e: MouseEvent) => void;
  private boundHandleMouseLeave: () => void;
  private boundHandleTouchStart: (e: TouchEvent) => void;
  private boundHandleTouchMove: (e: TouchEvent) => void;
  private boundHandleTouchEnd: () => void;

  constructor(canvas: HTMLCanvasElement, particleSystem: ParticleSystem) {
    this.canvas = canvas;
    this.particleSystem = particleSystem;
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Bind event handlers
    this.boundHandleMouseMove = throttle(this.handleMouseMove.bind(this), 16); // ~60fps
    this.boundHandleMouseEnter = this.handleMouseEnter.bind(this);
    this.boundHandleMouseLeave = this.handleMouseLeave.bind(this);
    this.boundHandleTouchStart = this.handleTouchStart.bind(this);
    this.boundHandleTouchMove = throttle(this.handleTouchMove.bind(this), 16);
    this.boundHandleTouchEnd = this.handleTouchEnd.bind(this);

    this.attachListeners();
  }

  /**
   * Attach event listeners
   */
  private attachListeners(): void {
    if (this.isTouchDevice) {
      // Touch events for mobile
      this.canvas.addEventListener('touchstart', this.boundHandleTouchStart, { passive: true });
      this.canvas.addEventListener('touchmove', this.boundHandleTouchMove, { passive: true });
      this.canvas.addEventListener('touchend', this.boundHandleTouchEnd);
      this.canvas.addEventListener('touchcancel', this.boundHandleTouchEnd);
    } else {
      // Mouse events for desktop
      this.canvas.addEventListener('mousemove', this.boundHandleMouseMove);
      this.canvas.addEventListener('mouseenter', this.boundHandleMouseEnter);
      this.canvas.addEventListener('mouseleave', this.boundHandleMouseLeave);
    }
  }

  /**
   * Remove event listeners
   */
  public detachListeners(): void {
    if (this.isTouchDevice) {
      this.canvas.removeEventListener('touchstart', this.boundHandleTouchStart);
      this.canvas.removeEventListener('touchmove', this.boundHandleTouchMove);
      this.canvas.removeEventListener('touchend', this.boundHandleTouchEnd);
      this.canvas.removeEventListener('touchcancel', this.boundHandleTouchEnd);
    } else {
      this.canvas.removeEventListener('mousemove', this.boundHandleMouseMove);
      this.canvas.removeEventListener('mouseenter', this.boundHandleMouseEnter);
      this.canvas.removeEventListener('mouseleave', this.boundHandleMouseLeave);
    }
  }

  /**
   * Handle mouse move
   */
  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    this.cursorX = e.clientX - rect.left;
    this.cursorY = e.clientY - rect.top;
    this.updateParticleSystem();
  }

  /**
   * Handle mouse enter
   */
  private handleMouseEnter(e: MouseEvent): void {
    this.isActive = true;
    const rect = this.canvas.getBoundingClientRect();
    this.cursorX = e.clientX - rect.left;
    this.cursorY = e.clientY - rect.top;
    this.updateParticleSystem();
  }

  /**
   * Handle mouse leave
   */
  private handleMouseLeave(): void {
    this.isActive = false;
    this.updateParticleSystem();
  }

  /**
   * Handle touch start
   */
  private handleTouchStart(e: TouchEvent): void {
    if (e.touches.length > 0) {
      this.isActive = true;
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      this.cursorX = touch.clientX - rect.left;
      this.cursorY = touch.clientY - rect.top;
      this.updateParticleSystem();
    }
  }

  /**
   * Handle touch move
   */
  private handleTouchMove(e: TouchEvent): void {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = this.canvas.getBoundingClientRect();
      this.cursorX = touch.clientX - rect.left;
      this.cursorY = touch.clientY - rect.top;
      this.updateParticleSystem();
    }
  }

  /**
   * Handle touch end
   */
  private handleTouchEnd(): void {
    this.isActive = false;
    this.updateParticleSystem();
  }

  /**
   * Update particle system with current cursor position
   */
  private updateParticleSystem(): void {
    this.particleSystem.setCursor(this.cursorX, this.cursorY, this.isActive);
  }

  /**
   * Get current cursor position
   */
  public getCursorPosition(): { x: number; y: number; active: boolean } {
    return {
      x: this.cursorX,
      y: this.cursorY,
      active: this.isActive,
    };
  }
}
