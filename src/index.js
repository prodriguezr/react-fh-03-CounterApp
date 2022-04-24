import { createRoot } from 'react-dom/client';
import FirstApp from './FirstApp';

import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(<FirstApp />);
