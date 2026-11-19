"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
const LOG: [string, string][] = [
  ["user_42 · read", "allow"],
  ["user_07 · write", "deny"],
  ["svc_backup · read", "allow"],
  ["user_19 · admin", "deny"],
];
export function SecurityPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".sec-lock"), { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, ease: "back.out(1.6)", delay: 0.1 });
    gsap.to(ref.current.querySelectorAll(".sec-row"), { opacity: 1, x: 0, stagger: 0.18, ease: "power2.out", delay: 0.15 });
  }, { scope: ref });
  return (
    <div ref={ref} style={{ borderRadius: 12, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, fontFamily: "var(--font-mono-face, monospace)", fontSize: 10, color: "var(--ink-3, #5B6B76)" }}>
        <span>security · access log</span>
        <span className="sec-lock" style={{ display: "inline-grid", placeItems: "center", width: 18, height: 18, borderRadius: 5, background: "var(--tone-blue, #2F5D8C)", color: "#fff", fontSize: 9, fontWeight: 700 }}>lock</span>
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        {LOG.map(([a, b], i) => (
          <div key={i} className="sec-row" style={{ display: "flex", justifyContent: "space-between", opacity: 0, transform: "translateX(-8px)", fontFamily: "var(--font-mono-face, monospace)", fontSize: 10 }}>
            <span style={{ color: "var(--ink, #1E2A33)" }}>{a}</span>
            <span style={{ color: b === "deny" ? "#b3402f" : "var(--tone-teal, #1F7A6B)", fontWeight: 600 }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SecurityPreview;