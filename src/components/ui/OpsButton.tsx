"use client";
import { useState, useEffect } from "react";

export function OpsButton() {
  const [open, setOpen] = useState(false);

  // Listen for the toggle event from anywhere on the page
  useEffect(() => {
    const handler = () => setOpen(o => !o);
    window.addEventListener('studio:toggle-ops', handler);
    return () => window.removeEventListener('studio:toggle-ops', handler);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "40px 0", padding: "0 24px" }}>
      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('studio:toggle-ops'))}
        aria-expanded={open}
        style={{
          padding: "12px 24px",
          borderRadius: 9999, // Pill shape
          border: "1px solid var(--line, rgba(30,42,51,.12))",
          background: open ? "var(--ink, #1E2A33)" : "transparent",
          color: open ? "#fff" : "var(--ink, #1E2A33)",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          transition: "all .3s cubic-bezier(0.4, 0, 0.2, 1)",
          fontFamily: "var(--font-mono-face, monospace)",
          letterSpacing: ".05em",
          boxShadow: open ? "0 4px 12px rgba(0,0,0,.1)" : "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 8
        }}
      >
        {/* Icon changes based on state */}
        <span style={{ fontSize: 18 }}>{open ? "−" : "+"}</span>
        
        {open ? "Hide Parallel Tracks" : "Show Parallel Tracks"}
        
        {/* Subtle hint text below or beside if needed, but keeping it clean */}
      </button>
      
      {!open && (
        <p style={{ marginTop: 8, fontSize: 11, color: "var(--ink-3, #5B6B76)", fontStyle: "italic" }}>
          Leadership roles held concurrently with B.Tech studies
        </p>
      )}
    </div>
  );
}
export default OpsButton;