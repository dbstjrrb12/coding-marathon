class App {
  ctx: RenderingContext;
  root: HTMLDivElement;
  canvas: HTMLCanvasElement;
  pixelRatio: number;

  constructor(canvas: HTMLCanvasElement) {
    this.root = document.querySelector('div#root');
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    const rootWidth = this.root.clientWidth;
    const rootHeight = this.root.clientHeight;

    this.canvas.width = rootWidth * this.pixelRatio;
    this.canvas.height = rootHeight * this.pixelRatio;
  }

  render() {
    this.root.appendChild(this.canvas);
    this.resize();
  }
}

export default App;
