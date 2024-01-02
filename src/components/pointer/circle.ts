import { PointerOptions, PointerFactory } from '../../types/components/pointer';

class CirclePoint implements PointerFactory {
  private isDrawing = false;
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private options: PointerOptions;

  constructor(canvas: HTMLCanvasElement, options: PointerOptions) {
    this.canvas = canvas;
    this.options = options;
    this.ctx = canvas.getContext('2d', {
      willReadFrequently: true,
      desynchronized: true,
    });
  }

  activate() {
    this.ctx.fillStyle = this.options.canvasBackgroundColor || 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.addEventListeners();
  }

  addEventListeners() {
    this.canvas.addEventListener('mousedown', this.onDown.bind(this));
    this.canvas.addEventListener('pointermove', this.onMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onUp.bind(this));
    this.canvas.addEventListener('mouseout', this.onOut.bind(this));
  }

  onDown(e: MouseEvent) {
    this.isDrawing = true;

    this.draw(
      e.clientX - this.canvas.getBoundingClientRect().left,
      e.clientY - this.canvas.getBoundingClientRect().top,
      10
    );
  }

  onMove(e: MouseEvent) {
    if (!this.isDrawing) return;

    this.draw(
      e.clientX - this.canvas.getBoundingClientRect().left,
      e.clientY - this.canvas.getBoundingClientRect().top,
      10
    );

    window.requestAnimationFrame(() => this.onMove.call(this, e));
  }

  onUp() {
    this.isDrawing = false;
  }

  onOut() {
    this.isDrawing = false;
  }

  draw(mouseX: number, mouseY: number, radius: number) {
    this.ctx.globalCompositeOperation = 'destination-out';

    this.ctx.beginPath();
    this.ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI, false);
    this.ctx.fill();
  }

  resize({ width, height }: Pick<PointerOptions, 'width' | 'height'>) {
    this.options.width = width;
    this.options.height = height;
  }
}

export default CirclePoint;
