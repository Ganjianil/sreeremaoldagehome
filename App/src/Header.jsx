import React from "react";
import "./App.css"; // Or './Header.css' - ensure this file is linked

const Header = () => {
  // No more state needed for mobile menu toggle

  return (
    <>
      <header className="app-header fixed-header">
        {" "}
        {/* Added fixed-header class */}
        <div className="header-title-container">
          {" "}
          {/* Wrapper for potential animations */}
          <h1 className="header-title">
            Sree Raama Hospital Yoga & Nature Cure Oldage Home
          </h1>
        </div>
        {/* Navigation and hamburger button are removed */}
      </header>
      <div className="header-spacer"></div> {/* Spacer to push content down */}
    </>
  );
};

export default Header;
