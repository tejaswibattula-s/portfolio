import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matte Siva Sai Prakash — VLSI & Embedded Systems Engineer",
  description:
    "Portfolio of Matte Siva Sai Prakash, an Electronics & Communication Engineering student specializing in VLSI, embedded systems, and IoT. SIH 2025 Grand Finale Winner.",
  openGraph: {
    title: "Matte Siva Sai Prakash — VLSI & Embedded Systems Engineer",
    description:
      "Electronics & Communication Engineering student. SIH 2025 Grand Finale Winner. Building reliable real-time hardware systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
