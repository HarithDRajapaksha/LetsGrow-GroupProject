import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./OTPVerification.css";

const OTPVerification = () => {
  const location = useLocation();
  const email = location.state?.email || "example@gmail.com";

  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    setOtp(new Array(5).fill(""));
    setTimer(60);
    setResendDisabled(true);
  };

  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <p>
        One-time password (OTP) has been sent via Email to{" "}
        <strong>{email}</strong>

      </p>
      <p>Enter the OTP below to verify it.</p>

      <div className="otp-inputs">
        {otp.map((_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      <p className="resend-text">
        Resend OTP in: {timer > 0 ? `00:${timer < 10 ? "0" + timer : timer}` : "00:00"}
      </p>

      <button onClick={handleSubmit} className="verify-btn">
        Verify OTP
      </button>

      <button
        onClick={handleResend}
        className="resend-btn"
        disabled={resendDisabled}
      >
        Resend OTP
      </button>
    </div>
  );
};

export default OTPVerification;
