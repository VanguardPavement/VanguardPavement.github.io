"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Properties", href: "#properties" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100"
            : "h-20 bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-none group">
          <span
            className="font-serif text-lg font-700 tracking-wide"
            style={{ color: "#1E3A8A", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Wanderlust
          </span>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: "#A16207" }}
          >
            Family Properties
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-amber-600"
                style={{ color: scrolled ? "#1e293b" : "#1E3A8A", fontFamily: "'Inter', sans-serif" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18635284936"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#A16207" }}
          >
            <Phone size={15} />
            (863) 528-4936
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-none transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #1E3A8A, #2952b3)",
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#1E3A8A" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-b border-blue-100 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium py-2 border-b border-slate-100 last:border-0"
                  style={{ color: "#1E3A8A" }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 py-3 text-center text-white font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #1E3A8A, #2952b3)" }}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
