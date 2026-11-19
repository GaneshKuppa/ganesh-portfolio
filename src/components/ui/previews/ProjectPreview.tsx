"use client";
import { SkywavePreview } from "./SkywavePreview";
import { AnomalyPreview } from "./AnomalyPreview";
import { ReportPreview } from "./ReportPreview";
import { KeyboardPreview } from "./KeyboardPreview";
import { SecurityPreview } from "./SecurityPreview";

const PREVIEWS: Record<string, () => React.JSX.Element> = {
  "Anomaly Investigation": AnomalyPreview,
  "Reporting Automation": ReportPreview,
  "Eye-Controlled Keyboard": KeyboardPreview,
  "QA & Test Automation": ReportPreview,
  "SKYWAVE": SkywavePreview,
  "Fake-News Detector": SkywavePreview,
  "Data Protection in Practice": SecurityPreview,
  "Cloud & Network Fundamentals": SecurityPreview,
};

export function ProjectPreview({ title }: { title: string }) {
  const Preview = PREVIEWS[title];
  return Preview ? <Preview /> : null;
}
export default ProjectPreview;