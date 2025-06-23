import React, { useState } from "react";
import signupimg from "../src/assets/images/signupimg.png";
import { Eye, EyeOff } from "lucide-react";
import "./login.css";
import apple from "../src/assets/icons/apple.svg";
import google from "../src/assets/icons/google.svg";
import fb from "../src/assets/icons/fb.svg";
// import OtpInput from "react-otp-input";
import { Link } from "react-router";
import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;

export default function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState(""); // 'success' or 'error'
  const [roleId, setRoleId] = useState(1);

  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormMessage("Please fix the errors.");
      setFormStatus("error");
      return;
    }

    try {
      const response = await axios.post("https://localhost:7059/api/Auth/Register", {
        firstName,
        email,
        password,
        roleId
      });

      // Handle response status
      if (response.status === 200 || response.status === 201) {
        const { userId } = response.data;
        
        // Save userId to local storage
        localStorage.setItem("userId", userId);
        setFormMessage("Registration successful!");
        setFormStatus("success");
         setFirstName("");
         setEmail("");
         setPassword("");
         setRoleId(1);
      }
    } catch (error) {
      if (error.response) {
        // Backend returned a status code out of the 2xx range
        switch (error.response.status) {
          case 400:
            setFormMessage("Bad request. Please check the input values.");
            break;
          case 401:
            setFormMessage("Unauthorized. Please check your credentials.");
            break;
          case 409:
            setFormMessage("User already exists.");
            break;
          case 500:
            setFormMessage("Server error. Please try again later.");
            break;
          default:
            setFormMessage("An error occurred. Please try again.");
        }
        setFormStatus("error");
      } else {
        setFormMessage("Network error. Please check your connection.");
        setFormStatus("error");
      }
    }
  };


  return (
    <div className="container p-0 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="row g-0">
        {/* Left Image */}
        <div className="col-lg-6 col-md-12">
          <div className="p-4 p-md-5 d-flex flex-column justify-content-center h-100">
            <h1 className="fs-2 fw-bold mb-4">Signup as a Vendor</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              {/* Global Form Message */}
              {formMessage && (
                <div className={`alert ${formStatus === "success" ? "alert-success" : "alert-danger"}`} role="alert">
                  {formMessage}
                </div>
              )}

              {/* First Name Field */}
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className={`form-control py-2 ${errors.firstName ? "is-invalid" : ""}`}
                  id="firstName"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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

              {/* Terms and Policy Checkbox */}
              <div className="mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="flexCheckDefault" required />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree to the <Link style={{ textDecoration: "underline" }}>terms & policy</Link>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 py-2 mb-3">Signup</button>

              {/* Login Link */}
              <div className="text-center mb-4">
                <span>Already have an account? </span>
                <Link to="/login" className="text-decoration-none text-primary">Login</Link>
              </div>

              {/* Social Login Section */}
              <div className="d-flex align-items-center mb-4">
                <div className="flex-grow-1 border-bottom"></div>
                <span className="px-3 text-secondary small">Or Sign up with</span>
                <div className="flex-grow-1 border-bottom"></div>
              </div>
              <div className="d-flex justify-content-center gap-4">
                <img src={apple} alt="Apple" className="social-icon" />
                <img src={google} alt="Google" className="social-icon" />
                <img src={fb} alt="Facebook" className="social-icon" />
              </div>
            </form>
          </div>
        </div>

        {/* Right Form */}
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
      </div>
    </div>
  );

}