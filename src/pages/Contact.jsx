import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teamSize: "1-50 people",
    location: "India",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert(`✅ Thank you, ${formData.firstName}! Your info is saved.`);
      } else {
        alert("❌ Something went wrong: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Server error, please try again later.");
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      teamSize: "1-50 people",
      location: "India",
      message: "",
      agree: false,
    });
  };

  return (
    <div style={styles.container}>
      {/* Left Side */}
      <div style={styles.left}>
        <h2>MedConnect</h2>
        <p>We’d love to help. Reach out and we’ll get in touch within 24 hours.</p>
        <img
          src="/icon.png" // Replace with your image or illustration
          alt="Team"
          style={{ width: "100%", marginTop: "20px" }}
        />
        <div style={{ marginTop: "20px" }}>
          <p>📧 support@medconnect.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 MedConnect HQ, New Delhi, India</p>
        </div>
      </div>

      {/* Right Side Form */}
      <div style={styles.right}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.row}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <div style={styles.row}>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="1-50 people">1-10 staff</option>
              <option value="51-200 people">20-40 staff</option>
              <option value="201-500 people">40-65 staff</option>
              <option value="500+ people">100+ staff</option>
            </select>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Leave us a message..."
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
          <div style={styles.checkbox}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            <label style={{ marginLeft: "8px" }}>
              You agree to our friendly <a href="#">privacy policy</a>.
            </label>
          </div>
          <button type="submit" style={styles.button}>
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    maxWidth: "1200px",
    margin: "50px auto",
    background: "#d5d3d3ff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  left: {
    flex: 1,
    padding: "40px",
    background: "linear-gradient(135deg, #212029ff, #3a3fef)",
    color: "#fff",
    borderRadius: "20%",
  },
  right: {
    flex: 1,
    padding: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  select: {
    flex: 1,
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
    fontSize: "14px",
    height: "100px",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    padding: "14px",
    background: "#7f030dff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Contact;
