"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Calendar, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "",
    property: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "linear-gradient(160deg, #0f2060 0%, #1E3A8A 60%, #162d6e 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase mb-4 rounded-full"
            style={{ background: "rgba(251,191,36,0.15)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.3)" }}
          >
            Book Your Stay
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Plan Your Escape?
          </h2>
          <p className="text-blue-200 max-w-xl mx-auto text-base leading-relaxed">
            Contact us to check availability, ask questions, or reserve your Gulf Coast getaway today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: Phone, label: "Call or Text", value: "(863) 528-4936", href: "tel:+18635284936" },
              { icon: Mail, label: "Email Us", value: "brigido.baltazar@gmail.com", href: "mailto:brigido.baltazar@gmail.com" },
              { icon: MessageSquare, label: "Response Time", value: "Usually within 1 hour", href: null },
              { icon: Calendar, label: "Check-in / Check-out", value: "Flexible scheduling available", href: null },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(251,191,36,0.15)" }}
                >
                  <item.icon size={18} style={{ color: "#FBBF24" }} />
                </div>
                <div>
                  <div className="text-xs text-blue-300 font-medium mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-white">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-10 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <CheckCircle size={48} style={{ color: "#FBBF24" }} className="mb-4" />
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-blue-200 text-sm">
                  We&apos;ll get back to you within the hour to confirm your reservation.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-300 outline-none focus:ring-2 transition-all"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", outlineColor: "#FBBF24" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-300 outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-300 outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Guests</label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
                      style={{ background: "rgba(30,58,138,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      <option value="">Select</option>
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} guest{n>1?'s':''}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Check-In</label>
                    <input
                      type="date"
                      value={form.checkin}
                      onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-blue-200 mb-1.5 block">Check-Out</label>
                    <input
                      type="date"
                      value={form.checkout}
                      onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", colorScheme: "dark" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-blue-200 mb-1.5 block">Property</label>
                  <select
                    value={form.property}
                    onChange={(e) => setForm({ ...form, property: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-white outline-none transition-all"
                    style={{ background: "rgba(30,58,138,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <option value="">Any available property</option>
                    <option value="shoreline">The Shoreline Suite – Indian Rocks Beach</option>
                    <option value="sunset">The Sunset Retreat – Indian Shores</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-blue-200 mb-1.5 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="Any special requests or questions?"
                    className="w-full px-4 py-2.5 rounded-lg text-sm text-white placeholder-blue-300 outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #A16207, #CA8A04)",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  <Send size={15} />
                  Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
