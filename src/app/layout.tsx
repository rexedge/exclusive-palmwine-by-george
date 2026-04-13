import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EXCLUSIVE Palmwine by George | Premium Palm Wine for Events",
  description:
    "Premium, fresh palm wine supply for weddings, parties, corporate events, and celebrations. Experience authentic tradition with a touch of luxury.",
  keywords: [
    "palm wine",
    "palmwine",
    "event drinks",
    "Nigerian palm wine",
    "wedding palm wine",
    "party drinks supply",
    "traditional drinks",
  ],
  openGraph: {
    title: "EXCLUSIVE Palmwine by George",
    description: "Premium palm wine supply for your events and celebrations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-lora)">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
