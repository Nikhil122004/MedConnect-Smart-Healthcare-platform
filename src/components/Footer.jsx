import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About Section */}
        <div style={styles.section}>
          <h3 style={styles.heading}>About MedConnect</h3>
          <p style={styles.text}>
            MedConnect is dedicated to connecting healthcare providers and patients with ease. 
            We provide seamless medical support and personalized care solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.links}>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.text}>📧 support@medconnect.com</p>
          <p style={styles.text}>📞 +91 98765 43210</p>
          <p style={styles.text}>📍 MedConnect HQ, New Delhi, India</p>
        </div>

        {/* Social Links */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Follow Us</h3>
          <ul style={styles.socialLinks}>
            <li><a href="https://facebook.com" style={styles.link}>Facebook</a></li>
            <li><a href="https://twitter.com" style={styles.link}>Twitter</a></li>
            <li><a href="https://linkedin.com" style={styles.link}>LinkedIn</a></li>
            <li><a href="https://instagram.com" style={styles.link}>Instagram</a></li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div style={styles.bottom}>
          <p style={styles.bottomText}>
            © {new Date().getFullYear()} <strong>MedConnect</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#01054eff",
    color: "#fff",
    padding: "60px 20px",
    marginTop: "50px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  socialLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s",
  },
  bottom: {
    gridColumn: "1 / -1",
    borderTop: "1px solid rgba(255,255,255,0.3)",
    paddingTop: "20px",
    marginTop: "20px",
    textAlign: "center",
  },
  bottomText: {
    fontSize: "14px",
  },
};

export default Footer;
