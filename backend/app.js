require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// CORS settings for your frontend
app.use(cors({
  origin: "https://ashraya-1.onrender.com", // your frontend URL
  credentials: true,
}));

// Parse incoming JSON
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Nodemailer transporter setup (Gmail)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // secure port
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL,    // your Gmail
    pass: process.env.PASSWORD, // App password from Google
  },
});

// Test the transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("Email server connection failed:", error);
  } else {
    console.log("Email server is ready to take messages");
  }
});

app.get("/", (req, res) => {
  res.send("Ashraya Backend is running 🚀");
});

// ===== Contact Form API =====
app.post("/api/send-contact", async (req, res) => {
  try {
    const { userName, userEmail, userPhone, subject, message } = req.body;

    if (!userName || !userEmail || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const mailOptions = {
      from: `"${userName}" <${process.env.EMAIL}>`,
      to: "hotelashraya3@gmail.com", // Always send to Ashraya
      subject: `Contact Form: ${subject} from ${userName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Phone:</strong> ${userPhone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Contact form submitted successfully" });

  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ message: "Failed to send contact email" });
  }
});

// ===== Booking API =====
app.post("/api/send-booking", async (req, res) => {
  try {
    const { checkIn, checkOut, adults, children, rooms, roomName, price, userName, userPhone, userEmail } = req.body;

    const mailOptions = {
      from: `"${userName}" <${process.env.EMAIL}>`,
      to: "hotelashraya3@gmail.com",
      subject: `New Booking from ${userName}`,
      html: `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${userEmail}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
        <p><strong>Check-In:</strong> ${checkIn}</p>
        <p><strong>Check-Out:</strong> ${checkOut}</p>
        <p><strong>Adults:</strong> ${adults}</p>
        <p><strong>Children:</strong> ${children}</p>
        <p><strong>Rooms:</strong> ${rooms}</p>
        <p><strong>Room Name:</strong> ${roomName}</p>
        <p><strong>Price:</strong> ${price}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Booking request sent successfully" });

  } catch (error) {
    console.error("Error sending booking email:", error);
    res.status(500).json({ message: "Failed to send booking email" });
  }
});

// ===== Dine-in Reservation API =====
app.post("/api/send-dinein", async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, specialRequests } = req.body;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL}>`,
      to: "hotelashraya3@gmail.com",
      subject: `New Dine-In Reservation from ${name}`,
      html: `
        <h2>New Dine-In Reservation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong><br/>${specialRequests ? specialRequests.replace(/\n/g, "<br/>") : "None"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Dine-in reservation sent successfully" });

  } catch (error) {
    console.error("Error sending dine-in email:", error);
    res.status(500).json({ message: "Failed to send reservation email" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
