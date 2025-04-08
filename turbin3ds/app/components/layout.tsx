"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const categories = [
    { name: "Basic Inputs", href: "/components/basic-inputs" },
    { name: "Form Components", href: "/components/form-components" },
    { name: "Data Display", href: "/components/data-display" },
    { name: "Feature Components", href: "/components/feature-components" },
    { name: "Layout", href: "/components/layout" },
    { name: "Feedback", href: "/components/feedback" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Back to Home
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 md:shrink-0">
          <div className="sticky top-8 space-y-1">
            {categories.map((category) => (
              <Link key={category.href} href={category.href}>
                <Button
                  variant={pathname === category.href ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
