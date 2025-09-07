import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter your username and password');
      return;
    }

    try {
      const response = await fetch('https://klickks-qtp1.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) throw new Error('Failed to login');

      const data = await response.json();
      const token = data.token;


      Cookies.set("username", username, { expires: 1 });
      Cookies.set("token", token, { expires: 1 });

      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="card">
      <div className="container">
        <div className="form">
          <div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D560BAQEJlvQTqc_SfA/company-logo_200_200/B56ZYFo15kGUAI-/0/1743851315244?e=1759968000&v=beta&t=r6Tm5VDEvZ3bRuhHrT7vJtGFHFk9wjFADZ-wPVUkU-s" 
              alt="Klickks Logo" 
              style={{ width: 50 }} 
            />
          </div>
          <h3>Welcome Back!</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Login</button>
            {error && <div className="error-message">{error}</div>}
          </form>
          <div className="additional-links">
            <a href="/forgotpassword">Forgot Password?</a>
            <span> | </span>
            <a href="/register">Sign Up</a>
          </div>
        </div>

        <div className="ad-section-login"></div>
      </div>
    </div>
  );
};

export default Login;
