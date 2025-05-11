import React from "react";
import "./ContactInfo.css"; // We'll create this CSS file next

const ContactInfo = () => {
  const addressLines = [
    "Cret5-18/1, Sri Mani Niliyam,",
    "Opposite Zph School,",
    "Penamaluru Main Road,",
    "Poranki - 521137",
  ];
  const phoneNumber = "9848236102";
  const fullPhoneNumber = "+919848236102"; // For the tel: link

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <h2 className="contact-info-title">Get In Touch</h2>
        <div className="contact-details">
          <div className="contact-item address-item">
            <span
              className="contact-icon address-icon"
              role="img"
              aria-label="Address"
            >
              📍
            </span>{" "}
            {/* Simple emoji icon */}
            <div className="contact-text">
              <p className="contact-label">Our Address:</p>
              {addressLines.map((line, index) => (
                <span key={index} className="address-line">
                  {line}
                </span>
              ))}
            </div>
          </div>

          <div className="contact-item phone-item">
            <span
              className="contact-icon phone-icon"
              role="img"
              aria-label="Phone"
            >
              📞
            </span>{" "}
            {/* Simple emoji icon */}
            <div className="contact-text">
              <p className="contact-label">Call Us:</p>
              <a href={`tel:${fullPhoneNumber}`} className="phone-number-link">
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
        <p className="contact-invitation">
          We welcome you to visit us or call for any inquiries.
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;
