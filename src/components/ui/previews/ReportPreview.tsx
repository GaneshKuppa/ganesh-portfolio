"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
export function ReportPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll(".rp-bar"), { scaleX: 0 }, { scaleX: 1, stagger: 0.12, transformOrigin: "left", ease: "power3.out", delay: 0.2 });
  }, { scope: ref });
  return (
    <div ref={ref} style={{ borderRadius: 12, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontFamily: "var(--font-mono-face, monospace)", fontSize: 10, color: "var(--ink-3, #5B6B76)" }}>
        <span>bi · ad-hoc dashboard</span><span style={{ color: "var(--tone-teal, #1F7A6B)" }}>done</span>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[70, 45, 88, 60].map((w, i) => (
          <div key={i} style={{ height: 8, width: "100%", borderRadius: 9999, background: "var(--pill-bg, rgba(30,42,51,.04))" }}>
            <div className="rp-bar" style={{ height: 8, width: w + "%", borderRadius: 9999, background: "var(--tone-teal, #1F7A6B)" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ReportPreview;
