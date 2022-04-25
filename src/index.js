import { createRoot } from 'react-dom/client';

import CounterApp from './CounterApp';

import './index.css';

const root = createRoot(document.querySelector('#root'));

//root.render(<FirstApp greeting='Hola, soy Ironman' />);
root.render(<CounterApp initialValue={2} />);
