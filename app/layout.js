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
  title: "AyuSense Innovations | Transforming Photonic Signals into Strategic Intelligence™",
  description:
    "AyuSense Innovations builds photonic sensing, computational imaging, and AI-enabled intelligence systems for healthcare, industry, infrastructure, and defence.",
  keywords: [
    "AyuSense",
    "Photonics",
    "AI sensing",
    "Computational imaging",
    "Medical imaging",
    "Industrial monitoring",
    "Infrastructure intelligence",
    "Signal analysis",
  ],
  authors: [{ name: "AyuSense Innovations" }],
  creator: "AyuSense Innovations",
  publisher: "AyuSense Innovations",
  metadataBase: new URL("https://ayusense.com"),
  openGraph: {
    title: "AyuSense Innovations | Strategic Intelligence from Photonic Signals",
    description:
      "We turn light, sound and vibration into actionable insight for critical systems in health, industry and infrastructure.",
    url: "https://ayusense.com",
    siteName: "AyuSense Innovations",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyuSense Innovations",
    description:
      "Photonics-powered sensing and AI intelligence for healthcare, critical infrastructure and industrial systems.",
  },
  icons: {
    icon: "/LogoGloport.png",
    shortcut: "/LogoGloport.png",
    apple: "/apple-touch-icon.png",
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
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
        </div>

        {/* Main App */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-neutral-200 py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
            <p>
              © {new Date().getFullYear()} AyuSense Innovations. All rights
              reserved.
            </p>

            <p className="max-w-2xl text-center md:text-right">
              Transforming photonic signals into strategic intelligence for
              healthcare, industrial systems, infrastructure and defence.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}