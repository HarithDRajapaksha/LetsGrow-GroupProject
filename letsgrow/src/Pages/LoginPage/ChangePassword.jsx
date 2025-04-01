import React, { useState } from "react";
import axios from 'axios'; 
import "./ChangePassword.css";

const ChangePassword = () => { 

  const [password, setPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !newpassword) {
      setError("Email and password are required.");
      return;
    }

    
    axios.post('/api/ChangePassword', { password, newpassword })
      .then(response => {
        console.log(response.data);
       
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
        setError("Invalid password.");
      });
  };

  return (
    <div className="login-container">
      <h1 className="Chg-pass-title">RESET PASSWORD</h1>
      <form className="Chg-pass-form" onSubmit={handleSubmit}>

        <div className="chg-password">
          <input 
          type = "text" 
          id="pass" 
          className={`input ${!password ? "password" : "placeholder-active"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required></input>
          <label for="pass" class="chg-label">New Password</label>
          <i className="chg-password-icon"><ion-icon name="key"></ion-icon></i> 
        </div>
        
        <div className="chg-new-password">
          <input 
          type = "text" 
          id="new pass" 
          className={`input ${!newpassword? "newpassword" : "placeholder-active"}`}
          value={password} 
          onChange={(e) => setNewPassword(e.target.value)}
          required></input>
          <label for="new pass" class="chg-label"> Confirm Password</label>
          <i class="chg-password-icon"><ion-icon name="key"></ion-icon></i> 
        </div>
       
        {error && <p className="error">{error}</p>}
        <button type="submit" className="chg-pass-confirm-button">Confirm</button>
      </form>
    </div>
  );
};

export default ChangePassword; 
