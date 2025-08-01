require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "https://ashraya-1.onrender.com",
  credentials: true,
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post("/api/send-booking", (req, res) => {
  const { checkIn, checkOut, adults, children, rooms, roomName, price, userName, userPhone, userEmail } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "hotelashraya3@gmail.com",
    subject: `New Booking from ${userName}`,
    html: `
      <p><strong>Name:</strong> ${userName}</p>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Phone:</strong> ${userPhone}</p>
      <p><strong>CheckIn:</strong><br/>${checkIn}</p>
      <p><strong>CheckOut:</strong><br/>${checkOut}</p>
      <p><strong>Adults:</strong><br/>${adults}</p>
      <p><strong>Children:</strong><br/>${children}</p>
      <p><strong>Rooms:</strong><br/>${rooms}</p>
      <p><strong>Room Name:</strong><br/>${roomName}</p>
      <p><strong>Price:</strong><br/>${price}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ message: "Failed to send email" });
    res.status(200).json({ message: "Booking request sent successfully" });
  });
});

app.post("/api/send-contact", (req, res) => {
  const { userName, userEmail, userPhone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "hotelashraya3@gmail.com",
    subject: `New Contact Form Submission: ${subject} from ${userName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${userName}</p>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Phone:</strong> ${userPhone || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ message: "Failed to send contact email" });
    res.status(200).json({ message: "Contact form submitted successfully" });
  });
});

app.post("/api/send-dinein", (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: "hotelashraya3@gmail.com",
    subject: `New Dine-In Reservation from ${name}`,
    html: `
      <h2>New Dine-In Reservation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Special Requests:</strong><br/>${specialRequests ? specialRequests.replace(/\n/g, "<br/>") : "None"}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) return res.status(500).json({ message: "Failed to send reservation email" });
    res.status(200).json({ message: "Dine-in reservation sent successfully" });
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
