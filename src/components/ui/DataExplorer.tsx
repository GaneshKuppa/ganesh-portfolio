"use client";
import { useRef, useState, type ChangeEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Q = { sql: string; note: string; cols: string[]; rows: (string | number)[][] };
const QUERIES: Q[] = [
  { sql: "SELECT COUNT(*) AS anomalies FROM events WHERE integrity_flag <> 'OK'", note: "Data-integrity sweep", cols: ["anomalies"], rows: [[37]] },
  { sql: "SELECT suite, pass_rate FROM test_runs ORDER BY pass_rate DESC LIMIT 3", note: "Test-automation coverage", cols: ["suite", "pass_rate"], rows: [["regression", 0.97], ["data-validation", 0.94], ["smoke", 0.99]] },
  { sql: "SELECT model, roc_auc FROM ml_eval ORDER BY roc_auc DESC", note: "Model evaluation", cols: ["model", "roc_auc"], rows: [["skywave-calibrated", 0.94], ["baseline", 0.81]] },
  { sql: "SELECT user, action FROM access_log WHERE action = 'DENIED' ORDER BY ts DESC LIMIT 5", note: "Security audit trail", cols: ["user", "action"], rows: [["user_07", "write"], ["user_19", "admin"], ["user_07", "delete"]] },
];

export function DataExplorer() {
  const root = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const q = QUERIES[i];
  useGSAP(() => {
    if (!root.current) return;
    gsap.fromTo(root.current.querySelectorAll(".de-row"), { opacity: 0, y: 8 }, { opacity: 1, y: 0, stagger: 0.06, ease: "power2.out" });
  }, { scope: root, dependencies: [i] });

  const run = () => {
    const t = typed.trim().toLowerCase();
    const m = QUERIES.findIndex((x) => x.sql.toLowerCase() === t);
    if (m >= 0) { setI(m); return; }
    const qm = /^q([1-4])$/.exec(t);
    if (qm) setI(Number(qm[1]) - 1);
  };

  return (
    <section id="explorer" style={{ position: "relative", padding: "80px 0" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 24px" }}>
        <p style={{ fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3, #5B6B76)" }}>Data explorer</p>
        <h2 style={{ fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.95, fontSize: "clamp(28px,4vw,44px)", color: "var(--ink, #1E2A33)", margin: "10px 0 24px" }}>Query it, see the answer</h2>
        <div style={{ overflow: "hidden", borderRadius: 14, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "var(--card-hi, rgba(255,255,255,.55))" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, borderBottom: "1px solid var(--line, rgba(30,42,51,.12))", padding: 12 }}>
            {QUERIES.map((_, k) => (
              <button key={k} onClick={() => setI(k)} style={{ borderRadius: 8, padding: "6px 10px", fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, cursor: "pointer", border: "none", background: k === i ? "var(--accent, #005EB8)" : "var(--pill-bg, rgba(30,42,51,.04))", color: k === i ? "#fff" : "var(--ink, #1E2A33)" }}>q{k + 1}</button>
            ))}
          </div>
          <pre style={{ overflowX: "auto", padding: 16, margin: 0, fontFamily: "var(--font-mono-face, monospace)", fontSize: 13, color: "var(--ink, #1E2A33)" }}>{q.sql}</pre>
          <div style={{ display: "flex", gap: 8, borderTop: "1px solid var(--line, rgba(30,42,51,.12))", padding: 12 }}>
            <input value={typed} onChange={(e: ChangeEvent<HTMLInputElement>) => setTyped(e.target.value)} onKeyDown={(e) => e.key === "Enter" && run()} placeholder="paste a query or pick q1-q4" style={{ flex: 1, borderRadius: 8, border: "1px solid var(--line, rgba(30,42,51,.12))", background: "transparent", padding: "8px 12px", fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, outline: "none", color: "var(--ink, #1E2A33)" }} />
            <button onClick={run} style={{ borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none", background: "var(--ink, #1E2A33)", color: "var(--paper, #F4F1EA)" }}>run</button>
          </div>
          <div ref={root} style={{ borderTop: "1px solid var(--line, rgba(30,42,51,.12))", padding: 16 }}>
            <p style={{ marginBottom: 8, fontFamily: "var(--font-mono-face, monospace)", fontSize: 11, color: "var(--ink-3, #5B6B76)" }}>{q.note}</p>
            <table style={{ width: "100%", fontFamily: "var(--font-mono-face, monospace)", fontSize: 12, borderCollapse: "collapse" }}>
              <thead><tr>{q.cols.map((c) => <th key={c} style={{ paddingBottom: 8, textAlign: "left", color: "var(--accent, #005EB8)" }}>{c}</th>)}</tr></thead>
              <tbody>{q.rows.map((r, k) => (
                <tr key={k} className="de-row">{r.map((cell, j) => <td key={j} style={{ padding: "4px 16px 4px 0", color: "var(--ink, #1E2A33)" }}>{cell}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DataExplorer;
