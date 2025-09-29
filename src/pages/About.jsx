import React, { useState, useEffect } from "react";
import "../styles/About.css";

function About() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", text: "", stars: 5 });
  const [showForm, setShowForm] = useState(false);

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
        if (response.ok) {
          // Add review returned from server (with MongoDB _id)
          setReviews([...reviews, data.review]);
          setNewReview({ name: "", text: "", stars: 5 });
          setShowForm(false);
        } else {
          console.error("Error:", data.message);
          alert(data.message);
        }
      } catch (error) {
        console.error("Error saving review:", error);
      }
    }
  };

  return (
    <div className="about-container">
      {/* Intro Section */}
      <div className="intro-section">
        <div className="intro-text">
          <h1 className="heading">About Us</h1>
          <p className="paragraph">
            Welcome to <span className="highlight">MedConnect</span>!
            At MedConnect, we believe that quality healthcare should be accessible, efficient, and patient-centered. Our mission is to bridge the gap between patients, doctors, and healthcare providers through innovative technology and compassionate care.
            <br />
            We are more than just a platform—we are your trusted partner in managing health. Whether it’s booking appointments, connecting with specialists, accessing medical records, or finding the right hospital, MedConnect ensures a seamless healthcare experience at your fingertips.
          </p>
          <button
            className="learn-more-button"
            onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f10c0cff")}
          >
            Learn More
          </button>
        </div>
        <div className="founder-card">
          <img src="/images/nk.jpg" alt="Founder" className="founder-image" />
          <h3 className="founder-name">Nikhil Kumar Singh</h3>
          <p className="founder-title">Founder & CEO</p>
        </div>
      </div>

      {/* Locations */}
      <div className="locations-section">
        <h2 className="locations-heading">Our Locations</h2>
        <div className="locations-wrapper">
          <div className="left-column">
            <div className="location-card">
              <h3 className="location-heading">New Delhi, India</h3>
              <p className="location-text">
                New Delhi Railway Station, Bhavbhuti Marg, Ratan Lal Market, Kamla Market, Ajmeri Gate, New Delhi, Delhi, 110006
              </p>
            </div>
            <div className="location-card">
              <h3 className="location-heading">Mumbai, India</h3>
              <p className="location-text">
                Vijay Nagar, MIDC, Marol, Andheri East, Mumbai, Maharashtra 400047
              </p>
            </div>
            <div className="location-card">
              <h3 className="location-heading">Kolkata, India</h3>
              <p className="location-text">
                DC Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064
              </p>
            </div>
          </div>
          <div className="map-container">
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
      <div className="reviews-section">
        <h2 className="reviews-heading">What Our Customers Say</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review._id}>
              <div className="stars">
                {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <span className="reviewer-name">- {review.name}</span>
            </div>
          ))}
        </div>

        {showForm && (
          <form className="review-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Add Your Review</h3>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleInputChange}
            />
            <textarea
              className="textarea"
              name="text"
              placeholder="Write your review..."
              value={newReview.text}
              onChange={handleInputChange}
            ></textarea>
            <select
              name="stars"
              value={newReview.stars}
              onChange={handleInputChange}
              className="input"
            >
              <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
              <option value="3">⭐⭐⭐ (3 Stars)</option>
              <option value="2">⭐⭐ (2 Stars)</option>
              <option value="1">⭐ (1 Star)</option>
            </select>
            <button type="submit" className="submit-btn">
              Submit Review
            </button>
          </form>
        )}
      </div>

      <button
        className="add-review-button"
        onClick={() => setShowForm(!showForm)}
      >
        +
      </button>
    </div>
  );
}

export default About;
