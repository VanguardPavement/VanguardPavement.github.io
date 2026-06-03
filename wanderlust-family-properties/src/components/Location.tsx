"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, Plane, Utensils, ShoppingBag, Fish, Sunset } from "lucide-react";

const nearbyItems = [
  { icon: Waves, label: "Gulf Beach", dist: "0.1 mi", color: "#1E3A8A" },
  { icon: Utensils, label: "Waterfront Dining", dist: "0.3 mi", color: "#A16207" },
  { icon: ShoppingBag, label: "Shops & Boutiques", dist: "0.5 mi", color: "#1E3A8A" },
  { icon: Fish, label: "Fishing Pier", dist: "0.8 mi", color: "#A16207" },
  { icon: Sunset, label: "Sunset Beach", dist: "1.2 mi", color: "#1E3A8A" },
  { icon: Car, label: "Clearwater Beach", dist: "8 mi", color: "#A16207" },
  { icon: Plane, label: "Tampa Airport", dist: "35 min", color: "#1E3A8A" },
  { icon: Plane, label: "St. Pete Airport", dist: "20 min", color: "#A16207" },
];

// Re-import Waves since it's used above
import { Waves } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 px-6" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4 rounded-full"
              style={{ background: "#DBEAFE", color: "#1E3A8A" }}
            >
              Location
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
            >
              Indian Rocks &amp;
              <br />
              <span style={{ color: "#A16207" }}>Indian Shores, FL</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Nestled on Florida's stunning Gulf Coast, Indian Rocks Beach and Indian Shores offer a quieter, more intimate alternative to the crowded tourist strips — crystal-clear water, powder-soft sand, and a charming local community.
            </p>

            <div className="flex items-start gap-3 p-4 rounded-xl mb-6" style={{ background: "#DBEAFE" }}>
              <MapPin size={20} style={{ color: "#1E3A8A", flexShrink: 0, marginTop: 2 }} />
              <div>
                <div className="font-semibold text-sm text-slate-800 mb-0.5">Prime Gulf Coast Location</div>
                <div className="text-sm text-slate-600">
                  Indian Rocks Beach & Indian Shores, Pinellas County, FL 33785
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "#FEF9C3" }}>
              <Clock size={20} style={{ color: "#A16207", flexShrink: 0, marginTop: 2 }} />
              <div>
                <div className="font-semibold text-sm text-slate-800 mb-0.5">Easy to Reach</div>
                <div className="text-sm text-slate-600">
                  35 minutes from Tampa International, 20 minutes from St. Pete/Clearwater Airport
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: nearby grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6">
              <h3
                className="text-lg font-bold mb-5"
                style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
              >
                What&apos;s Nearby
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {nearbyItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "#F8FAFC" }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}18` }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 leading-tight">{item.label}</div>
                      <div className="text-xs font-medium" style={{ color: item.color }}>{item.dist}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
