"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ColorPresetPicker } from "@/components/color-preset-picker";
import { ChevronUp } from "lucide-react";

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the navbar when scrolled down at least 300px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-3 px-4 py-2 bg-background/80 backdrop-blur-md rounded-full border shadow-lg">
        <Link href="/" legacyBehavior>
          <Button variant="outline" size="sm">
            Home
          </Button>
        </Link>
        <div className="h-5 w-px bg-border" />
        <ColorPresetPicker compact />
        <div className="h-5 w-px bg-border" />
        <ThemeToggle />
        <div className="h-5 w-px bg-border" />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
