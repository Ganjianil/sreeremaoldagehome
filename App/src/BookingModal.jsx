import React, { useState, useEffect } from "react";

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  // We don't need isSubmitting or submitStatus for mailto: in the same way
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (serviceTitle) {
      setFormData((prevData) => ({ ...prevData, service: serviceTitle }));
    }
  }, [serviceTitle, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim())
      return { isValid: false, message: "Name is required." };
    if (!formData.email.trim())
      return { isValid: false, message: "Email is required." };
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return { isValid: false, message: "Email is invalid." };
    if (!formData.phone.trim())
      return { isValid: false, message: "Phone number is required." };
    return { isValid: true, message: "" };
  };

  const handleSubmitMailto = (e) => {
    e.preventDefault();
    setValidationMessage(""); // Clear previous validation messages

    const validation = validateForm();
    if (!validation.isValid) {
      setValidationMessage(validation.message);
      return;
    }

    const recipientEmail = "your-email@example.com"; // <<< REPLACE WITH YOUR ACTUAL EMAIL ADDRESS
    const subject = `Booking Inquiry: ${formData.service || "General Inquiry"}`;
    const body = `
      New Booking Inquiry:
      --------------------------------
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service of Interest: ${formData.service || "Not specified"}
      Message:
      ${formData.message || "No message provided."}
      --------------------------------
    `;

    // Construct the mailto link
    // encodeURIComponent ensures special characters in subject/body are handled correctly
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally, you can close the modal after attempting to open the mail client
    // Or show a message like "Please complete sending the email in your mail application."
    // For simplicity, we'll just close it here.
    // You might want to inform the user that their email client will open.
    alert(
      "Your email application will now open to send the inquiry. Please complete the process there."
    );
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: serviceTitle,
      message: "",
    }); // Reset form
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal-content">
        <button className="booking-modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Book an Appointment / Inquire</h2>
        {serviceTitle && (
          <p className="booking-modal-service-info">
            Service of Interest: <strong>{serviceTitle}</strong>
          </p>
        )}

        {/* Changed form submission handler */}
        <form onSubmit={handleSubmitMailto} noValidate>
          {/* ... form fields remain the same ... */}
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service of Interest:</label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="e.g., Comprehensive Bedridden Care"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message/Questions (Optional):</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {validationMessage && (
            <p className="submit-message error">
              {" "}
              {/* Use error class for validation messages */}
              {validationMessage}
            </p>
          )}

          <button type="submit" className="submit-btn">
            Prepare Email Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
