import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import App from './Components/App';
// fontawesome
import './style/fontawesome/fontawesome/css/all.min.css';
// bootstrap
import './style/css/bootstrap.min.css';
import './style/css/preloader.min.css';
import './style/css/circle.css';
import './style/css/fm.revealator.jquery.min.css';
// style
import './style/css/style.css';
import './style/css/yellow.css';
// import './style/css/styleswitcher.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

reportWebVitals();
