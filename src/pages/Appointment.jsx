import React, { useState } from "react";
import "../styles/Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    hospital: "",
    department: "",
    date: "",
  });

  const [confirmation, setConfirmation] = useState("");
  const [appointments, setAppointments] = useState([]);

  const hospitals = [
    { name: "City Care Hospital", address: "MG Road, Bangalore", contact: "080-123456", distance: "2.5 km" },
    { name: "Apollo Pharmacy", address: "Koramangala, Bangalore", contact: "080-456789", distance: "1.2 km" },
    { name: "LifeLine Medicals", address: "BTM Layout, Bangalore", contact: "080-789123", distance: "3.1 km" },
    { name: "Green Cross Hospital", address: "Indiranagar, Bangalore", contact: "080-654321", distance: "4.0 km" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate booking time from system
    const now = new Date();
    const bookingTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const bookingData = { ...formData, time: bookingTime };

    try {
      // Save to backend
      const response = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();
      setConfirmation(data.message);

      // Also add locally for table display
      setAppointments((prev) => [...prev, bookingData]);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        state: "",
        hospital: "",
        department: "",
        date: "",
      });
    } catch (err) {
      console.error("Error booking appointment", err);
    }
  };

  return (
    <div className="appointment-wrapper">
      <div className="appointment-container">
        <div className="overlay"></div>
        <div className="content">
          {/* Left Info */}
          <div className="left">
            <h2 className="heading">Need an Appointment?</h2>
            <p className="sub-text">
              Follow the simple steps below and book your appointment online!
            </p>
            <ul className="steps-list">
              <li>✅ Select State & Hospital</li>
              <li>✅ Choose Department</li>
              <li>✅ Pick Date</li>
              <li>✅ Register/Login</li>
              <li>✅ Get Confirmation SMS</li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="right">
            <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
              Book Your Appointment
            </h3>
            <form className="appointment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <select
                name="state"
                className="form-input"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
              </select>

              <select
                name="hospital"
                className="form-input"
                value={formData.hospital}
                onChange={handleChange}
                required
              >
                <option value="">Select Hospital</option>
                {hospitals.map((h, i) => (
                  <option key={i} value={h.name}>
                    {h.name}
                  </option>
                ))}
              </select>

              <select
                name="department"
                className="form-input"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="General Medicine">General Medicine</option>
              </select>

              <input
                type="date"
                name="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
                required
              />

              <button type="submit" className="form-button">
                Confirm Appointment
              </button>
            </form>
            {confirmation && (
              <p className="confirmation-text">{confirmation}</p>
            )}
          </div>
        </div>
      </div>

      {/* Today's Appointments Table */}
      <div className="appointments-section">
        <h2>Today's Appointments</h2>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>State</th>
                <th>Hospital</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{appt.state}</td>
                  <td>{appt.hospital}</td>
                  <td>{appt.fullName}</td>
                  <td>{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Nearby Hospitals */}
      <div className="nearby-section">
        <h2>Nearby Hospitals & Clinics</h2>
        <div className="hospitals-grid">
          {hospitals.map((item, index) => (
            <div key={index} className="hospital-card">
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

export default Appointment;
