"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

// The doors' colours stack up as the page loads, then slide apart to open it.
const pills = [
  { label: "Kuppa Ganesh", c: "#16202A", t: "#F1F0EA" },
  { label: "Data & analytics", c: "#2F5D8C", t: "#F1F0EA" },
  { label: "Software & automation", c: "#1F7A6B", t: "#F1F0EA" },
  { label: "Machine learning", c: "#6B4E71", t: "#F1F0EA" },
  { label: "Security & cloud", c: "#2E7DA6", t: "#F1F0EA" },
  { label: "Open to IT roles", c: "#F1F0EA", t: "#16202A" },
];

const FILL = 2100;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function Loader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const lenis = useLenis();
  const lenisRef = useRef(lenis);

  useEffect(() => {
    lenisRef.current = lenis;
    if (!gone) lenis?.stop();
  }, [lenis, gone]);

  useEffect(() => {
    const root = rootRef.current;
    const num = numRef.current;
    if (!root || !num) return;
    const pillEls = [...root.querySelectorAll<HTMLElement>(".ld-pill")];
    const timers: number[] = [];
    let raf = 0;
    let done = false;

    const ready = () => {
      if (document.documentElement.dataset.ready) return;
      document.documentElement.dataset.ready = "1";
      window.dispatchEvent(new Event("intro:ready"));
    };
    // whatever happens, the site always opens: an intro that hasn't finished in 9s lets you straight in
    const bailOut = () => {
      if (done) return;
      done = true;
      ready();
      lenisRef.current?.start();
      setGone(true);
    };
    timers.push(window.setTimeout(bailOut, 9000));

    // real progress: fonts first, then the page's assets; the counter never runs ahead of what has loaded
    let loaded = 0.55;
    document.fonts?.ready.then(() => (loaded = Math.max(loaded, 0.85)));
    const onLoad = () => (loaded = 1);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    timers.push(window.setTimeout(onLoad, 5000));

    // one colour joins the stack for each sixth of the way
    const paint = (p: number) => {
      root.style.setProperty("--p", p.toFixed(3));
      pillEls.forEach((el, k) => el.classList.toggle("on", p >= k / 6 + 0.02 || p >= 1));
    };

    const finish = () => {
      root.classList.add("out"); // the colours slide away and the curtain lifts
      timers.push(window.setTimeout(ready, 340)); // the hero plays its entrance as it is uncovered
      timers.push(window.setTimeout(bailOut, 1550));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      num.textContent = "100";
      paint(1);
      timers.push(window.setTimeout(finish, 500));
    } else {
      let t0: number | null = null;
      let shown = 0;
      const tick = (now: number) => {
        if (t0 === null) t0 = now;
        const want = Math.min(ease(Math.min(1, (now - t0) / FILL)), loaded);
        shown += (want - shown) * 0.15;
        if (want - shown < 0.002) shown = want;
        paint(shown);
        num.textContent = String(Math.round(shown * 100)).padStart(3, "0");
        if (shown < 1) raf = requestAnimationFrame(tick);
        else timers.push(window.setTimeout(finish, 700)); // the last colour lands, then it opens
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (gone) return null;

  return (
    <div ref={rootRef} className="loader" aria-hidden="true">
      <div className="ld-bg" />
      <div className="ld-stack">
        {pills.map((p, k) => (
          <div
            key={p.label}
            className="ld-pill"
            style={{ "--k": k, "--c": p.c, "--t": p.t, "--dir": k % 2 ? -1 : 1 } as React.CSSProperties}
          >
            <span>{p.label}</span>
          </div>
        ))}
      </div>
      <div className="ld-hud">
        <div className="ld-top">
          <span>
            <b>Kuppa Ganesh</b> · Portfolio
          </span>
          <span>Data · Software · Security · AI</span>
        </div>
        <div className="ld-bot">
          <p className="ld-num">
            <small>Opening up the work</small>
            <span ref={numRef}>000</span>
          </p>
          <div className="ld-bar">
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}
