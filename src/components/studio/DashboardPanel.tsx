"use client";

const LEDGER = [
  { label: "Reliability kept", value: "99.9%" },
  { label: "Records analysed", value: "7,700+" },
  { label: "Manual effort removed", value: "60%" },
  { label: "Coverage gained", value: "45%" },
  { label: "Colleagues trained", value: "15" },
  { label: "ROC-AUC (SKYWAVE)", value: "0.94" },
];

export function DashboardPanel({ on }: { on: boolean }) {
  if (!on) return null;
  const bars = [42, 58, 51, 70, 66, 84, 79, 92];
  const max = Math.max(...bars);
  return (
    <div style={{ display: "grid", gap: 24, marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      <div style={{ borderRadius: 14, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--wall-2, #E2DCCE)", padding: 16 }}>
        <p style={{ marginBottom: 12, fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, color: "var(--ink-3, #5B6B76)" }}>Monthly report volume</p>
        <svg viewBox="0 0 200 80" style={{ width: "100%" }}>
          {bars.map((b, k) => (
            <rect key={k} x={k * 25 + 4} y={80 - (b / max) * 70} width={16} height={(b / max) * 70} rx={3} fill="var(--accent, #005EB8)" />
          ))}
        </svg>
      </div>
      <div style={{ borderRadius: 14, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--wall-2, #E2DCCE)", padding: 16 }}>
        <p style={{ marginBottom: 12, fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, color: "var(--ink-3, #5B6B76)" }}>Data quality</p>
        <svg viewBox="0 0 100 100" style={{ display: "block", margin: "0 auto", width: 112, height: 112 }}>
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--line, rgba(30,42,51,.12))" strokeWidth="12" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--tone-teal, #1F7A6B)" strokeWidth="12" strokeDasharray={`${0.999 * 251} 251`} strokeLinecap="round" transform="rotate(-90 50 50)" />
          <text x="50" y="55" textAnchor="middle" fontFamily="var(--font-mono-face, monospace)" fill="var(--ink, #1E2A33)" fontSize="16">99.9%</text>
        </svg>
      </div>
      <div style={{ borderRadius: 14, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--wall-2, #E2DCCE)", padding: 16 }}>
        <p style={{ marginBottom: 12, fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, color: "var(--ink-3, #5B6B76)" }}>Verified ledger</p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 4, fontFamily: "var(--font-mono-face, monospace)", fontSize: 12 }}>
          {LEDGER.map((n) => (
            <li key={n.label} style={{ display: "flex", justifyContent: "space-between", color: "var(--ink, #1E2A33)" }}>
              <span style={{ color: "var(--ink-3, #5B6B76)" }}>{n.label}</span><b>{n.value}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DashboardPanel;
