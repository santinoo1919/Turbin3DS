import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ColorPresetProvider } from "@/components/color-preset-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingHeader } from "@/components/floating-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turbin3DS Design System",
  description: "A modern design system for building beautiful interfaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const themeKey = "turbin3ds-theme";
                const theme = localStorage.getItem(themeKey) || "system";
                
                if (theme === "dark" || 
                    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                
                const presetKey = "ui-color-preset";
                const preset = localStorage.getItem(presetKey) || "default";
                document.documentElement.classList.add("preset-" + preset);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="turbin3ds-theme">
          <ColorPresetProvider>
            <TooltipProvider>
              <FloatingHeader />
              {children}
            </TooltipProvider>
          </ColorPresetProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
