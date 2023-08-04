import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <img src="/image/forgot.png" class="d-block" alt="..." id='forgot'/>
    <form onSubmit={handleSubmit} id='forgot-f'>
      <label>
       <h3 id='forgot1'>Forgot</h3>
       <h5 id='forgot1'>Your Password ?</h5>
        <input type="email" placeholder="Enter Your E-Mail here" value={email}onChange={(e) => setEmail(e.target.value)} id='forgot-i'/>
      </label>
      <button type="submit" id='forgot-b'>Reset Password</button>
    </form>
    </div>
  );
};

export default ForgotPasswordForm;

