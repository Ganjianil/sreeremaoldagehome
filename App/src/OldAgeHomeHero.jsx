import React from "react";
import "./OldAgeHomeHero.css"; // Ensure this CSS file styles the button/link appropriately
import srh from "/Srh.jpeg"
const OldAgeHomeHero = () => {
  const heroImageUrl =srh;
  const youtubeLink = "https://www.youtube.com/live/fECM8R5itY4"; // Your YouTube link

  return (
    <section className="oah-hero-section">
      <div className="oah-hero-content">
        <h1>Compassionate Care in a Comforting Home</h1>
        <p>
          At Sriram Pakruthi Old Age Home, we provide a nurturing and supportive
          environment where our residents feel valued, respected, and at home.
          Our dedicated team offers personalized care, engaging activities, and
          a community focused on well-being and happiness.
        </p>
        {/* Changed button to an <a> tag styled as a button */}
        <a
          href={youtubeLink}
          className="oah-hero-cta-button" // Use the same class for styling
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
        >
          Discover Our Services
        </a>
      </div>
      <div className="oah-hero-image-container">
        <img
          src={heroImageUrl}
          alt="Comfortable and caring environment at our old age home"
        />
      </div>
    </section>
  );
};

export default OldAgeHomeHero;
