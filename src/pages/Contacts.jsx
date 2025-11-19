import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-11/12 mx-auto py-10 text-center">
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-pink-500">
        Contact ToyTopia
      </h2>
      <p className="text-gray-600 mb-10">
        Have questions about our toys, custom orders, or your purchase? We’d
        love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="flex flex-col items-start bg-pink-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-pink-600">
            Get In Touch
          </h3>
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-pink-400" /> +880 1234-567890
          </p>
          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-pink-400" /> hello@toytopia.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-pink-400" /> 123 Toy Street, Dhaka,
            Bangladesh
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow text-left"
        >
          <h3 className="text-xl font-semibold mb-4 text-pink-600">
            Send a Message
          </h3>

          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mb-4 focus:outline-pink-400"
            placeholder="Your name"
            required
          />

          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mb-4 focus:outline-pink-400"
            placeholder="you@example.com"
            required
          />

          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 mb-4 focus:outline-pink-400"
            placeholder="Write your message..."
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
