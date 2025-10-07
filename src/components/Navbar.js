// import React from "react";
// import logo from "../assets/logo.png";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
//       React News App
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar({ onCategoryChange }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "General",
    "Business",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
    "Science",
  ];

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setIsMobileMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">Infowave News</span>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            className="navbar-link"
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className="navbar-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        &#9776; {/* hamburger icon */}
      </div>
    </nav>
  );
}

export default Navbar;
