import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import Chatbot from "./components/Chatbot"; // ✅ Import Chatbot

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer /> {/* Footer */}
      <Chatbot /> {/* ✅ Floating Chatbot */}
    </>
  );
}

export default App;
