"use client";

import { motion } from "framer-motion";
import {
  Waves, Wifi, Car, Wind, Tv, UtensilsCrossed, WashingMachine,
  ShieldCheck, Sun, Coffee, Baby, PawPrint
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Beach Access", desc: "Steps to white sand Gulf beaches" },
  { icon: Wifi, label: "High-Speed WiFi", desc: "Fast, reliable internet included" },
  { icon: Car, label: "Free Parking", desc: "Dedicated parking for guests" },
  { icon: Wind, label: "Central A/C", desc: "Climate controlled comfort" },
  { icon: Tv, label: "Smart TV", desc: "Netflix, HBO & more included" },
  { icon: UtensilsCrossed, label: "Full Kitchen", desc: "Cook your favorite meals" },
  { icon: WashingMachine, label: "Washer/Dryer", desc: "In-unit laundry facilities" },
  { icon: ShieldCheck, label: "Secure Entry", desc: "Keyless, 24/7 secure access" },
  { icon: Sun, label: "Private Balcony", desc: "Gulf or garden view balconies" },
  { icon: Coffee, label: "Coffee Station", desc: "Start mornings right" },
  { icon: Baby, label: "Family Friendly", desc: "Cribs & highchairs available" },
  { icon: PawPrint, label: "Pet Friendly", desc: "Well-behaved pets welcome" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-white">
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
            Amenities
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
          >
            Everything You Need
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Our condos come fully stocked so you can relax from the moment you arrive. No need to pack half your house.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(30,58,138,0.12)" }}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-slate-100 bg-slate-50 cursor-default transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: "linear-gradient(135deg, #1E3A8A15, #1E3A8A25)" }}
              >
                <a.icon size={22} style={{ color: "#1E3A8A" }} />
              </div>
              <div className="font-semibold text-sm text-slate-800 mb-1">{a.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
