"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
const ROWS: [string, string][] = [["SELECT … WHERE flag<>‘OK’", "query"], ["37 rows returned", "anomaly"], ["join key drift", "root cause"], ["correction + JIRA logged", "closed"]];
export function AnomalyPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current.querySelectorAll(".an-row"), { opacity: 1, y: 0, stagger: 0.22, ease: "power2.out", delay: 0.15 });
  }, { scope: ref });
  return (
    <div ref={ref} style={{ borderRadius: 12, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontFamily: "var(--font-mono-face, monospace)", fontSize: 10, color: "var(--ink-3, #5B6B76)" }}>
        <span>infosys · anomaly triage</span><span style={{ color: "var(--tone-blue, #2F5D8C)" }}>running</span>
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        {ROWS.map(([a, b], i) => (
          <div key={i} className="an-row" style={{ display: "flex", justifyContent: "space-between", opacity: 0, transform: "translateY(6px)", fontFamily: "var(--font-mono-face, monospace)", fontSize: 10 }}>
            <span style={{ color: "var(--ink, #1E2A33)" }}>{a}</span><span style={{ color: "var(--accent, #005EB8)" }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AnomalyPreview;
