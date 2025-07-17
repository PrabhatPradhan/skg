"use client";
import React, { useState } from "react";

export default function FormRight() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("http://skgpsd.com/skgpsdbe/public/api/web/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
      } else {
        const err = await res.json();
        setError(err.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error, please try again.");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">PSD Service Inquiry</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address (optional)"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Describe your request or additional notes"
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          rows={4}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Request
        </button>

        {success && (
          <p className="text-green-600 mt-2">Form submitted successfully!</p>
        )}
        {error && (
          <p className="text-red-600 mt-2">Error: {error}</p>
        )}
      </form>
    </div>
  );
}
