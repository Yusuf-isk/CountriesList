import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Detail from './Detail'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';


const router = 
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/detail/:name' element={<Detail />} />
    </Routes>
  </Router>

ReactDOM.render(router,
  document.getElementById('root')
);

reportWebVitals();
