import React from "react";
import "./AboutUsPage.css"; // We'll create this CSS file next

// Optional: If you have a relevant image, you can import and use it.
// import founderImage from './path-to-your-image/mr-sreerama-rao.jpg'; // Example
// import philosophyImage from './path-to-your-image/tradition-care.jpg'; // Example

const AboutUsPage = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <header className="about-us-header">
          <h1>About Us</h1>
          <p className="about-us-subheading">
            Our Journey, Philosophy, and Vision for a Caring Community
          </p>
        </header>

        <article className="about-us-content">
          <div className="about-us-block">
            <h2 className="about-us-block-title">Our Founder's Vision</h2>
            {/* Optional: Image for founder
            {founderImage && (
              <img src={founderImage} alt="Mr. Sree Rama Rao" className="about-us-image founder-image" />
            )}
            */}
            <p>
              Mr. Sree Rama Rao was instrumental in establishing Sree Raama Yoga
              and Nature Cure Hospital under Sree Chakra Health and Educational
              Society in the year 2008. His vision was to spread the message to
              the common man that the human body possesses the inherent capacity
              to heal itself from its own ailments through various drugless
              therapies.
            </p>
            <p>
              The management, driven by this philosophy, also runs our cherished
              old age home.
            </p>
          </div>

          <div className="about-us-block">
            <h2 className="about-us-block-title">
              Our Philosophy: Old is Gold
            </h2>
            {/* Optional: Image for philosophy
            {philosophyImage && (
              <img src={philosophyImage} alt="Traditional healing methods" className="about-us-image philosophy-image" />
            )}
            */}
            <p>
              We believe that "Old is Gold." Here, we provide treatments
              designed to increase an individual's immunity, enabling them to
              overcome diseases naturally. Our approach is rooted in old and
              traditional methods to heal and promote well-being. We honor the
              wisdom of time-tested practices in our journey towards holistic
              health.
            </p>
          </div>

          <div className="about-us-block">
            <h2 className="about-us-block-title">Our Future Aspirations</h2>
            <p>
              Looking ahead, Sree Chakra Health and Educational Society has a
              profound vision to expand its charitable programmes. This includes
              aspirations to establish schools and continue to contribute
              meaningfully to the betterment of society, fostering education,
              health, and compassionate care for all.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutUsPage;
