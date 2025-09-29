import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Dr. Srinivas",
    role: "Gastroenterologist",
    quote: "MedConnect helped me to view my patient's complete medical history in a glance. Features like single page Rx, has helped me to bring down my prescription writing time drastically.",
    image: "/images/client4.jpg",
  },
  {
    name: "Dr. Ananya",
    role: "Cardiologist",
    quote: "MedConnect has made patient management so much easier and efficient. I can now focus more on care than paperwork.",
    image: "/images/client2.jpg",
  },
  {
    name: "Dr. Rahul",
    role: "Dermatologist",
    quote: "The platform is extremely user-friendly and helps track patients’ progress seamlessly.",
    image: "/images/client5.jpg",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Doctors Say About MedConnect</h2>

      <div className="testimonial-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={testimonials[current].image} alt={testimonials[current].name} />
          </div>
          <div className="testimonial-content">
            <p>"{testimonials[current].quote}"</p>
            <h4>{testimonials[current].name}</h4>
            <span>{testimonials[current].role}</span>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="testimonial-dots">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${current === idx ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
