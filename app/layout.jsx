import "./globals.css";
import { TabBar } from "@/components/Ui";

export const metadata = {
  title: "Bangkok Watthana · 4 → 7 janvier 2027",
  description: "Programme, restos, transports et bons plans à Bangkok.",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Bangkok", statusBarStyle: "black-translucent" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main>{children}</main>
        <TabBar />
      </body>
    </html>
  );
}
