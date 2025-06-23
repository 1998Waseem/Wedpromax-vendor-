import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_BASE_URL;

const CustomOtpInput = ({ value, onChange, numInputs = 4 }) => {
  const [otp, setOtp] = useState(new Array(numInputs).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    onChange(otp.join(''));
  }, [otp, onChange]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    const numbers = paste.replace(/[^0-9]/g, '').split('').slice(0, numInputs);
    const newOtp = [...otp];
    numbers.forEach((num, idx) => {
      if (idx < numInputs) {
        newOtp[idx] = num;
      }
    });
    setOtp(newOtp);
    const nextIndex = Math.min(numbers.length, numInputs - 1);
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  return (
    <div className="d-flex justify-content-center gap-2">
      {otp.map((data, index) => (
        <input
          key={index}
          ref={(el) => inputRefs.current[index] = el}
          className="form-control text-center"
          type="text"
          maxLength="1"
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          style={{
            width: '50px',
            height: '50px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        />
      ))}
    </div>
  );
};

const Otpinput = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!otp || otp.length !== 4) {
      newErrors.otp = 'Please enter a valid 4-digit OTP.';
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormMessage('');
      setFormStatus('');
    } else {
      setErrors({});
      try {
        const response = await axios.post(`${baseURL}/api/Auth/ResetPassword`, {
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          otp: otp
        });

        console.log("Reset password response:", response.data);
        setFormMessage('Password reset successful!');
        setFormStatus('success');
        setFormData({ email: '', password: '', confirmPassword: '' });
        setOtp('');
        onHide();
      } catch (error) {
        const errMsg = error?.response?.data?.message || 'Password reset failed.';
        setFormStatus('error');
        if (errMsg.toLowerCase().includes('otp')) {
          setErrors({ otp: 'Invalid or expired OTP.' });
        } else if (errMsg.toLowerCase().includes('email')) {
          setErrors({ email: 'Invalid email provided.' });
        } else {
          setFormMessage(errMsg);
        }
      }
    }
  };

  return (
    <div>
      <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: show ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Reset Password</h5>
              <button type="button" className="btn-close" onClick={onHide}></button>
            </div>
            <div>
              <div className="modal-body">
                {formStatus && (
                  <div className={`alert ${formStatus === 'success' ? 'alert-success' : 'alert-danger'}`}>
                    {formMessage}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>
                <div className="mb-3">
                  <label className="form-label">OTP</label>
                  <CustomOtpInput value={otp} onChange={setOtp} numInputs={4} />
                  {errors.otp && <div className="text-danger mt-1">{errors.otp}</div>}
                  <div className="form-text text-center mt-2">
                    Enter the 4-digit code sent to your email
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onHide}>
                  Cancel
                </button>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otpinput;
