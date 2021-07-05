import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageNav from './PageNav';
import PageHead from './PageHead'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
 <>
 <BrowserRouter>
 <App/>
 </BrowserRouter>

 </>,
  document.getElementById('root')
);
