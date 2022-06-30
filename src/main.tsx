import { Objects } from './objects';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
Objects();
app.innerHTML = `
  <h1>Hello My Friend</h1>
`;
