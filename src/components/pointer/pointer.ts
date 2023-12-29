import { PointerFactory, PointerOptions } from '../../types/components/pointer';

class Pointer {
  private pointer: PointerFactory;

  constructor(pointer: PointerFactory) {
    this.pointer = pointer;
  }

  resize(props: Pick<PointerOptions, 'width' | 'height'>) {
    this.pointer.resize(props);
  }

  setShape(pointer: PointerFactory) {
    this.pointer = pointer;
  }

  activate() {
    this.pointer.activate();
  }
}

export default Pointer;
