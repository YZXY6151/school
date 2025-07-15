import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import ConfirmPage from './components/ConfirmPage';
import ThankYouPage from './components/ThankYouPage';
import '../../react-test/src/components/main.scss';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    technologies: [],
    comment: ''
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage formData={formData} setFormData={setFormData} />} />
        <Route path="/confirm" element={<ConfirmPage formData={formData} />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
