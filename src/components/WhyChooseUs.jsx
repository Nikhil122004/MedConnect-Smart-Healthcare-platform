import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Verified Doctors",
      description: "Only certified and experienced healthcare professionals.",
      icon: "✅",
      color: "#4caf50",
    },
    {
      id: "02",
      title: "Instant Appointments",
      description: "Book your doctor visits anytime without waiting.",
      icon: "📅",
      color: "#2196f3",
    },
    {
      id: "03",
      title: "24/7 Online Consultation",
      description: "Get expert medical advice anytime, anywhere.",
      icon: "💬",
      color: "#673ab7",
    },
    {
      id: "04",
      title: "Integrated Pharmacy",
      description: "Order genuine medicines and health products easily.",
      icon: "💊",
      color: "#ff5722",
    },
    {
      id: "05",
      title: "Personalized Care",
      description: "Tailored health recommendations and follow-ups.",
      icon: "❤️",
      color: "#e91e63",
    },
    {
      id: "06",
      title: "Secure & Private",
      description: "Your medical data is safe with advanced encryption.",
      icon: "🔒",
      color: "#ff9800",
    },
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Why Choose Us?</h2>
      <p style={styles.subtitle}>
        MedConnect makes healthcare simple, fast, and stress-free with these powerful features.
      </p>
      <div style={styles.grid}>
        {features.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={{ ...styles.iconContainer, backgroundColor: item.color }}>
              <span style={styles.icon}>{item.icon}</span>
            </div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.cardDesc}>{item.description}</p>
            <div style={styles.number}>{item.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    textAlign: "center",
    padding: "60px 20px",
    background: "#f9f9f9",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    padding: "30px 20px",
    borderRadius: "16px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 15px auto",
  },
  icon: {
    fontSize: "32px",
    color: "#fff",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
  },
  number: {
    marginTop: "10px",
    background: "#060606ff",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "6px",
    padding: "4px 8px",
    display: "inline-block",
  },
};

export default WhyChooseUs;
