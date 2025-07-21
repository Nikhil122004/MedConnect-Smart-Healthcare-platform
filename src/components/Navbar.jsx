import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logoContainer}>
        <img src="/images/logo1.png" alt="Logo" style={styles.logoImage} />
        <h2 style={styles.title}>MedConnect</h2>
      </div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/" style={styles.link}>Services</Link></li>
        <li><Link to="/appointment" style={styles.link}>Appointments</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li>
          <Link
            to="/auth"
            style={{ ...styles.authBtn, background: "#d60404ff", color: "#fff" }}
          >
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 25px",
    background: "#f6f2f2ff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    fontSize: "16px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
    color: "#333",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 12px",
    transition: "color 0.3s",
  },
  authBtn: {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "1.35px solid #0a0506ff",
    color: "#fa1134ff",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "16px",
    transition: "0.3s",
  },
};

export default Navbar;
