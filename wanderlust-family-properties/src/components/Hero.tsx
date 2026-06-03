"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Star, ChevronDown } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.15 },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0f2060 0%, #1E3A8A 40%, #1a4fa8 70%, #0e2a6a 100%)",
      }}
    >
      {/* Animated wave overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          style={{ fill: "#F8FAFC" }}
        >
          <motion.path
            initial={{ d: "M0,160 C360,200 1080,120 1440,160 L1440,220 L0,220 Z" }}
            animate={{
              d: [
                "M0,160 C360,200 1080,120 1440,160 L1440,220 L0,220 Z",
                "M0,140 C360,180 1080,100 1440,140 L1440,220 L0,220 Z",
                "M0,160 C360,200 1080,120 1440,160 L1440,220 L0,220 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, transparent, #FBBF24, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-28">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
          style={{
            background: "rgba(161,98,7,0.18)",
            border: "1px solid rgba(251,191,36,0.35)",
            color: "#FBBF24",
          }}
        >
          <MapPin size={12} />
          Indian Rocks Beach &amp; Indian Shores, FL
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Gulf Coast
          <br />
          <em className="not-italic" style={{ color: "#FBBF24" }}>
            Paradise Awaits
          </em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Handpicked vacation condos steps from the turquoise waters of the Gulf — perfect for families seeking unforgettable memories.
        </motion.p>

        {/* Stars */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-1 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="#FBBF24" stroke="none" />
          ))}
          <span className="ml-2 text-sm text-blue-200">5.0 · 120+ happy guests</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#properties"
            className="px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-1 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #A16207, #CA8A04)",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            View Properties
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-sm font-semibold tracking-wide text-white border border-white/30 hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
            style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
          >
            Check Availability
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-36 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} className="text-blue-200 opacity-60" />
      </motion.div>
    </section>
  );
}
