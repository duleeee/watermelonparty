import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParticipantDetails.css';

const ParticipantDetails = () => {
  const [participant, setParticipant] = useState({
    firstName: '',
    lastName: '',
    drinkingName: '',
    email: '',
    date: '',
    promoCode: ''
  });
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [price, setPrice] = useState('15.99');
  const [revolutLink, setRevolutLink] = useState('https://revolut.me/r/bOk1DoS38D'); // Default link for €15.99

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipant(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !participant.firstName) {
      setNameError('First name is required');
      return;
    }
    if (step === 3 && !/\S+@\S+\.\S+/.test(participant.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setNameError('');
    setEmailError('');
    setStep(prev => prev + 1);
  };

  const updatePrice = () => {
    const { promoCode } = participant;
    if (/apple|orange|banana|grape|watermelon|pineapple|mango|kiwi|peach|strawberry/i.test(promoCode)) {
      setPrice('12.99');
      setRevolutLink('https://revolut.me/r/YWRAO1Ucb3');
    } else if (/hostel/i.test(promoCode)) {
      setPrice('9.99');
      setRevolutLink('https://revolut.me/r/XtaDLmiDQ1');
    } else if (/antonio10/i.test(promoCode)) {
      setPrice('6.99');
      setRevolutLink('https://revolut.me/r/nFJ2FWDzXR');
    } else if (/dusan33/i.test(promoCode)) {
      setPrice('0');
      setRevolutLink(''); // You can set a default link or handle differently for €0 case
    } else {
      setPrice('15.99');
      setRevolutLink('https://revolut.me/r/bOk1DoS38D');
    }
  };

  const handleFinish = () => {
    alert(`Please proceed to the front desk of the Hostel Mint or the Hostel Beach to pay for the event. The price is ${price} euros per person for hostel guests. Please show them this screen or the confirmation email we have just sent you.\nName: ${participant.firstName} ${participant.lastName}\nEmail: ${participant.email}\nDrinking Name: ${participant.drinkingName}`);
    setStep(0);
    setParticipant({
      firstName: '',
      lastName: '',
      drinkingName: '',
      email: '',
      date: '',
      promoCode: ''
    });
    setPrice('15.99');
    setRevolutLink('https://revolut.me/r/bOk1DoS38D'); // Reset to default link
  };

  return (
    <div className="participant-details">
      {step === 0 && (
        <div className="content">
          <h2>Are you 18+?</h2>
          <div className="button-container">
            <button className="selection-button" onClick={() => setStep(1)}>Yes</button>
            <button className="selection-button" onClick={() => window.location.href = 'https://www.google.com'}>No</button>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="content">
          <h2>First name:</h2>
          <input type="text" name="firstName" value={participant.firstName} onChange={handleChange} style={{ textTransform: 'uppercase' }} />
          {nameError && <p className="error-message">{nameError}</p>}
          <h2>Last name:</h2>
          <input type="text" name="lastName" value={participant.lastName} onChange={handleChange} style={{ textTransform: 'uppercase' }} />
          <div className="button-container">
            <button className="selection-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="content">
          <h2>What's your drinking name?</h2>
          <p>If you don't have a drinking name, invent one; how would your friends call you when you drink?</p>
          <input type="text" name="drinkingName" value={participant.drinkingName} onChange={handleChange} style={{ textTransform: 'uppercase' }} />
          <div className="button-container">
            <button className="selection-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="content">
          <h2>Your email:</h2>
          <input type="email" name="email" value={participant.email} onChange={handleChange} style={{ textTransform: 'uppercase' }} />
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="button-container">
            <button className="selection-button" onClick={() => setStep(2)}>Back</button>
            <button className="selection-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="content">
          <h2>Available dates:</h2>
          <div className="button-container">
            <button className="selection-button" onClick={() => { handleChange({ target: { name: 'date', value: formatDate(today) } }); handleNext(); }}>{formatDate(today)}</button>
            <button className="selection-button" onClick={() => { handleChange({ target: { name: 'date', value: formatDate(tomorrow) } }); handleNext(); }}>{formatDate(tomorrow)}</button>
            <button className="selection-button" onClick={() => { handleChange({ target: { name: 'date', value: formatDate(dayAfterTomorrow) } }); handleNext(); }}>{formatDate(dayAfterTomorrow)}</button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="content">
          <h2>Enter the Promo Code:</h2>
          <input type="text" name="promoCode" value={participant.promoCode} onChange={handleChange} />
          <button className="selection-button" onClick={updatePrice}>Enter</button>
          <div className="button-container">
            <button className="selection-button" onClick={() => window.location.href = revolutLink}>Pay €{price}</button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="content">
          <h2>Confirmation</h2>
          <p>Thank you for signing up! Your confirmation details are below:</p>
          <p><strong>Name:</strong> {participant.firstName} {participant.lastName}</p>
          <p><strong>Email:</strong> {participant.email}</p>
          <p><strong>Drinking Name:</strong> {participant.drinkingName}</p>
          <p><strong>Promo Code:</strong> {participant.promoCode}</p>
          <p><strong>Revolut Payment Details:</strong> Payment of €{price} made on {new Date().toLocaleString()}</p>
          <p>Please proceed to the front desk of the Hostel Mint or the Hostel Beach to pay for the event. The price is 12 euros per person for hostel guests. Please show them this screen or the confirmation email we have just sent you.</p>
          <div className="button-container">
            <button className="selection-button" onClick={handleFinish}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantDetails;


// verzija sa revolut bes sheets
