import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email";
    }

    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log(user);

    
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

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control mb-2"
                    value={user.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <small className="text-danger">
                      {errors.name}
                    </small>
                  )}

                  <input
                    type="email"
                    name="email"
                    placeholder="Email or Phone Number"
                    className="form-control mt-3 mb-2"
                    value={user.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email}
                    </small>
                  )}

                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mt-3 mb-2"
                    value={user.password}
                    onChange={handleChange}
                  />

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password}
                    </small>
                  )}

                  <button
                    type="submit"
                    className="btn create-btn w-100 mt-4"
                  >
                    Create Account
                  </button>

                  <button
                    type="button"
                    className="btn google-btn w-100 mt-3"
                  >
                    <img
                      src="/Icon-Google.png"
                      alt="google"
                    />

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