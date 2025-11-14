"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
    contact: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-cream to-blush/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-rose mb-4">RSVP</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-rose-gold" />
            <span className="text-gold-accent text-2xl">💌</span>
            <div className="h-px w-12 bg-rose-gold" />
          </div>
          <p className="text-soft-text mt-4">Let us know you'll be joining us on our special day!</p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
            <p className="text-green-800 font-semibold">✨ Thank you for your RSVP! See you on the big day! 💕</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/70 backdrop-blur-md rounded-2xl p-8 border-2 border-rose-gold/30 shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="block text-soft-text font-medium mb-2">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold bg-cream/50"
              placeholder="Enter your full name"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-soft-text font-medium mb-2">Number of Guests</label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold bg-cream/50"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-soft-text font-medium mb-2">Contact Information</label>
            <input
              type="tel"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold bg-cream/50"
              placeholder="Your phone number or email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-soft-text font-medium mb-2">Message for the Couple</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-champagne rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-gold bg-cream/50 resize-none"
              placeholder="Share your wishes and congratulations..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-deep-rose hover:bg-deep-rose/90 text-white py-3 rounded-full text-lg font-medium transition-all duration-300"
          >
            ✨ Confirm Your Attendance
          </Button>
        </form>
      </div>
    </section>
  )
}
