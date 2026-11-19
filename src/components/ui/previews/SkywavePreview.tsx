"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
const STEPS = ["7,700+ logs ingested", "physics features engineered", "probability calibrated", "ROC-AUC 0.94"];
export function SkywavePreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current.querySelectorAll(".sw-step"), { opacity: 1, x: 0, stagger: 0.25, ease: "power2.out", delay: 0.2 });
  }, { scope: ref });
  return (
    <div ref={ref} style={{ borderRadius: 12, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontFamily: "var(--font-mono-face, monospace)", fontSize: 10, color: "var(--ink-3, #5B6B76)" }}>
        <span>skywave · hf prediction</span><span style={{ color: "var(--tone-plum, #6B4E71)" }}>done</span>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
        {STEPS.map((s, i) => (
          <li key={i} className="sw-step" style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0, transform: "translateX(-8px)", fontFamily: "var(--font-mono-face, monospace)", fontSize: 11, color: "var(--ink, #1E2A33)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: "var(--tone-plum, #6B4E71)" }} />{s}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SkywavePreview;
