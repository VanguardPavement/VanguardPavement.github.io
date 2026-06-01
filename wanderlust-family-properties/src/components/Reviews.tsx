"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Mike T.",
    location: "Atlanta, GA",
    rating: 5,
    text: "Absolutely perfect for our family vacation! The condo was spotless, the beach was incredible, and the location couldn't be better. We've already booked again for next summer!",
    date: "March 2025",
    initials: "SM",
  },
  {
    name: "Jennifer L.",
    location: "Nashville, TN",
    rating: 5,
    text: "Indian Rocks Beach is a hidden gem and this condo made it even more special. Amazing sunsets from the balcony. The kids didn't want to leave. 10/10 would recommend!",
    date: "February 2025",
    initials: "JL",
  },
  {
    name: "The Rodriguez Family",
    location: "Orlando, FL",
    rating: 5,
    text: "We've stayed at many vacation rentals and this is by far our favorite. Everything was thought of — the kitchen was fully stocked, the beds were so comfortable, and the host was super responsive.",
    date: "January 2025",
    initials: "RF",
  },
  {
    name: "David & Lisa P.",
    location: "Charlotte, NC",
    rating: 5,
    text: "Stunning property with unbeatable access to the beach. Quiet, peaceful, and exactly what we needed for a family reset. We'll definitely be back!",
    date: "December 2024",
    initials: "DP",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4 rounded-full"
            style={{ background: "#FEF9C3", color: "#A16207" }}
          >
            Guest Reviews
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
          >
            What Families Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="#FBBF24" stroke="none" />
            ))}
          </div>
          <p className="text-slate-500 text-base">5.0 average rating · 120+ verified guest reviews</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative"
            >
              <Quote
                size={28}
                className="absolute top-5 right-5 opacity-10"
                style={{ color: "#1E3A8A" }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#FBBF24" stroke="none" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">"{r.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1E3A8A, #2952b3)" }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-800">{r.name}</div>
                  <div className="text-xs text-slate-500">
                    {r.location} · {r.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
