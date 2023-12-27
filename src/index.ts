import 'normalize.css';
import './style/style.css';
import App from './components/app';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.createElement('canvas');
  const app = new App(canvas);

  app.render();
});
