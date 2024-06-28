import React, { useState } from 'react';
import './ParticipantDetails.css';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'];

const ParticipantDetails = () => {
  const [step, setStep] = useState(0);
  const [participant, setParticipant] = useState({ team: '', name: '', sex: '', email: '', drinkingName: '' });
  const [confirmation, setConfirmation] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipant(prev => ({ ...prev, [name]: value }));
  };

  const copyEmail = () => {
    var email = "watermelonpartysplit@gmail.com"; // Replace with your email address
    navigator.clipboard.writeText(email)
}

  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (step === 1) { // Validate name at step 1
      const nameParts = participant.name.trim().split(/\s+/);
      if (nameParts.length !== 2) {
        setNameError('Please enter your first and last name.');
        return;
      }
      setNameError('');
    } else if (step === 2) { // Validate email at step 2
      if (!validateEmail(participant.email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      setEmailError('');
    }
    setStep(prev => prev + 1);
  };

  const handleFinish = () => {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const confirmationCode = `${randomFruit}-${randomNumber}`;
    setConfirmation(confirmationCode);
    setStep(4);
  };

  return (
    <div className="participant-details">
      {step === 0 && (
        <div className="content">
          <h2>Select your team</h2>
          <div className="button-container">
            <button className="selection-button" onClick={() => { handleChange({ target: { name: 'team', value: 'hostel mint' } }); setStep(1); }}>Hostel Mint</button>
            <button className="selection-button" onClick={() => { handleChange({ target: { name: 'team', value: 'team beach' } }); setStep(1); }}>Beach Hostel</button>
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="content">
          <h2>Your first and last name</h2>
          <input type="text" name="name" value={participant.name} onChange={handleChange} />
          {nameError && <p className="error-message">{nameError}</p>}
          <div className="button-container">
            <button className="selection-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="content">
          <h2>What's your email, {participant.name.split(' ')[0]}?</h2>
          <input type="email" name="email" value={participant.email} onChange={handleChange} />
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="button-container">
            <button className="selection-button" onClick={() => setStep(1)}>Back</button>
            <button className="selection-button" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="content">
          <h2>What's your drinking name?</h2>
          <p>If you don't have a drinking name, invent one; how would your friends call you when you drink?</p>
          <input type="text" name="drinkingName" value={participant.drinkingName} onChange={handleChange} />
          <div className="button-container">
            <button className="selection-button" onClick={() => setStep(2)}>Back</button>
            <button className="selection-button" onClick={handleFinish}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="content">
          <h2>Please proceed to the Front Desk to make the payment.</h2>
        <p><b>The price is 9.99 euros per person.</b> </p>
        <p><b>We accept cash only.</b> </p> 
                <p>Show this screen to the front desk person to complete the signup and make the payment.</p>
          <p><strong>Name:</strong> {participant.name}</p>
          <p><strong>Email:</strong> {participant.email}</p>
          <p><strong>Drinking Name:</strong> {participant.drinkingName}</p>
          <p><strong>Confirmation Code:</strong> {confirmation}</p>
        <p>If you were signed up on a beach, please send this screenshot to:</p>
        <p><strong> WATERMELONPARTYSPLIT@GMAIL.COM </strong></p>
        <div> className="button-container">
      <button className="selection-button" onclick="copyEmail()">Copy Email</button>
        </div>
        <p>You will receive the confirmation email shortly after the payment to the promoter.</p>
          <div className="button-container">
            <button className="selection-button" onClick={() => window.location.href = 'https://www.google.com'}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantDetails;
