"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorPresetPicker } from "@/components/color-preset-picker";
import { ChevronUp, Home } from "lucide-react";

export function FloatingHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the header when scrolled down at least 100px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // This adds a spacer only when the header is visible
  useEffect(() => {
    const spacer = document.getElementById("header-spacer");
    if (spacer) {
      spacer.style.height = isVisible ? "56px" : "0";
    }
  }, [isVisible]);

  return (
    <>
      {/* Spacer element that adjusts height when header appears */}
      <div id="header-spacer" className="transition-all duration-300" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-background/90 backdrop-blur-md border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" legacyBehavior>
                <Button variant="ghost" size="sm" className="text-sm gap-1.5">
                  <Home className="h-4 w-4" />
                  Turbin3DS
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2.5">
              <ColorPresetPicker compact />
              <div className="h-4 w-px bg-border"></div>
              <ThemeToggle />
              <div className="h-4 w-px bg-border"></div>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={scrollToTop}
                title="Scroll to top"
              >
                <ChevronUp className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
