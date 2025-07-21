import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      {/* Left Side: Company Contact Info */}
      <div style={styles.infoBox}>
        <h2 style={styles.heading}>Get in Touch</h2>
        <p style={styles.text}>
          Have questions? We are here to help you.
        </p>
        <p><strong>Email:</strong> support@medconnect.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> MedConnect HQ, New Delhi, India</p>
      </div>

      {/* Right Side: Contact Form */}
      <div style={styles.formBox}>
        <h3 style={styles.formHeading}>Send Us a Message</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    padding: "40px",
    maxWidth: "1000px",
    margin: "50px auto",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
  },
  infoBox: {
    flex: 1,
    padding: "20px",
  },
  heading: {
    fontSize: "28px",
    color: "#fa1134",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "15px",
  },
  formBox: {
    flex: 1,
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "8px",
  },
  formHeading: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    resize: "none",
    height: "80px",
  },
  button: {
    padding: "10px",
    background: "#fa1134",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Contact;
