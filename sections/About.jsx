// app/contact/page.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import project1 from "@/public/setup.webp";

export default function ContactPage() {
  const MotionImage = motion(Image);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_ljwea9e", // Service ID
        "template_0v8ouco", // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "fDorMcnXEmQXM2NZB" // Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold mb-10 text-center"
      >
        Let’s Build Something Amazing Together
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111] p-8 rounded-xl shadow-lg"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Message *
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project or inquiry"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                rows="5"
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <p
                className={`text-sm ${
                  status.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Image + Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MotionImage
            src={project1}
            alt="Contact"
            className="rounded-xl mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            priority
          />

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {[
              { icon: "📧", title: "Email Me", text: "sharmashashwat929@gmail.com" },
              {
                icon: "⏳",
                title: "Response Time",
                text: "Usually within 24 hours.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-[#111] p-4 rounded-lg flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
