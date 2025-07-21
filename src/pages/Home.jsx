import { useEffect, useState } from "react";
import WhyChooseUs from "../components/WhyChooseUs";
import { useNavigate } from "react-router-dom";

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
      {/*Landing + Hero Section */}
      <section style={styles.landingHeroWrapper}>
        <div style={styles.landingContent}>
          <h1 style={styles.landingTitle}>Welcome to MedConnect</h1>
          <p style={styles.landingDescription}>
            Your trusted healthcare partner. Connect with top doctors, book appointments,
            order medicines, and access premium healthcare services — all in one place.
          </p>
          <div style={styles.statsContainer}>
            <div style={styles.statBox}>
              <h2 style={styles.statNumber}>1000+</h2>
              <p style={styles.statLabel}>Certified Doctors</p>
            </div>
            <div style={styles.statBox}>
              <h2 style={styles.statNumber}>500+</h2>
              <p style={styles.statLabel}>Hospitals</p>
            </div>
            <div style={styles.statBox}>
              <h2 style={styles.statNumber}>50K+</h2>
              <p style={styles.statLabel}>Happy Patients</p>
            </div>
          </div>
        </div>

        <div style={styles.heroContent}>
          <h2 style={styles.heroHeading}>Your Health, Our Priority</h2>
          <p style={styles.heroText}>
            Book online consultations, schedule diagnostic tests, and get your medicines delivered.
          </p>
          <button
            style={styles.heroButton}
            onClick={() => navigate("/appointment")}
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <WhyChooseUs />

      {/* ✅ Services Section */}
      <section style={styles.servicesSection}>
  <h2 style={styles.servicesTitle}>Our Services</h2>
  <p style={styles.servicesDescription}>
    Explore a wide range of healthcare services designed to make your life easier.  
    From doctor consultations to diagnostic tests and beyond, everything you need is here.
  </p>
  <div style={styles.grid}>
    {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
    ))}
  </div>
</section>

{/* Remove all animations and complex hover effects */}
<style>
  {`
    .service-card {
      border-radius: 8px;
      background: #fff;
      border: 1px solid #ccc;
      text-align: center;
      padding: 15px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .service-card h3 {
      color: #000;
      font-size: 18px;
      margin: 10px 0;
    }

    .service-card p {
      color: #333;
      font-size: 14px;
    }

    .service-card img {
      border-radius: 6px;
      border: 2px solid #fa1134;
      margin-bottom: 10px;
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
  `}
</style>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="service-card" style={styles.card}>
      <img
        src={service.images[0]}  // Show only first image
        alt={service.title}
        style={styles.image}
      />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

const styles = {
  landingHeroWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 40px",
    backgroundImage: "url('/images/A1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    gap: "40px",
    flexWrap: "wrap",
    borderRadius: "10px",
    position: "relative",
    zIndex: 1,
  },
  landingContent: {
    flex: "1",
    minWidth: "300px",
    background: "rgba(9, 9, 9, 0.4)",
    padding: "20px",
    borderRadius: "8px",
  },
  landingTitle: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "15px",
  },
  landingDescription: {
    fontSize: "20px",
    color: "#f1f1f1",
    marginBottom: "35px",
    maxWidth: "500px",
  },
  statsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  statBox: {
    textAlign: "center",
    background: "rgba(255,255,255,0.8)",
    padding: "15px 20px",
    borderRadius: "8px",
    boxShadow: "4px 8px 8px rgba(0,0,0,0.3)",
  },
  statNumber: {
    fontSize: "28px",
    color: "#f51616ff",
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "bold",
  },
  heroContent: {
    flex: "1",
    minWidth: "300px",
    textAlign: "center",
    background: "rgba(255,255,255,0.8)",
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  heroHeading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  heroText: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "20px",
  },
  heroButton: {
    background: "#d60404ff",
    color: "#fff",
    padding: "14px 26px",
    fontSize: "16px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
  servicesSection: {
    position: "relative",
    padding: "80px 40px",
    backgroundImage: "url('/images/A1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    margin: "50px 0",
    textAlign: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
  servicesTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "10px",
    position: "relative",
    zIndex: 1,
  },
  servicesDescription: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto 50px",
    lineHeight: "1.6",
    color: "#f1f1f1",
    position: "relative",
    zIndex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "40px 150px",
    margin:"50px",
    position: "relative",
    zIndex: 1,
    
  },
  card: {
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
    borderRadius: "12px",
    padding: "15px",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  sticker: {
    position: "absolute",
    top: "15px",
    left: "15px",
    background: "#fa1134",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px 10px",
    borderRadius: "50%",
    zIndex: 2,
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  dot: {
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    margin: "0 5px",
    cursor: "pointer",
  },
};

export default Home;
