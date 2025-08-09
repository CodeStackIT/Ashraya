import React, { useState } from "react";
import Button from "./Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://ashraya.onrender.com/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          userName: "",
          userEmail: "",
          userPhone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      setError("There was an error sending your message. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto">
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p className="font-bold">Message Sent!</p>
          <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="userName"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="userEmail"
                className="block text-gray-700 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="userPhone"
                className="block text-gray-700 font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                placeholder="+977-XXXXXXXXXX"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="">Select a subject</option>
                <option value="Booking Inquiry">Booking Inquiry</option>
                <option value="Restaurant Reservation">
                  Restaurant Reservation
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

              <Button
        type="submit"
        variant="primary"
        className="w-full py-3"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
