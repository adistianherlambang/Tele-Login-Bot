import React, { useState, useRef } from 'react';
import '../styles/thanyou-page.css';

function ThankyouPage() {
  return(
    <div className='container-verify-page'>
      <div className='ver-container'>
        <div className='icon-container'>
          <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle className="checkmark-circle" cx="26" cy="26" r="25" />
          <path className="checkmark-check" fill="none" d="M14 27l7 7 16-16" />
        </svg>

        </div>
        <div className='title-container'>
          <div className='title'>
            <span>Thank You!</span> We Are Reviewing Your Identity Submission
          </div>
          <div className='sub-title'>
            Thank you for submitting your information. We will begin verifying your identity as quickly as possible and will keep you informed throughout the process.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankyouPage;