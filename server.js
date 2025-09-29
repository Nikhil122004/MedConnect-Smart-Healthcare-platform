import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// =====================
// App setup
// =====================
const app = express();
app.use(cors());
app.use(express.json());

// =====================
// MongoDB connection
// =====================
mongoose
  .connect("mongodb://127.0.0.1:27017/healthDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// =====================
// Mongoose Schemas
// =====================

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", userSchema);

// Review Schema
const reviewSchema = new mongoose.Schema({
  name: String,
  text: String,
  stars: Number,
});
const Review = mongoose.model("Review", reviewSchema);

// AppointmentBooking Schema
const appointmentBookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  state: String,
  hospital: String,
  department: String,
  date: String,
  time: { type: String, default: () => new Date().toLocaleTimeString() },
  createdAt: { type: Date, default: Date.now },
});
const AppointmentBooking = mongoose.model("AppointmentBooking", appointmentBookingSchema);

// Contact Schema ✅
// =====================
// Message Schema
// =====================
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

// =====================
// Message Routes
// =====================

// Send message (contact form)
app.post("/messages", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.json({ message: "Message sent successfully!", data: newMessage });
  } catch (err) {
    res.status(500).json({ message: "Error sending message", error: err });
  }
});

// Get all messages (for admin)
app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages", error: err });
  }
});

// Book appointment
app.post("/appointments", async (req, res) => {
  try {
    const newAppointment = new AppointmentBooking(req.body);
    await newAppointment.save();
    res.json({
      message: "Appointment booked successfully!",
      appointment: newAppointment,
    });
  } catch (err) {
    res.status(500).json({ message: "Error booking appointment", error: err });
  }
});

// Get today's appointments
app.get("/appointments/today", async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todaysAppointments = await AppointmentBooking.find({
      createdAt: { $gte: today, $lt: tomorrow },
    });

    res.json(todaysAppointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching today's appointments", error: err });
  }
});

// Nearby hospitals
app.get("/nearby", (req, res) => {
  const hospitals = [
    { name: "City Hospital", address: "123 Main St", distance: "2 km" },
    { name: "Sunrise Clinic", address: "45 Health Rd", distance: "3.5 km" },
    { name: "Wellness Center", address: "78 Care Ave", distance: "5 km" },
  ];
  res.json(hospitals);
});

// ✅ Save contact form
app.post("/api/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ success: true, message: "Contact info saved!", contact: newContact });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving contact info", error: err });
  }
});

// =====================
// Start Server
// =====================
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
