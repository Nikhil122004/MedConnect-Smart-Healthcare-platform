import { useEffect, useState } from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const services = [
    {
      title: "General Consultation",
      description: "Get expert general consultations for all your health needs.",
      images: ["/images/healthcare.jpg", "/images/A.jpg", "/images/B.jpg"],
    },
    {
      title: "Health Checkup Packages",
      description: "Comprehensive health checkups at affordable prices.",
      images: ["/images/C.jpg", "/images/D.jpg", "/images/E.jpg"],
    },
    {
      title: "Vaccinations & Immunizations",
      description: "Protect your family with timely vaccinations.",
      images: ["/images/F.jpg", "/images/G.jpg", "/images/H.jpg"],
    },
    {
      title: "Online Doctor Consultation",
      description: "Video/audio consultations with certified doctors.",
      images: ["/images/od1.jpg", "/images/od2.jpg", "/images/od3.jpg"],
    },
    {
      title: "Diagnostic Tests & Lab Bookings",
      description: "Specialized care for diabetes control and monitoring.",
      images: ["/images/dt1.jpg", "/images/dt2.jpg", "/images/dt3.jpg"],
    },
    {
      title: "Specialized Treatments",
      description: "Specialized care for diabetes control and monitoring.",
      images: ["/images/sc1.jpg", "/images/sc2.jpg", "/images/sc3.jpg"],
    },
  ];

  return (
    <div>
      {/* Landing Hero Section */}
      <section className="landing-hero-wrapper">
        <div className="landing-content">
          <h1 className="landing-title">Welcome to MedConnect</h1>
          <p className="landing-description">
            Your trusted healthcare partner. Connect with top doctors, book appointments,
            order medicines, and access premium healthcare services — all in one place.
          </p>
          <div className="stats-container">
            <div className="stat-box">
              <h2 className="stat-number">1000+</h2>
              <p className="stat-label">Certified Doctors</p>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">500+</h2>
              <p className="stat-label">Hospitals</p>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">50K+</h2>
              <p className="stat-label">Happy Patients</p>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <h2 className="hero-heading">Your Health, Our Priority</h2>
          <p className="hero-text">
            Book online consultations, schedule diagnostic tests, and get your medicines delivered.
          </p>
          <button
            className="hero-button"
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>
        </div>
      </section>

      
      <WhyChooseUs />


      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">
          Explore a wide range of healthcare services designed to make your life easier.  
          From doctor consultations to diagnostic tests and beyond, everything you need is here.
        </p>
        <div className="grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img
        src={service.images[0]}
        alt={service.title}
      />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

export default Home;
