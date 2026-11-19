"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
export function KeyboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current.querySelector(".kb-cursor"), { x: 120, y: 48, duration: 1.2, ease: "power2.inOut", repeat: -1, yoyo: true });
    gsap.to(ref.current.querySelector(".kb-dwell"), { scale: 1.4, opacity: 0.4, repeat: -1, yoyo: true, duration: 0.6 });
  }, { scope: ref });
  return (
    <div ref={ref} style={{ borderRadius: 12, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))", padding: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontFamily: "var(--font-mono-face, monospace)", fontSize: 10, color: "var(--ink-3, #5B6B76)" }}>
        <span>accessibility · gaze dwell</span><span style={{ color: "var(--tone-sand, #B98A4E)" }}>running</span>
      </div>
      <div style={{ position: "relative", height: 96, borderRadius: 8, background: "var(--wall-2, #E2DCCE)" }}>
        <span className="kb-dwell" style={{ position: "absolute", left: 24, top: 24, width: 24, height: 24, borderRadius: 9999, background: "var(--accent, #005EB8)" }} />
        <span className="kb-cursor" style={{ position: "absolute", left: 24, top: 24, width: 12, height: 12, borderRadius: 9999, background: "var(--ink, #1E2A33)" }} />
      </div>
    </div>
  );
}
export default KeyboardPreview;
