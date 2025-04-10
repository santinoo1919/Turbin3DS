"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Turbin3DS UI Components</h1>
        <ThemeToggle />
      </div>
      <p className="text-muted-foreground mb-8">
        Browse through the different categories of UI components available in
        this design system.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Basic UI Components */}
        <ComponentCard
          title="Basic Inputs"
          description="Buttons, inputs, selects, and other basic form controls"
          href="/components/basic-inputs"
        />

        {/* Form Components */}
        <ComponentCard
          title="Form Components"
          description="Form layouts, validations, and specialized inputs"
          href="/components/form-components"
        />

        {/* Data Display */}
        <ComponentCard
          title="Data Display"
          description="Cards, badges, avatars, and other data visualization components"
          href="/components/data-display"
        />

        {/* Feature Components */}
        <ComponentCard
          title="Feature Components"
          description="Higher-level components used in the application"
          href="/components/feature-components"
        />

        {/* Layout Components */}
        <ComponentCard
          title="Layout Components"
          description="Layout structuring components and patterns"
          href="/components/layout"
        />

        {/* Feedback Components */}
        <ComponentCard
          title="Feedback Components"
          description="Alerts, toasts, dialogs, and other feedback mechanisms"
          href="/components/feedback"
        />
      </div>
    </div>
  );
}

function ComponentCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="block">
      <div className="border rounded-lg p-6 hover:border-primary hover:shadow-sm transition-all h-full flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <div className="mt-4">
          <Button variant="outline" className="w-full">
            View Components
          </Button>
        </div>
      </div>
    </Link>
  );
}
