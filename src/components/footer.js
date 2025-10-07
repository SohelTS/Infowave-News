import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "white", padding: "20px", textAlign: "center" }}>
      <img src={logo} alt="Infowave Logo" style={{ height: "40px", marginBottom: "10px" }} />
      <p>© 2025 Infowave News. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
