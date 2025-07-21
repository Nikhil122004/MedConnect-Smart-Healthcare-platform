import React, { useState, useEffect } from "react";

function About() {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "50px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fc",
    },
    introSection: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: "50px",
    },
    introText: {
      flex: 1,
      minWidth: "300px",
      marginRight: "20px",
    },
    heading: {
      fontSize: "3rem",
      color: "#333",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: "1.8",
    },
    highlight: {
      color: "#f10c0cff",
      fontWeight: "bold",
    },
    button: {
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 25px",
      backgroundColor: "#f10c0cff",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    },
    founderCard: {
      flex: "0 0 280px",
      background: "#fff",
      textAlign: "center",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    },
    founderImage: {
      width: "220px",
      height: "220px",
      objectFit: "cover",
      borderRadius: "12px",
      marginBottom: "15px",
    },
    founderName: {
      fontSize: "1.3rem",
      marginBottom: "5px",
    },
    founderTitle: {
      color: "#777",
      fontSize: "1rem",
    },

    // ✅ Locations Section
    locationsSection: {
      marginTop: "50px",
    },
    locationsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "100px",
    },
    leftColumn: {
      flex: "1",
      minWidth: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    locationCard: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    },
    locationHeading: {
      fontSize: "1.3rem",
      color: "#f10c0cff",
      marginBottom: "8px",
    },
    locationText: {
      color: "#555",
    },

    // ✅ Google Map
    mapContainer: {
      flex: "1",
      minWidth: "450px",
      height: "450px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    },

    // ✅ Reviews Section
    reviewsSection: {
      marginTop: "60px",
      textAlign: "center",
    },
    reviewsHeading: {
      fontSize: "2.5rem",
      marginBottom: "30px",
      color: "#333",
    },
    reviewsGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "50px",
    },
    reviewCard: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      width: "300px",
      textAlign: "left",
    },
    reviewText: {
      fontSize: "1rem",
      color: "#444",
      marginBottom: "10px",
      lineHeight: "1.6",
    },
    reviewerName: {
      fontWeight: "bold",
      color: "#f10c0cff",
    },
    stars: {
      color: "#FFD700",
      fontSize: "18px",
      marginBottom: "8px",
    },

    // ✅ Add Review Button
    addReviewButton: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      backgroundColor: "#f10c0cff",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      fontSize: "32px",
      cursor: "pointer",
      boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
    },

    // ✅ Review Form
    reviewForm: {
      marginTop: "40px",
      padding: "20px 50px 20px 30px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      width: "400px",
      margin: "40px auto",
      textAlign: "left",
    },
    formTitle: {
      fontSize: "1.5rem",
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    textarea: {
      width: "100%",
      height: "80px",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    submitBtn: {
      backgroundColor: "#f10c0cff",
      color: "#fff",
      padding: "12px 20px",
      border: "none",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
      width: "100%",
    },
  };

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", text: "", stars: 5 });
  const [showForm, setShowForm] = useState(false);

  // ✅ Fetch reviews from backend
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      try {
        const response = await fetch("http://localhost:5000/reviews", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        });

        const data = await response.json();
        console.log(data.message);

        // ✅ Update UI after saving
        setReviews([...reviews, newReview]);
        setNewReview({ name: "", text: "", stars: 5 });
        setShowForm(false);
      } catch (error) {
        console.error("Error saving review:", error);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Intro Section */}
      <div style={styles.introSection}>
        <div style={styles.introText}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to <span style={styles.highlight}>MedConnect</span>!
            At MedConnect, we believe that quality healthcare should be accessible, efficient, and patient-centered. Our mission is to bridge the gap between patients, doctors, and healthcare providers through innovative technology and compassionate care.

We are more than just a platform—we are your trusted partner in managing health. Whether it’s booking appointments, connecting with specialists, accessing medical records, or finding the right hospital, MedConnect ensures a seamless healthcare experience at your fingertips.


          </p>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f10c0cff")}
          >
            Learn More
          </button>
        </div>
        <div style={styles.founderCard}>
          <img src="/images/nk.jpg" alt="Founder" style={styles.founderImage} />
          <h3 style={styles.founderName}>Nikhil Kumar Singh</h3>
          <p style={styles.founderTitle}>Founder & CEO</p>
        </div>
      </div>

      {/* Locations */}
      <div style={styles.locationsSection}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "20px" }}>
          Our Locations
        </h2>
        <div style={styles.locationsWrapper}>
          <div style={styles.leftColumn}>
            <div style={styles.locationCard}>
              <h3 style={styles.locationHeading}>New Delhi, India</h3>
              <p style={styles.locationText}>New Delhi Railway Station, Bhavbhuti Marg, Ratan Lal Market, Kamla Market, Ajmeri Gate, New Delhi, Delhi, 110006</p>
            </div>
            <div style={styles.locationCard}>
              <h3 style={styles.locationHeading}>Mumbai, India</h3>
              <p style={styles.locationText}>Vijay Nagar, MIDC, Marol, Andheri East
Mumbai, Maharashtra 400047</p>
            </div>
             <div style={styles.locationCard}>
              <h3 style={styles.locationHeading}>Kolkata, India</h3>
              <p style={styles.locationText}>DC Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064</p>
            </div>
          </div>
          <div style={styles.mapContainer}>
            <iframe
              title="Company Locations Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609951144!2d72.74109716627912!3d19.082197839857878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fd07d3c61%3A0xdebdfc64d3a69db6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1673011490931!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div style={styles.reviewsSection}>
        <h2 style={styles.reviewsHeading}>What Our Customers Say</h2>
        <div style={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div style={styles.reviewCard} key={index}>
              <div style={styles.stars}>
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>
              <p style={styles.reviewText}>"{review.text}"</p>
              <span style={styles.reviewerName}>- {review.name}</span>
            </div>
          ))}
        </div>

        {showForm && (
          <form style={styles.reviewForm} onSubmit={handleSubmit}>
            <h3 style={styles.formTitle}>Add Your Review</h3>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleInputChange}
            />
            <textarea
              style={styles.textarea}
              name="text"
              placeholder="Write your review..."
              value={newReview.text}
              onChange={handleInputChange}
            ></textarea>
            <select
              name="stars"
              value={newReview.stars}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
              <option value="3">⭐⭐⭐ (3 Stars)</option>
              <option value="2">⭐⭐ (2 Stars)</option>
              <option value="1">⭐ (1 Star)</option>
            </select>
            <button type="submit" style={styles.submitBtn}>
              Submit Review
            </button>
          </form>
        )}
      </div>

      <button
        style={styles.addReviewButton}
        onClick={() => setShowForm(!showForm)}
      >
        +
      </button>
    </div>
  );
}

export default About;
