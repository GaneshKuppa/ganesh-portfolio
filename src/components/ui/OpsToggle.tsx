"use client";
import { useState, useEffect } from "react";
import { StartupReveal } from "./StartupReveal";

export function OpsToggle() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(prev => !prev);
    window.addEventListener('studio:toggle-ops', handler);
    return () => window.removeEventListener('studio:toggle-ops', handler);
  }, []);

  return <StartupReveal visible={show} />;
}
export default OpsToggle;