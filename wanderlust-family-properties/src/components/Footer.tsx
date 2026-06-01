import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ background: "#0f1a3d", borderColor: "rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <div
                className="text-lg font-bold text-white mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Wanderlust
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#FBBF24" }}>
                Family Properties
              </div>
            </div>
            <p className="text-sm text-blue-300 leading-relaxed">
              Premium Gulf Coast vacation condos in Indian Rocks Beach and Indian Shores, FL — where family memories are made.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">Quick Links</div>
            <ul className="flex flex-col gap-2">
              {[
                ["Properties", "#properties"],
                ["Amenities", "#amenities"],
                ["Location", "#location"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-blue-300 hover:text-amber-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+18635284936" className="flex items-center gap-2 text-sm text-blue-300 hover:text-amber-300 transition-colors">
                <Phone size={14} />
                (863) 528-4936
              </a>
              <a href="mailto:brigido.baltazar@gmail.com" className="flex items-center gap-2 text-sm text-blue-300 hover:text-amber-300 transition-colors">
                <Mail size={14} />
                brigido.baltazar@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-blue-300">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Indian Rocks Beach &amp; Indian Shores, FL 33785
              </div>
            </div>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div>© {new Date().getFullYear()} Wanderlust Family Properties. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} fill="#FBBF24" stroke="none" className="mx-1" /> on the Gulf Coast
          </div>
        </div>
      </div>
    </footer>
  );
}
