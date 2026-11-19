import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./cursor.css";
import "./studio.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Script from "next/script";

const SITE = "https://kuppa-ganesh.vercel.app";

const display = Onest({ variable: "--font-display", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono-face", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kuppa Ganesh | Software & Data Engineer",
  description:
    "MSc Advanced Computing (AI) graduate with 5+ years in data quality, automation and analysis within large, regulated organisations. Open to data, security, BI and software roles across the IT sector. SQL, Python, Advanced Excel, Power BI, AWS.",
  keywords: ["Kuppa Ganesh","Software Engineer","Data Engineer","Data Analyst","Cyber Security Analyst","Business Intelligence","SQL","Python","Machine Learning","Cloud","AWS","Automation","Test Automation","Portfolio"],
  applicationName: "Kuppa Ganesh",
  authors: [{ name: "Kuppa Ganesh", url: SITE }],
  creator: "Kuppa Ganesh",
  publisher: "Kuppa Ganesh",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kuppa Ganesh | Software & Data Engineer",
    description: "Data · Software · AI · Security. Turning complex systems into clear, reliable, secure outcomes.",
    url: "/", siteName: "Kuppa Ganesh", type: "website", locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: "Kuppa Ganesh | Software & Data Engineer", description: "5+ years in large-scale data & software environments. SQL, Python, BI, AWS." },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: "Kuppa Ganesh", alternateName: "Kuppa Ganesh Portfolio", publisher: { "@id": `${SITE}/#person` } },
    { "@type": "Person", "@id": `${SITE}/#person`, name: "Kuppa Ganesh", jobTitle: "Software & Data Engineer", url: `${SITE}/`,
      description: "Data and software specialist with 5+ years in SQL querying, anomaly investigation, test automation, statistical analysis and reporting within large, regulated global organisations. Open to data, security, BI and software roles.",
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Leeds", sameAs: "https://www.leeds.ac.uk" },
      knowsAbout: ["SQL","Python","Advanced Excel","Power BI","Tableau","Data Warehouse","Business Intelligence","Statistical Analysis","Anomaly Detection","Test Automation","JIRA","AWS","Cloud","Cyber Security Fundamentals","Data Protection","Machine Learning","Relational Database Theory"],
      sameAs: ["https://github.com/GaneshKuppa","https://www.linkedin.com/in/kuppa-ganesh"] },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`${display.variable} ${mono.variable}`}>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}