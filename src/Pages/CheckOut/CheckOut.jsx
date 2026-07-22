import { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckOut.css";

const cartItems = [
  { id: 1, img: "/g92-2-500x500 1.png", name: "LCD Monitor", price: 650 },
  { id: 2, img: "/ak-900-01-500x500 1.png", name: "H1 Gamepad", price: 1100 },
];

function CheckOut() {
  const [form, setForm] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phone: "",
    email: "",
    saveInfo: true,
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!form.streetAddress.trim()) newErrors.streetAddress = "Street Address is required";
    if (!form.townCity.trim()) newErrors.townCity = "Town/City is required";
    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    return newErrors;
  };

  const handlePlaceOrder = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log({ form, paymentMethod, total });
  };

  return (
    <div className="checkout-page">
      <div className="container">

        <p className="breadcrumb-text">
          <Link to="/account">Account</Link> / <Link to="/account">My Account</Link> / Product / View Cart / <span>CheckOut</span>
        </p>

        <div className="row checkout-row">

          <div className="col-lg-7">
            <h2 className="billing-title">Billing Details</h2>

            <form>

              <div className="form-group">
                <label>First Name<span>*</span></label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={form.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  value={form.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Street Address<span>*</span></label>
                <input
                  type="text"
                  name="streetAddress"
                  className="form-control"
                  value={form.streetAddress}
                  onChange={handleChange}
                />
                {errors.streetAddress && <small className="text-danger">{errors.streetAddress}</small>}
              </div>

              <div className="form-group">
                <label>Apartment, floor, etc. (optional)</label>
                <input
                  type="text"
                  name="apartment"
                  className="form-control"
                  value={form.apartment}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Town/City<span>*</span></label>
                <input
                  type="text"
                  name="townCity"
                  className="form-control"
                  value={form.townCity}
                  onChange={handleChange}
                />
                {errors.townCity && <small className="text-danger">{errors.townCity}</small>}
              </div>

              <div className="form-group">
                <label>Phone Number<span>*</span></label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              <div className="form-group">
                <label>Email Address<span>*</span></label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  name="saveInfo"
                  id="saveInfo"
                  checked={form.saveInfo}
                  onChange={handleChange}
                />
                <label htmlFor="saveInfo">Save this information for faster check-out next time</label>
              </div>

            </form>
          </div>

          <div className="col-lg-5">
            <div className="order-summary">

              {cartItems.map((item) => (
                <div className="order-item" key={item.id}>
                  <div className="order-item-info">
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <span className="order-item-price">${item.price}</span>
                </div>
              ))}

              <div className="order-row">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              <div className="order-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="order-row order-total">
                <span>Total:</span>
                <span>${total}</span>
              </div>

              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                  />
                  <span>Bank</span>
                  <div className="payment-icons">
                    <i className="bi bi-credit-card"></i>
                    <i className="bi bi-credit-card-2-front"></i>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span>Cash on delivery</span>
                </label>
              </div>

              <div className="coupon-row">
                <input type="text" placeholder="Coupon Code" className="form-control" />
                <button className="btn apply-coupon-btn">Apply Coupon</button>
              </div>

              <button className="btn place-order-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default CheckOut;