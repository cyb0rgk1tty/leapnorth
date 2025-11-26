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
  private useDocumentListener: boolean = false;

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
    this.useDocumentListener = true;  // Use document for reliable event capture

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
    // Always attach mouse events when using document listener
    // (handles hybrid devices like touchscreen laptops)
    if (this.useDocumentListener) {
      // Listen on document for full coverage (works even when cursor over content)
      document.addEventListener('mousemove', this.boundHandleMouseMove);
      // Note: mouseenter/mouseleave not needed - bounds checking done in handleMouseMove
    } else if (!this.isTouchDevice) {
      // Listen on container only for non-touch devices
      this.container.addEventListener('mousemove', this.boundHandleMouseMove);
      this.container.addEventListener('mouseenter', this.boundHandleMouseEnter);
      this.container.addEventListener('mouseleave', this.boundHandleMouseLeave);
    }

    // Also attach touch events for touch-capable devices
    if (this.isTouchDevice) {
      this.container.addEventListener('touchstart', this.boundHandleTouchStart, { passive: true });
      this.container.addEventListener('touchmove', this.boundHandleTouchMove, { passive: true });
      this.container.addEventListener('touchend', this.boundHandleTouchEnd);
      this.container.addEventListener('touchcancel', this.boundHandleTouchEnd);
    }
  }

  /**
   * Remove event listeners
   */
  public detachListeners(): void {
    // Remove mouse listeners
    if (this.useDocumentListener) {
      document.removeEventListener('mousemove', this.boundHandleMouseMove);
    } else if (!this.isTouchDevice) {
      this.container.removeEventListener('mousemove', this.boundHandleMouseMove);
      this.container.removeEventListener('mouseenter', this.boundHandleMouseEnter);
      this.container.removeEventListener('mouseleave', this.boundHandleMouseLeave);
    }

    // Remove touch listeners
    if (this.isTouchDevice) {
      this.container.removeEventListener('touchstart', this.boundHandleTouchStart);
      this.container.removeEventListener('touchmove', this.boundHandleTouchMove);
      this.container.removeEventListener('touchend', this.boundHandleTouchEnd);
      this.container.removeEventListener('touchcancel', this.boundHandleTouchEnd);
    }
  }

  /**
   * Handle mouse move
   */
  private handleMouseMove(e: MouseEvent): void {
    // Use container rect for accurate coordinates (not canvas rect)
    const rect = this.container.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;

    // Check if cursor is within bounds (when using document listener)
    if (this.useDocumentListener) {
      const isInBounds = newX >= 0 && newX <= rect.width && newY >= 0 && newY <= rect.height;
      this.isActive = isInBounds;
    }

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
    const rect = this.container.getBoundingClientRect();
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
      const rect = this.container.getBoundingClientRect();
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
      const rect = this.container.getBoundingClientRect();
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
