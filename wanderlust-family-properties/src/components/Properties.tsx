"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Bed, Bath, Wifi, Car, Wind, Waves } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "The Shoreline Suite",
    location: "Indian Rocks Beach, FL",
    tagline: "Wake up to Gulf sunrises every morning",
    beds: 2,
    baths: 2,
    guests: 6,
    price: "from $199/night",
    tags: ["Gulf View", "Pool", "Pet Friendly"],
    features: [Wifi, Car, Wind, Waves],
    featureLabels: ["Free WiFi", "Parking", "A/C", "Beach Access"],
    color: "#1E3A8A",
    accent: "#FBBF24",
    emoji: "🌊",
  },
  {
    id: 2,
    name: "The Sunset Retreat",
    location: "Indian Shores, FL",
    tagline: "Stunning sunsets over the Gulf of Mexico",
    beds: 3,
    baths: 2,
    guests: 8,
    price: "from $249/night",
    tags: ["Oceanfront", "Hot Tub", "Family Size"],
    features: [Wifi, Car, Wind, Waves],
    featureLabels: ["Free WiFi", "Parking", "A/C", "Beach Access"],
    color: "#A16207",
    accent: "#1E3A8A",
    emoji: "🌅",
  },
];

export default function Properties() {
  return (
    <section id="properties" className="py-24 px-6" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4 rounded-full"
            style={{ background: "#DBEAFE", color: "#1E3A8A" }}
          >
            Our Properties
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
          >
            Handpicked Gulf Coast Condos
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Each property is carefully curated for comfort, style, and that perfect beachside feeling your family deserves.
          </p>
        </motion.div>

        {/* Property cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {properties.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              {/* Image placeholder with gradient */}
              <div
                className="h-56 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${p.color}ee, ${p.color}99)`,
                }}
              >
                <div className="text-7xl">{p.emoji}</div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full"
                      style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#1e293b" }}
                    >
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin size={12} />
                      {p.location}
                    </div>
                  </div>
                  <div
                    className="text-sm font-bold px-3 py-1.5 rounded-full"
                    style={{ background: "#DBEAFE", color: "#1E3A8A" }}
                  >
                    {p.price}
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{p.tagline}</p>

                {/* Quick stats */}
                <div className="flex gap-4 mb-5 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Bed size={15} style={{ color: "#1E3A8A" }} />
                    {p.beds} beds
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Bath size={15} style={{ color: "#1E3A8A" }} />
                    {p.baths} baths
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    <Users size={15} style={{ color: "#1E3A8A" }} />
                    Up to {p.guests} guests
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {p.features.map((Icon, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "#F1F5F9" }}
                      >
                        <Icon size={16} style={{ color: "#1E3A8A" }} />
                      </div>
                      <span className="text-xs text-slate-500 text-center leading-tight">
                        {p.featureLabels[idx]}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto block text-center py-3 text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #1E3A8A, #2952b3)",
                    clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                  }}
                >
                  Check Availability
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
