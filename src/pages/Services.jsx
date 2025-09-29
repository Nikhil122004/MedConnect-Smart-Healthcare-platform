import React from "react";
import "../styles/Home.css"; // keeping existing styles

const services = [
  {
    title: "General Consultation",
    description: "Get expert general consultations for all your health needs.",
    images: ["/images/healthcare.jpg", "/images/A.jpg", "/images/B.jpg"],
    process: ["Choose a doctor", "Select appointment time", "Confirm and pay"],
  },
  {
    title: "Health Checkup Packages",
    description: "Comprehensive health checkups at affordable prices.",
    images: ["/images/C.jpg", "/images/D.jpg", "/images/E.jpg"],
    process: ["Pick a package", "Book a lab slot", "Receive report online"],
  },
  {
    title: "Vaccinations & Immunizations",
    description: "Protect your family with timely vaccinations.",
    images: ["/images/F.jpg", "/images/G.jpg", "/images/H.jpg"],
    process: ["Select vaccine", "Schedule visit", "Get vaccinated safely"],
  },
  {
    title: "Online Doctor Consultation",
    description: "Video/audio consultations with certified doctors.",
    images: ["/images/od1.jpg", "/images/od2.jpg", "/images/od3.jpg"],
    process: ["Choose doctor", "Start consultation online", "Get prescription"],
  },
  {
    title: "Diagnostic Tests & Lab Bookings",
    description: "Specialized care for diabetes control and monitoring.",
    images: ["/images/dt1.jpg", "/images/dt2.jpg", "/images/dt3.jpg"],
    process: ["Select test", "Book lab slot", "Download report"],
  },
  {
    title: "Specialized Treatments",
    description: "Specialized care for diabetes control and monitoring.",
    images: ["/images/sc1.jpg", "/images/sc2.jpg", "/images/sc3.jpg"],
    process: ["Consult specialist", "Plan treatment", "Follow up care"],
  },
];

function Services() {
  return (
    <>
      {/* Title and description above the section */}
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Explore a wide range of healthcare services designed to make your life easier.
          From doctor consultations to diagnostic tests and beyond, everything you need is here.
        </p>
      </div>

      <section className="services-section">
        <div className="grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <div style={cardStyle}>
      <img src={service.images[0]} alt={service.title} style={imageStyle} />
      <h3 style={titleStyle}>{service.title}</h3>
      <p style={descStyle}>{service.description}</p>

      {/* Process / Registration Steps */}
      <div style={processWrapper}>
        <h4 style={processTitle}>How It Works</h4>
        <div style={stepsContainer}>
          {service.process.map((step, i) => (
            <div key={i} style={stepBox}>
              <div style={stepNumber}>{i + 1}</div>
              <p style={stepText}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Inline CSS
const cardStyle = {
  borderRadius: "12px",
  background: "linear-gradient(135deg, #1b2237ff, #030357ff)",

  border: "1px solid #ccc",
  textAlign: "center",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  borderRadius:"15%",
};

const imageStyle = {
  borderRadius: "10px",
  width: "100%",
  height: "180px",
  objectFit: "cover",
  marginBottom: "15px",
};

const titleStyle = {
  fontSize: "1.4rem",
  marginBottom: "10px",
  color: "#f7f5f5ff",
};

const descStyle = {
  fontSize: "1rem",
  color: "#fdf5f5ff",
  marginBottom: "20px",
};

const processWrapper = {
  marginTop: "20px",
  textAlign: "left",
};

const processTitle = {
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "10px",
};

const stepsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const stepBox = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  background: "linear-gradient(135deg, #1b2237ff, #0606c6)",
  padding: "10px 15px",
  borderRadius: "10px",
  color: "#fff",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const stepNumber = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "#fff",
  color: "#03164bff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "700",
  fontSize: "1rem",
  flexShrink: 0,
};

const stepText = {
  fontSize: "1rem",
  fontWeight: "500",
};

export default Services;
