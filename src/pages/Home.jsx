import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";   // ✅ Import CountUp
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // toggle
  };

  const blogPosts = [
    {
      title: "5 Tips for a Healthier Lifestyle",
      snippet: "Learn simple ways to improve your overall health and well-being.",
      fullContent:
        "Learn simple ways to improve your overall health and well-being. Eat balanced meals, exercise regularly, sleep well, and stay hydrated. Mental health is equally important, so meditate and manage stress.",
      image: "/images/1blog.jpg",
    },
    {
      title: "Understanding Telemedicine",
      snippet: "Discover how online consultations can save time and provide quality care.",
      fullContent:
        "Discover how online consultations can save time and provide quality care. Telemedicine allows patients to consult with doctors via video calls, chat, or email. It's convenient, safe, and efficient for non-emergency cases.",
      image: "/images/2blog.jpg",
    },
    {
      title: "Preventive Health Checkups",
      snippet: "Why regular checkups are important for long-term health.",
      fullContent:
        "Why regular checkups are important for long-term health. Routine health screenings can detect issues early, prevent complications, and ensure timely treatment. Stay proactive with your health!",
      image: "/images/3blog.jpg",
    },
    {
        title: "Healthy Eating Habits",
  snippet: "Tips for balanced nutrition and mindful eating.",
  fullContent:
    "Learn how to maintain a balanced diet with essential nutrients. Discover portion control, meal planning, and ways to include more fruits, vegetables, and whole grains in your daily meals for overall wellness.",
     image: "/images/4blog.jpg",
    },
    {
 title: "Exercise and Fitness",
  snippet: "Simple routines to stay active and fit.",
  fullContent: "Incorporate physical activity into your daily life to boost energy and improve health. From home workouts to outdoor activities, learn exercises that strengthen your body and enhance mental well-being.",
      image: "/images/5blog.jpg",
    },
  ];

  return (
    <div>
      {/* Landing Hero Section */}
      <section className="landing-hero-wrapper">
        <div className="landing-content">
          <h1 className="landing-title">
            MedConnect - Your all in one digital healthcare partner — connect, consult, and care anytime, anywhere.
          </h1>
          <p className="landing-description"></p>
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

      {/* Services Section */}
      <section
        className="promise-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem",
          backgroundColor: "#f5f7ff",
          borderRadius: "75px",
          margin: "4rem",
        }}
      >
        <div className="promise-text">
          <h2
            style={{
              color: "#fbfafaff",
              fontSize: "3.2rem",
              marginBottom: "1rem",
            }}
          >
            MedConnect Services
          </h2>
          <p style={{ fontSize: "1.5rem", marginBottom: "4rem" }}>
            Discover a wide range of healthcare services tailored for your needs. Explore how MedConnect can make your healthcare journey seamless and convenient.
          </p>
          <button
            style={{
              backgroundColor: "#93040bff",
              color: "white",
              padding: "1.4rem 1.9rem",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/services")}
          >
            Explore Services
          </button>
        </div>
        <div className="promise-image">
          <img
            src="/images/30.png"
            alt="Best Services"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </section>

      {/* ✅ Statistics Section with CountUp */}
      <section className="statistics-section">
        <h2 className="section-title">Our Achievements</h2>
        <div className="stats-container">
          <div className="stat-box">
            <h2 className="stat-number">
              <CountUp end={500} duration={4} />+
            </h2>
            <p className="stat-label">Doctors Connected</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">
              <CountUp end={10000} duration={4} separator="," />+
            </h2>
            <p className="stat-label">Patients Served</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">
              <CountUp end={95} duration={4} />%
            </h2>
            <p className="stat-label">Satisfaction Rate</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">
              <CountUp end={150} duration={4} />+
            </h2>
            <p className="stat-label">Hospitals Partnered</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">
              <CountUp end={200} duration={4} />+
            </h2>
            <p className="stat-label">Cities Covered</p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* Blog / Resources Section */}
      <section className="blog-section">
        <h2 className="section-title">Health Tips & Resources</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`blog-card ${expandedIndex === index ? "expanded" : ""}`}
            >
              {/* Blog Image */}
              <img src={post.image} alt={post.title} />

              {/* Blog Content */}
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{expandedIndex === index ? post.fullContent : post.snippet}</p>
                <button
                  className="blog-link"
                  onClick={() => handleReadMore(index)}
                >
                  {expandedIndex === index ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
