export type PointerOptions = {
  width: number;
  height: number;
  canvasBackgroundColor?: string;
};

export interface PointerFactory {
  onOut: (e: MouseEvent) => void;
  onDown: (e: MouseEvent) => void;
  onMove: (e: MouseEvent) => void;
  onUp: (e: MouseEvent) => void;
  resize: (props: Pick<PointerOptions, 'width' | 'height'>) => void;
  activate: () => void;
}
