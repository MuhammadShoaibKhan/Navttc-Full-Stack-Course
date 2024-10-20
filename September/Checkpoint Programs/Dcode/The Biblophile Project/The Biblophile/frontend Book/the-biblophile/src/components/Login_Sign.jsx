import React, { useState } from 'react';

function Login_Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="container mt-5" >
      <h2 style={{ color: 'GrayText', marginTop: "10px" , marginBottom:"10px", fontSize:"3rem", fontFamily:"serif"}}>Login / Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
             className='form-control'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className='btn btn-dark' style={{textAlign:'center'}}>Submit</button>
      </form>
    </div>
  );
}

export default Login_Sign;
