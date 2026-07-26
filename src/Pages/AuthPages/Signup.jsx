import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import Navbar from "../../Layout/NavBar";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirmation: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!user.firstName.trim()) newErrors.firstName = "First name is required";
    if (!user.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email";
    }

    if (!user.phone.trim()) newErrors.phone = "Phone number is required";

    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (user.password !== user.passwordConfirmation) {
      newErrors.passwordConfirmation = "Passwords do not match";
    }

    if (!user.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = new FormData();
    formData.append("first_name", user.firstName);
    formData.append("last_name", user.lastName);
    formData.append("email", user.email);
    formData.append("phone_number", user.phone);
    formData.append("password", user.password);
    formData.append("password_confirmation", user.passwordConfirmation);
    formData.append("address", user.address);

    try {
      setLoading(true);

      const response = await api.post("/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Register success:", response.data);
      navigate("/login");

    } catch (error) {
      console.error("Register error:", error);
      setApiError(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
  

      <div className="signup-page">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="/dl.beatsnoop 1.png"
                alt="signup"
                className="signup-image"
              />
            </div>

            <div className="col-lg-6">
              <div className="signup-box">

                <h2>Create an account</h2>
                <p>Enter your details below</p>

                {apiError && (
                  <div className="alert alert-danger">{apiError}</div>
                )}

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control mb-2"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <small className="text-danger">{errors.firstName}</small>}

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control mt-3 mb-2"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && <small className="text-danger">{errors.lastName}</small>}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mt-3 mb-2"
                    value={user.email}
                    onChange={handleChange}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control mt-3 mb-2"
                    value={user.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <small className="text-danger">{errors.phone}</small>}

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control mt-3 mb-2"
                    value={user.address}
                    onChange={handleChange}
                  />
                  {errors.address && <small className="text-danger">{errors.address}</small>}

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mt-3 mb-2"
                    value={user.password}
                    onChange={handleChange}
                  />
                  {errors.password && <small className="text-danger">{errors.password}</small>}

                  <input
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    className="form-control mt-3 mb-2"
                    value={user.passwordConfirmation}
                    onChange={handleChange}
                  />
                  {errors.passwordConfirmation && (
                    <small className="text-danger">{errors.passwordConfirmation}</small>
                  )}

                  <button
                    type="submit"
                    className="btn create-btn w-100 mt-4"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>

                  <button type="button" className="btn google-btn w-100 mt-3">
                    <img src="/Icon-Google.png" alt="google" />
                    Sign up with Google
                  </button>

                  <p className="login-text">
                    Already have account?
                    <Link to="/login"> Log in</Link>
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;