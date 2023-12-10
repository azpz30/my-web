import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/hp';
// import FooterBar from './components/FooterBar';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossOrigin="anonymous"
/>

function App () {

  return (
    <Router>
    <div className='border'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;