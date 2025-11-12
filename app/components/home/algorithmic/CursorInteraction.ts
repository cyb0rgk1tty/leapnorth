/**
 * Cursor Interaction Handler
 * Manages mouse and touch events for particle system
 */

import { ParticleSystem } from './ParticleSystem';
import { throttle } from './utils';

export class CursorInteraction {
  private container: HTMLElement;
  private canvas: HTMLCanvasElement;
  private particleSystem: ParticleSystem;
  private cursorX: number = 0;
  private cursorY: number = 0;
  private prevCursorX: number = 0;
  private prevCursorY: number = 0;
  private cursorVelocity: number = 0;
  private isActive: boolean = false;
  private isTouchDevice: boolean = false;

  // Bound event handlers (for cleanup)
  private boundHandleMouseMove: (e: MouseEvent) => void;
  private boundHandleMouseEnter: (e: MouseEvent) => void;
  private boundHandleMouseLeave: () => void;
  private boundHandleTouchStart: (e: TouchEvent) => void;
  private boundHandleTouchMove: (e: TouchEvent) => void;
  private boundHandleTouchEnd: () => void;

  constructor(container: HTMLElement, particleSystem: ParticleSystem, canvas?: HTMLCanvasElement) {
    this.container = container;
    this.canvas = canvas || container as HTMLCanvasElement;
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
      this.container.addEventListener('touchstart', this.boundHandleTouchStart, { passive: true });
      this.container.addEventListener('touchmove', this.boundHandleTouchMove, { passive: true });
      this.container.addEventListener('touchend', this.boundHandleTouchEnd);
      this.container.addEventListener('touchcancel', this.boundHandleTouchEnd);
    } else {
      // Mouse events for desktop
      this.container.addEventListener('mousemove', this.boundHandleMouseMove);
      this.container.addEventListener('mouseenter', this.boundHandleMouseEnter);
      this.container.addEventListener('mouseleave', this.boundHandleMouseLeave);
    }
  }

  /**
   * Remove event listeners
   */
  public detachListeners(): void {
    if (this.isTouchDevice) {
      this.container.removeEventListener('touchstart', this.boundHandleTouchStart);
      this.container.removeEventListener('touchmove', this.boundHandleTouchMove);
      this.container.removeEventListener('touchend', this.boundHandleTouchEnd);
      this.container.removeEventListener('touchcancel', this.boundHandleTouchEnd);
    } else {
      this.container.removeEventListener('mousemove', this.boundHandleMouseMove);
      this.container.removeEventListener('mouseenter', this.boundHandleMouseEnter);
      this.container.removeEventListener('mouseleave', this.boundHandleMouseLeave);
    }
  }

  /**
   * Handle mouse move
   */
  private handleMouseMove(e: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;

    // Calculate cursor velocity
    const dx = newX - this.cursorX;
    const dy = newY - this.cursorY;
    this.cursorVelocity = Math.sqrt(dx * dx + dy * dy);

    this.prevCursorX = this.cursorX;
    this.prevCursorY = this.cursorY;
    this.cursorX = newX;
    this.cursorY = newY;
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
    this.prevCursorX = this.cursorX;
    this.prevCursorY = this.cursorY;
    this.cursorVelocity = 0;
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
      this.prevCursorX = this.cursorX;
      this.prevCursorY = this.cursorY;
      this.cursorVelocity = 0;
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
      const newX = touch.clientX - rect.left;
      const newY = touch.clientY - rect.top;

      // Calculate cursor velocity
      const dx = newX - this.cursorX;
      const dy = newY - this.cursorY;
      this.cursorVelocity = Math.sqrt(dx * dx + dy * dy);

      this.prevCursorX = this.cursorX;
      this.prevCursorY = this.cursorY;
      this.cursorX = newX;
      this.cursorY = newY;
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
   * Update particle system with current cursor position and velocity
   */
  private updateParticleSystem(): void {
    this.particleSystem.setCursor(this.cursorX, this.cursorY, this.isActive, this.cursorVelocity);
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
