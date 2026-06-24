import { Inter, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio — Creative Developer & Digital Storyteller",
  description:
    "A cinematic portfolio experience showcasing creative development, digital storytelling, and immersive web experiences.",
  openGraph: {
    title: "Portfolio — Creative Developer & Digital Storyteller",
    description:
      "A cinematic portfolio experience showcasing creative development, digital storytelling, and immersive web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
