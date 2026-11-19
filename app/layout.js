import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AyuSense Deeptech Private Limited | Photonics and AI",
  description:
    "AyuSense Deeptech Private Limited develops photonic sensing, computational imaging and AI-enabled intelligence for healthcare, industry and critical systems.",
  keywords: [
    "AyuSense",
    "Photonics",
    "AI sensing",
    "Computational imaging",
    "Medical imaging",
    "Industrial monitoring",
    "Artificial Intelligence",
    "Signal analysis",
  ],
  authors: [{ name: "AyuSense Deeptech Private Limited" }],
  creator: "AyuSense Deeptech Private Limited",
  publisher: "AyuSense Deeptech Private Limited",
  metadataBase: new URL("https://ayusense.com"),
  openGraph: {
    title: "AyuSense Deeptech Private Limited | Strategic Intelligence from Photonic Signals",
    description:
      "We turn light, sound and vibration into actionable insight for healthcare, industry and critical systems.",
    url: "https://ayusense.com",
    siteName: "AyuSense Deeptech Private Limited",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyuSense Deeptech Private Limited",
    description:
      "Photonics-powered sensing and AI intelligence for healthcare and industry.",
  },
  icons: {
    icon: "/image/ayusense-mark.png",
    shortcut: "/image/ayusense-mark.png",
    apple: "/image/ayusense-mark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-black flex flex-col">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        {/* Main App */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <p className="md:whitespace-nowrap">
              © {new Date().getFullYear()} AyuSense Deeptech Private Limited. All rights reserved.
            </p>

            <p className="max-w-2xl text-center md:text-right md:whitespace-nowrap">
              Photonic sensing and AI for healthcare, industry and critical systems.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}