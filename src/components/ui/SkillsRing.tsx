"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const RINGS = [
  { cat: "Data & SQL", color: "var(--tone-blue, #2F5D8C)" },
  { cat: "Software & Automation", color: "var(--tone-teal, #1F7A6B)" },
  { cat: "Machine Learning", color: "var(--tone-plum, #6B4E71)" },
  { cat: "Cloud & Security", color: "var(--accent, #005EB8)" },
  { cat: "Reporting & BI", color: "var(--tone-sand, #9C8A6A)" },
];

export function SkillsRing() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".sr-ring"),
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.12, ease: "back.out(1.4)",
        scrollTrigger: { trigger: root.current, start: "top 75%" } });
  }, { scope: root });

  return (
    <section id="skills" style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3, #5B6B76)" }}>What I work with</p>
        <h2 style={{ fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.95, fontSize: "clamp(28px,4vw,44px)", color: "var(--ink, #1E2A33)", margin: "10px 0 0" }}>Five pillars, one engineer</h2>
      </div>
      <div ref={root} style={{ position: "relative", margin: "40px auto 0", width: "min(80vw,520px)", aspectRatio: "1 / 1" }}>
        {RINGS.map((r, i) => {
          const pct = 30 + i * 17;
          return (
            <div key={r.cat} className="sr-ring" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: pct + "%", height: pct + "%" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "9999px", border: "1px solid " + r.color, boxShadow: "inset 0 0 24px " + r.color + "22" }} />
              <span style={{ position: "absolute", left: "50%", top: 0, transform: "translate(-50%,-50%)", display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: "9999px", background: r.color, color: "#F4F1EA", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>{r.cat}</span>
            </div>
          );
        })}
        <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", display: "grid", placeItems: "center", width: 64, height: 64, borderRadius: "9999px", background: "var(--ink, #1E2A33)", color: "var(--paper, #F4F1EA)", fontWeight: 700 }}>KG</span>
      </div>
    </section>
  );
}
export default SkillsRing;
