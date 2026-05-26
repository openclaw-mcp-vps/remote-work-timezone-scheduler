import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeZone Scheduler — Find Optimal Meeting Times",
  description: "Analyzes team timezones and suggests fair meeting times that minimize after-hours attendance for remote teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="01a542c5-14e8-4f61-bde7-24dbc242c722"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
