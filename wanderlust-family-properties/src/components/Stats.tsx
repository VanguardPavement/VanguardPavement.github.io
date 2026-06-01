"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 120, suffix: "+", label: "Happy Guests" },
  { value: 5, suffix: ".0", label: "Average Rating" },
  { value: 2, suffix: "", label: "Premium Condos" },
  { value: 100, suffix: "%", label: "Beach Access" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-16 px-6" style={{ background: "linear-gradient(135deg, #1E3A8A, #162d6e)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div
              className="text-4xl md:text-5xl font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FBBF24" }}
            >
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="text-sm text-blue-200 font-medium tracking-wide uppercase">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
