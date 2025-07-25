import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/reviewsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Review Schema & Model
const reviewSchema = new mongoose.Schema({
  name: String,
  text: String,
  stars: Number,
});

const Review = mongoose.model("Review", reviewSchema);

// Appointment Schema & Model
const appointmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  state: String,
  department: String,
  date: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Routes - Reviews
app.get("/reviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reviews", error: err });
  }
});

app.post("/reviews", async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.json({ message: "Review added successfully!", review: newReview });
  } catch (err) {
    res.status(500).json({ message: "Error saving review", error: err });
  }
});

// Routes - Appointments
app.post("/appointments", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.json({
      message:
        "Thanks for booking appointment. In 24 hours, you will receive a confirmation message.",
      appointment: newAppointment,
    });
  } catch (err) {
    res.status(500).json({ message: "Error booking appointment", error: err });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
