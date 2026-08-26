import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { LanguageProvider } from "@/i18n/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const siteUrl = "https://www.brunosimone.dev";
const title = "Bruno Simone | Full-Stack Developer";
const description =
  "Portfolio de Bruno Simone, Full-Stack Developer en Mar del Plata. Experiencia en React, TypeScript, Next.js, Node.js, NestJS, SaaS e inteligencia artificial.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Bruno Simone",
  },
  description,
  alternates: {
    canonical: "/",
  },
  applicationName: "Portfolio de Bruno Simone",
  authors: [{ name: "Bruno Simone", url: siteUrl }],
  creator: "Bruno Simone",
  publisher: "Bruno Simone",
  category: "technology",
  keywords: [
    "Bruno Simone",
    "Full-Stack Developer",
    "Software Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "NestJS",
    "Mar del Plata",
    "Argentina",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Portfolio de Bruno Simone",
    title,
    description,
    locale: "es_AR",
    images: [
      {
        url: "/portfolio-image.png",
        width: 2190,
        height: 1180,
        alt: "Portfolio de Bruno Simone, Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/portfolio-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Portfolio de Bruno Simone",
                  alternateName: "Bruno Simone",
                  description,
                  inLanguage: ["es-AR", "en"],
                  author: { "@id": `${siteUrl}/#person` },
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: "Bruno Daniel Simone",
                  alternateName: "Bruno Simone",
                  url: siteUrl,
                  image: `${siteUrl}/bruno.jpeg`,
                  jobTitle: "Full-Stack Developer",
                  worksFor: {
                    "@type": "Organization",
                    name: "WeCheck AI",
                    url: "https://wecheck.ai/",
                  },
                  homeLocation: {
                    "@type": "Place",
                    name: "Mar del Plata, Buenos Aires, Argentina",
                  },
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Universidad Tecnológica Nacional",
                    alternateName: "UTN",
                  },
                  knowsAbout: [
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "NestJS",
                    "Software as a Service",
                    "Artificial Intelligence",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/bruno-daniel-simone/",
                    "https://github.com/BrunoSimone",
                  ],
                },
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
