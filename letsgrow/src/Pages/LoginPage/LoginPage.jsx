import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import "./LoginPage.css";

const LoginPage = () => { // Rename component to match file name

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Send login credentials to the server
    axios.post('http://localhost:3001/api/login', { email, password })
      .then(response => {
        console.log(response.data);
        // Store the JWT token in local storage or cookies
        localStorage.setItem('token', response.data.token);
        // Redirect to the dashboard or another protected route
        window.location.href = '/dashboard';
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
        setError("Invalid email or password.");
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to LET’S GROW</h1>
      <p className="login-subtitle">Log in to connect, collaborate, and turn ideas into opportunities</p>
      <form className="login-form" onSubmit={handleSubmit}>

        <div className="log-email">
          <input 
          type = "text" 
          id="email" 
          className={`input ${!email ? "email" : "placeholder-active"}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required></input>
          <label htmlFor="email" className="Log-label">E-mail</label>
          <i className="login-email-icon"><ion-icon name="mail"></ion-icon></i> 
        </div>
        
        <div className="log-password">
          <input 
            type={showPassword ? "text" : "password"} 
            id="password" 
            className={`input ${!password? "password" : "placeholder-active"}`} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
            required 
          />
          <label htmlFor="password" className="Log-label">Password</label>
          <i className="login-password-icon"><ion-icon name="key"></ion-icon></i>
          <i 
            className="eye-outline-icon" 
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            <ion-icon name={showPassword ? "eye-off-outline" : "eye-outline"}></ion-icon>
          </i>
          {error.password && <p className="log-error">{error.password}</p>}
        </div>
       
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember"></input>
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="forgot-password"> 
            <a href="./ForgotPassword">Forgot Password</a>
          </div>
        </div>

        {error && <p className="error">{error}</p>}
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage; // Ensure export matches the component name