import type { Metadata } from "next";
import "./globals.css";
import { telegraf } from "./fonts/font";

export const metadata: Metadata = {
  title: "Deevoe's Portfolio | Creative Developer & Designer", // Be specific and engaging
  description:
    " Explore Deevoe's innovative projects in web development, design, and interactive experiences.", // A concise description of your portfolio
  keywords:
    "Deevoe, portfolio, web developer, designer,full-stack, frontend, React, Next.js, GSAP, animation, interactive, creative developer, backend, Node.js, Nest.js, Go(Golang), Express.js, MongoDB, PostgreSQL, MySQL, Tailwind CSS, CSS3, HTML5, JavaScript, TypeScript, web design, UI/UX design",
  authors: [{ name: "Deevoe", url: "https://yourdomain.com" }],
  creator: "Deevoe",
  publisher: "Deevoe",
  openGraph: {
    title: "Deevoe's Portfolio | Software Engineer",
    description:
      "Explore Deevoe's innovative projects in web development, design, and interactive experiences.",
    url: "https://yourdomain.com", // Your production URL
    siteName: "Deevoe's Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deevoe's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deevoe's Portfolio | Software Engineer",
    description:
      "Explore Deevoe's innovative projects in web development, design, and interactive experiences.",
    creator: "@hol_segun", // Your Twitter handle
    images: ["https://yourdomain.com/twitter-image.png"], // Path to your Twitter card image
  },
  robots: {
    // Optional: good for explicitly stating indexing preferences
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // manifest: "/site.webmanifest", // If you have a webmanifest
  // icons: { // For favicons and app icons
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${telegraf.className}  antialiased`}>{children}</body>
    </html>
  );
}
