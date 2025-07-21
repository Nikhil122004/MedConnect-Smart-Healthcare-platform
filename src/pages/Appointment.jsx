import React from "react";

function Appointment() {
  const hospitals = [
    { name: "City Care Hospital", address: "MG Road, Bangalore", contact: "080-123456", distance: "2.5 km" },
    { name: "Apollo Pharmacy", address: "Koramangala, Bangalore", contact: "080-456789", distance: "1.2 km" },
    { name: "LifeLine Medicals", address: "BTM Layout, Bangalore", contact: "080-789123", distance: "3.1 km" },
    { name: "Green Cross Hospital", address: "Indiranagar, Bangalore", contact: "080-654321", distance: "4.0 km" },
  ];

  return (
    <div style={{ padding: "30px" }}>
      {/* ✅ Appointment Section with Background Image */}
      <div style={styles.container}>
        <div style={styles.overlay}></div> {/* Overlay for readability */}

        {/* ✅ Content Wrapper */}
        <div style={styles.content}>
          {/* Left: Steps */}
          <div style={styles.left}>
            <h2 style={styles.heading}>Need an Appointment?</h2>
            <p style={styles.subText}>
              Follow the simple steps below and book your appointment online!
            </p>
            <ul style={styles.stepsList}>
              <li style={styles.step}>✅ Select State/Hospital</li>
              <li style={styles.step}>✅ Choose Appointment Mode</li>
              <li style={styles.step}>✅ Select Department</li>
              <li style={styles.step}>✅ Pick Date & Time</li>
              <li style={styles.step}>✅ Register/Login</li>
              <li style={styles.step}>✅ Get Confirmation SMS</li>
            </ul>
          </div>

          {/* Right: Form */}
          <div style={styles.right}>
            <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
              Book Your Appointment
            </h3>
            <form style={styles.form}>
              <input type="text" placeholder="Full Name" style={styles.input} />
              <input type="email" placeholder="Email Address" style={styles.input} />
              <input type="tel" placeholder="Phone Number" style={styles.input} />
              <select style={styles.input}>
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
              <select style={styles.input}>
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>General Medicine</option>
              </select>
              <input type="date" style={styles.input} />
              <button style={styles.button}>Confirm Appointment</button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Nearby Hospitals Section */}
      <div style={styles.nearbySection}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Nearby Hospitals & Medical Shops
        </h2>
        <div style={styles.grid}>
          {hospitals.map((item, index) => (
            <div key={index} style={styles.card}>
              <h3>{item.name}</h3>
              <p>{item.address}</p>
              <p>📞 {item.contact}</p>
              <p>📍 {item.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px",
    backgroundImage: "url('/images/B1.jpg')", // ✅ Your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "40px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(7, 7, 7, 0.5)", // ✅ Dark overlay for readability
    zIndex: 1,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    flexWrap: "wrap",
    zIndex: 2,
    position: "relative",
    color: "#fff", // White text on dark overlay
  },
  left: {
    flex: "1",
    minWidth: "280px",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "15px",
  },
  subText: {
    marginBottom: "20px",
  },
  stepsList: {
    listStyle: "none",
    padding: 0,
    fontSize: "18px",
  },
  step: {
    marginBottom: "12px",
  },
  right: {
    flex: "1",
    minWidth: "320px",
    background: "rgba(255,255,255,0.9)",
    color: "#000",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    background: "#a20306ff",
    color: "#fff",
    border: "none",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  nearbySection: {
    marginTop: "30px",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
};

export default Appointment;
