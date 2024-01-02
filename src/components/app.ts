import CirclePoint from './pointer/circle';
import Pointer from './pointer/pointer';

class App {
  root: HTMLDivElement;
  canvas: HTMLCanvasElement;
  pixelRatio: number;
  pointer: Pointer;

  constructor(canvas: HTMLCanvasElement) {
    this.root = document.querySelector('div#root');
    this.canvas = canvas;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.pointer = new Pointer(
      new CirclePoint(this.canvas, {
        width: 20,
        height: 20,
        canvasBackgroundColor: 'white',
      })
    );

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    const rootWidth = this.root.clientWidth;
    const rootHeight = this.root.clientHeight;

    this.canvas.width = rootWidth * this.pixelRatio;
    this.canvas.height = rootHeight * this.pixelRatio;
    this.pointer.activate();
  }

  render() {
    this.root.appendChild(this.canvas);
    this.resize();
  }
}

export default App;
