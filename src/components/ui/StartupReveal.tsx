"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { startupRoles } from "../studio/data";

// Define the exact shape so TS stops complaining about 'any'
type StartupRole = {
  company: string;
  role: string;
  period: string;
  impact: string;
  tech: string[];
};

export function StartupReveal({ visible }: { visible: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!ref.current || !visible) return;
    gsap.fromTo(ref.current.querySelectorAll(".sr-card"), 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: ref, dependencies: [visible] });

  if (!visible) return null;

  return (
    <div ref={ref} style={{ padding: "40px 24px", background: "var(--wall-2, #E2DCCE)", borderRadius: 16, marginTop: 24 , maxHeight: visible ? "2000px" : "0",  overflow: "hidden", transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1)"}}>
      <h3 style={{ marginBottom: 24, fontWeight: 700, fontSize: 24, color: "var(--ink, #1E2A33)" }}>
        Parallel Tracks: Startup Leadership During Studies
      </h3>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {(startupRoles as StartupRole[]).map((r, i) => (
          <div key={i} className="sr-card" style={{ background: "var(--card-hi, rgba(255,255,255,.6))", border: "1px solid var(--line, rgba(30,42,51,.12))", borderRadius: 12, padding: 16 }}>
            <p style={{ fontFamily: "var(--font-mono-face, monospace)", fontSize: 11, color: "var(--accent, #005EB8)", marginBottom: 4 }}>{r.period}</p>
            <h4 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 4px", color: "var(--ink, #1E2A33)" }}>{r.role}</h4>
            <p style={{ fontWeight: 600, fontSize: 14, color: "var(--ink-2, #3A4A55)", marginBottom: 8 }}>{r.company}</p>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3, #5B6B76)", marginBottom: 12 }}>{r.impact}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {r.tech.map(t => (
                <span key={t} style={{ background: "var(--pill-bg, rgba(30,42,51,.05))", padding: "2px 8px", borderRadius: 6, fontSize: 11, fontFamily: "var(--font-mono-face, monospace)", color: "var(--ink, #1E2A33)" }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StartupReveal;