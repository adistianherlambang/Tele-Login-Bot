import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import LoadingPage from './components/LoadingPage';
import IdPage from './components/IdPage';
import AddressPage from './components/AddressPage';
import SSNInput from './components/SSN';
import UploadPageID from './components/UploadPageID';
import UploadPageLicense from './components/UploadPageLicense';
import ThankyouPage from './components/ThankyouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/identity=type" element={<IdPage />} />
        <Route path='/identity=idcard' element={<UploadPageID/>} /> 
        <Route path='/identity=driverlicense' element={<UploadPageLicense/>} />
        <Route path="/address" element={<AddressPage />} />
        <Route path='/ssn' element={<SSNInput/>} />
        <Route path='/verify' element={<ThankyouPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
