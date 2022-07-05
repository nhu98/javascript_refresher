import { Functions } from './functions';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
//https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md
// Objects();
Functions();
app.innerHTML = `
  <h1>Hello My Friend</h1>
`;
