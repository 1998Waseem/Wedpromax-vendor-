import React, { useState } from "react";
import signupimg from "../src/assets/images/signupimg.png";
import { Eye, EyeOff } from "lucide-react";
import "./login.css";
import apple from "../src/assets/icons/apple.svg";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import google from "../src/assets/icons/google.svg";
import fb from "../src/assets/icons/fb.svg";
// import OtpInput from "react-otp-input";
import AxiosClient from "../src/api/AxiosClient";
import { Link, useNavigate } from "react-router";
import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
import Otpinput from "./Modals/Otpinput";
import EmailModal from "./Modals/emailmodal"
export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showConfirmpasswordModal, setshowConfirmpasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState(""); // success or error
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const response = await axios.post(`${baseURL}/api/Auth/GoogleLogin`, { token });

      console.log("Google login successful:", response.data);

      setFormMessage("Login successful!");
      setFormStatus("success");

      navigate('/analytics');
    } catch (error) {
      const errMsg = error?.response?.data?.message || "Google login failed.";
      setFormMessage(errMsg);
      setFormStatus("error");
    }
  };

  const handleGoogleLoginError = () => {
    setFormMessage("Google sign-in was unsuccessful. Try again.");
    setFormStatus("error");
  };


  const handleForgotPassword = () => {
    setShowEmailModal(true);
  };

  const handleEmailVerify = (email) => {
    setResetEmail(email);
    setShowEmailModal(false);
    setShowPasswordModal(true);
    console.log('Email verification for:', email);
  };

  const handlePasswordReset = (formData) => {
    console.log('Password reset for:', resetEmail, formData);
    setShowPasswordModal(false);
    alert('Password reset successful!');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };


  const logindata = { email, password };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormMessage("");
      setFormStatus("");
    } else {
      setErrors({});
      try {
        const response = await AxiosClient.post('/Auth/login', logindata);
        console.log("Logged-in User is:", response.data);

        setFormMessage("Login successful!");
        setFormStatus("success");
        setEmail("");
        setPassword("");
        navigate("/analytics");
      } catch (error) {
        const errMsg = error?.response?.data?.message || "Login failed.";
        setFormStatus("error");

        if (errMsg.includes("Email")) {
          setErrors({ email: "Email is not registered." });
        } else if (errMsg.includes("Password")) {
          setErrors({ password: "Password is incorrect." });
        } else {
          setFormMessage(errMsg);
        }
      }
    }
  };

  const handleVerifyEmail = () => {
    if (resetEmail.trim() !== "") {
      setShowModal(false);
      setShowCodeModal(true);
    } else {
      alert("Please enter your email.");
    }
  };

  const handleCodeVerify = () => {
    console.log("Verifying code:", otp);
    // Add your verification logic here

    setShowCodeModal(false);
    setshowConfirmpasswordModal(true);
  };

  return (
    <div className="container p-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="row g-0">
        {/* Left Image */}
        <div className="col-lg-6 d-none d-lg-block">
          <div className="h-100 position-relative">
            <img
              src={signupimg}
              alt="Elegant table setting"
              className="img-fluid rounded-start h-100 w-100 object-fit-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Right Form */}
        <div className="col-lg-6 col-md-12">
          <div className="p-4 p-md-5 d-flex flex-column justify-content-center h-100">


            {/* Heading */}
            <h1 className="fs-2 fw-bold mb-4">Log in as Vendor</h1>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {formMessage && (
                <div className={`alert ${formStatus === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                  {formMessage}
                </div>
              )}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control py-2 ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control py-2 ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 end-0 translate-middle-y bg-transparent border-0 text-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                </div>
              </div>

              {/* Forgot Password */}
              <div className="mb-4">
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-dark small p-0"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button to="/" type="submit" className="btn btn-primary w-100 py-2 mb-3">
                Log in
              </button>

              {/* Signup link */}
              <div className="text-center mb-4">
                <span>Don't have an account? </span>
                <Link to='/signup' className="text-decoration-none text-primary">
                  Sign Up
                </Link>
              </div>

              {/* Social login */}
              <div className="d-flex align-items-center mb-4">
                <div className="flex-grow-1 border-bottom"></div>
                <span className="px-3 text-secondary small">Or Sign up with</span>
                <div className="flex-grow-1 border-bottom"></div>
              </div>
              <div className="d-flex justify-content-center gap-4">
                <img src={apple} alt="Apple" className="social-icon" />
                {/* <img src={google} alt="Google" className="social-icon" /> */}
                <GoogleOAuthProvider clientId="202618165957-6nj8ausi6fd6pe4ep1040k4qj79b082m.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginError}
                  />
                </GoogleOAuthProvider>
                <img src={fb} alt="Facebook" className="social-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reset Your Password</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A code will be sent to your email. Please enter your email to receive the code.
                </p>
                <label className="mb-2">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100" onClick={handleVerifyEmail}>
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Code Modal */}
      {showCodeModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reset Your Password</h5>
                <button type="button" className="btn-close" onClick={() => setShowCodeModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Check your email for a 4-Digit OTP Verification Code</p>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  isInputNum
                  shouldAutoFocus
                  inputStyle={{
                    width: '3rem',
                    height: '3rem',
                    margin: '0 0.5rem',
                    fontSize: '1.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                  containerStyle={{ justifyContent: 'center' }}
                />
                <p className="mt-4">Send Code again 00:51</p>
                <p>
                  Didn’t receive the code?{" "}
                  <Link style={{ textDecoration: "none" }}>Re-send Code</Link>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100" onClick={handleCodeVerify}>
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Password Modal */}
      {showConfirmpasswordModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Reset Your Password</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setshowConfirmpasswordModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Please create a new password</p>
                <label className="form-label">New Password</label>
                <input type="password" className="form-control mb-3" placeholder="Enter new password" />

                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm new password" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100">
                  Reset Your Password
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Email Verification Modal */}
      <EmailModal
        show={showEmailModal}
        onHide={() => setShowEmailModal(false)}
        onVerify={handleEmailVerify}
      />

      {/* Password Reset Modal */}
      <Otpinput
        show={showPasswordModal}
        onHide={() => setShowPasswordModal(false)}
        email={resetEmail}
        onSubmit={handlePasswordReset}
      />
    </div>
  );
}




