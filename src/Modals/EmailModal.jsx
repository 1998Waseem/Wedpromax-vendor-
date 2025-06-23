import React, { useState } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_BASE_URL;

const Emailmodal = ({ show, onHide, onVerify }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage('');
      setMessageType('');
      return;
    }

    setIsLoading(true);
    setErrors({});
    setMessage('');
    setMessageType('');

    try {
      const response = await axios.post(`${baseURL}/api/Auth/ForgetPassword`, { email });
      console.log("OTP sent response:", response.data);

      setMessage("OTP sent successfully!");
      setMessageType("success");

      setTimeout(() => {
        setEmail('');
        setIsLoading(false);
        onHide();    // Close current modal
        onVerify();  // Open next modal
      }, 800); // Short delay for UX
    } catch (error) {
      const errMsg = error?.response?.data?.message || "Failed to send OTP.";
      setMessage(errMsg);
      setMessageType("error");
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }

    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  const handleClose = () => {
    setEmail('');
    setErrors({});
    setMessage('');
    setMessageType('');
    setIsLoading(false);
    onHide();
  };

  if (!show) return null;

  return (
    <div>
      <div
        className={`modal fade ${show ? 'show d-block' : ''}`}
        tabIndex="-1"
        style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reset Your Password</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                disabled={isLoading}
              ></button>
            </div>

            <div className="modal-body">
              {message && (
                <div className={`alert alert-${messageType === 'success' ? 'success' : 'danger'} alert-dismissible fade show mb-3`} role="alert">
                  <i className={`bi bi-${messageType === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2`}></i>
                  {message}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setMessage('')}
                    aria-label="Close"
                  ></button>
                </div>
              )}

              <p style={{ fontSize: "14px", fontWeight: "400" }}>
                A code will be sent to your email. Please enter your email to receive the code.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : email && !errors.email ? 'is-valid' : ''}`}
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email address"
                    disabled={isLoading}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      <i className="bi bi-exclamation-circle me-1"></i>
                      {errors.email}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-envelope me-2"></i>
                      Send the code
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};


export default Emailmodal;
