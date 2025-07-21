import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/reviewsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Schema & Model
const reviewSchema = new mongoose.Schema({
  name: String,
  text: String,
  stars: Number,
});

const Review = mongoose.model("Review", reviewSchema);

// ✅ Routes
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

// Start Server
app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
