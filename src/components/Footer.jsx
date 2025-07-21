import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} <strong>MedConnect</strong>. All rights reserved.
        </p>
        <ul style={styles.links}>
          <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
          <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
          <li><a href="/contact" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#8f0217ff", // ✅ Matches your theme
    color: "#fff",
    padding: "20px 10px",
    marginTop: "50px",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    marginBottom: "10px",
    fontSize: "14px",
  },
  links: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    padding: 0,
    margin: 0,
    flexWrap: "wrap",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  },
};

// Hover effect (inline style workaround)
styles.link[':hover'] = {
  color: "#000",
};

export default Footer;
